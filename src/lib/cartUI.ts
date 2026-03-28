import type { CartEntry } from "./cart";

export function renderMiniCartItem(item: CartEntry): string {
  const details = [
    item.selectedSize ? `Size: ${item.selectedSize}` : "",
    item.selectedColor ? `Color: ${item.selectedColor}` : "",
  ]
    .filter(Boolean)
    .join(" · ");

  return `
  <div class="flex gap-3 p-4 border-b border-ink/12 last:border-b-0">
    <div class="w-14 h-14 bg-muted rounded-lg overflow-hidden shrink-0">
      <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover" onerror="this.style.display='none'" />
    </div>
    <div class="flex-1 min-w-0">
      <p class="text-sm font-medium text-ink truncate">${item.title}</p>
      ${details ? `<p class="text-xs text-ink/45 mt-0.5">${details}</p>` : ""}
      <div class="flex items-center justify-between mt-1.5">
        <span class="text-sm font-heading font-bold">€${item.price}</span>
        <span class="text-xs text-ink/45">Qty: ${item.quantity}</span>
      </div>
    </div>
    <button
      class="text-ink/30 hover:text-accent transition-colors shrink-0 self-start mt-0.5"
      data-remove-id="${item.id}"
      data-remove-size="${item.selectedSize ?? ""}"
      data-remove-color="${item.selectedColor ?? ""}"
      aria-label="Remove ${item.title}"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>
  </div>`;
}
