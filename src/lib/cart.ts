export interface CartEntry {
  id: string;
  slug: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
  category?: string;
  selectedColor?: string;
  selectedSize?: string;
}

const STORAGE_KEY = "sexbox-cart";

function entryKey(e: Pick<CartEntry, "id" | "selectedSize" | "selectedColor">) {
  return `${e.id}::${e.selectedSize ?? ""}::${e.selectedColor ?? ""}`;
}

function read(): CartEntry[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

function persist(items: CartEntry[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  window.dispatchEvent(new CustomEvent("cart-updated"));
}

export function getCart(): CartEntry[] {
  return read();
}

export function addToCart(entry: CartEntry): void {
  const items = read();
  const key = entryKey(entry);
  const existing = items.find((i) => entryKey(i) === key);
  if (existing) {
    existing.quantity += entry.quantity;
  } else {
    items.push({ ...entry });
  }
  persist(items);
}

export function removeFromCart(
  id: string,
  size?: string,
  color?: string,
): void {
  const items = read().filter(
    (i) => entryKey(i) !== `${id}::${size ?? ""}::${color ?? ""}`,
  );
  persist(items);
}

export function updateQuantity(
  id: string,
  size: string | undefined,
  color: string | undefined,
  quantity: number,
): void {
  const items = read();
  const key = `${id}::${size ?? ""}::${color ?? ""}`;
  const item = items.find((i) => entryKey(i) === key);
  if (item) {
    item.quantity = Math.max(1, quantity);
  }
  persist(items);
}

export function clearCart(): void {
  persist([]);
}

export function getCartCount(): number {
  return read().reduce((sum, i) => sum + i.quantity, 0);
}

export function getCartTotal(): number {
  return read().reduce((sum, i) => sum + i.price * i.quantity, 0);
}
