import type { APIRoute } from "astro";
import Stripe from "stripe";
import { newArrivals, topSelling, featuredProduct } from "../../data/products";

export const prerender = false;

const allProducts = [...newArrivals, ...topSelling, featuredProduct];

export const POST: APIRoute = async ({ request }) => {
  const secretKey = import.meta.env.STRIPE_SECRET_KEY;

  if (!secretKey) {
    return new Response(
      JSON.stringify({ error: "Stripe is not configured. Set STRIPE_SECRET_KEY in your .env file." }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }

  const stripe = new Stripe(secretKey);

  let body: { items: Array<{ id: string; slug: string; quantity: number; selectedSize?: string; selectedColor?: string }> };

  try {
    body = await request.json();
  } catch {
    return new Response(
      JSON.stringify({ error: "Invalid request body" }),
      { status: 400, headers: { "Content-Type": "application/json" } },
    );
  }

  if (!body.items || !Array.isArray(body.items) || body.items.length === 0) {
    return new Response(
      JSON.stringify({ error: "Cart is empty" }),
      { status: 400, headers: { "Content-Type": "application/json" } },
    );
  }

  try {
    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = body.items.map((item) => {
      const product = allProducts.find((p) => p.id === item.id);
      if (!product) {
        throw new Error(`Product not found: ${item.id}`);
      }

      const description = [
        item.selectedSize ? `Size: ${item.selectedSize}` : "",
        item.selectedColor ? `Color: ${item.selectedColor}` : "",
      ]
        .filter(Boolean)
        .join(", ");

      return {
        price_data: {
          currency: "eur",
          product_data: {
            name: product.title,
            ...(description && { description }),
          },
          unit_amount: Math.round(product.price * 100),
        },
        quantity: Math.max(1, item.quantity),
      };
    });

    const origin = new URL(request.url).origin;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      shipping_address_collection: {
        allowed_countries: [
          "GR", "CY", "DE", "FR", "IT", "ES", "NL", "BE", "AT", "PT",
          "US", "GB", "IE", "SE", "DK", "FI", "PL", "CZ", "RO", "BG",
        ],
      },
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout/cancel`,
    });

    return new Response(
      JSON.stringify({ url: session.url }),
      { status: 200, headers: { "Content-Type": "application/json" } },
    );
  } catch (err: any) {
    console.error("Stripe checkout error:", err);
    return new Response(
      JSON.stringify({ error: err.message || "Failed to create checkout session" }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
};
