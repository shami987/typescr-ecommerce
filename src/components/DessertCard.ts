import type { Dessert } from "../types/Dessert";

export function renderDessertCard(
  dessert: Dessert,
  onAdd: (dessert: Dessert) => void
): HTMLDivElement {

  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${dessert.image}" alt="${dessert.name}">
    <h4>${dessert.name}</h4>
    <p>$${dessert.price.toFixed(2)}</p>
    <button class="add-btn" aria-label="Add to cart">
      <svg class="icon-add-to-cart" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M3 3h2l.4 2M7 13h10l3-8H6.4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16 21a1 1 0 11-2 0 1 1 0 012 0zM8 21a1 1 0 11-2 0 1 1 0 012 0z" fill="currentColor"/>
        <path d="M19 7v4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M21 9h-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
      <span>Add to Cart</span>
    </button>
  `;

  const addBtn = card.querySelector('.add-btn') as HTMLButtonElement;
  addBtn.addEventListener('click', () => onAdd(dessert));

  return card;
}
