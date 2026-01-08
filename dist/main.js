import { desserts } from "./utils/desserts.js";
import { ShoppingCart } from "./cart/ShoppingCart.js";
import { renderDessertCard } from "./components/DessertCard.js";
// import { calculateTotal } from "./utils/cart.js";
// Create a new shopping cart instance
const cart = new ShoppingCart();
const grid = document.getElementById("dessertGrid");
const cartCount = document.getElementById("cartCount");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartTotalSection = document.querySelector(".cart-total");
const deliveryBadge = document.querySelector(".delivery-badge");
const confirmBtn = document.querySelector(".confirm-order");
/* ---------- RENDER DESSERTS ---------- */
desserts.forEach(dessert => {
    const existing = cart.getItems().find(i => i.dessert.id === dessert.id);
    const initialQty = existing ? existing.quantity : 0;
    const card = renderDessertCard(dessert, addDessertToCart, (id, quantity) => {
        cart.updateQuantity(id, quantity);
        updateCartUI();
    }, initialQty);
    grid.appendChild(card);
});
// reflect current cart state on page load so totals are hidden when empty
updateCartUI();
/* ---------- MODAL ELEMENTS ---------- */
const orderModal = document.getElementById("orderModal");
const modalBody = orderModal.querySelector(".modal-body");
const modalClose = orderModal.querySelector(".modal-close");
confirmBtn.addEventListener("click", () => {
    showOrderModal();
});
modalClose.addEventListener("click", () => closeOrderModal());
orderModal.querySelector(".modal-overlay").addEventListener("click", () => closeOrderModal());
/* ---------- CART FUNCTIONS ---------- */
function addDessertToCart(dessert, quantity = 1) {
    cart.addItem(dessert, quantity);
    updateCartUI();
}
function updateCartUI() {
    const items = cart.getItems();
    cartCount.textContent = String(cart.getItemCount());
    cartItems.innerHTML = "";
    if (items.length === 0) {
        cartItems.innerHTML = `<div class="empty"><img src="image/burger.jpeg" alt="Empty cart" /><p>Your added items will appear here</p></div>`;
        cartTotal.textContent = "$0.00";
        // Hide total, badge, and button when cart is empty
        cartTotalSection.style.display = "none";
        deliveryBadge.style.display = "none";
        confirmBtn.style.display = "none";
        return;
    }
    // Show total, badge, and button when cart has items
    cartTotalSection.style.display = "flex";
    deliveryBadge.style.display = "flex";
    confirmBtn.style.display = "block";
    items.forEach(item => {
        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
      <div class="left">
        <div class="qty-controls badge">
          <button class="qty-decr" data-id="${item.dessert.id}" aria-label="Decrease">−</button>
          <span class="qty-value">${item.quantity}</span>
          <button class="qty-incr" data-id="${item.dessert.id}" aria-label="Increase">+</button>
        </div>
        <div class="meta">
          <span class="name">${item.dessert.name}</span>
          <span class="unit-price">@ $${item.dessert.price.toFixed(2)}</span>
        </div>
      </div>
      <div class="right">
        <span class="subtotal">$${(item.dessert.price * item.quantity).toFixed(2)}</span>
        <button class="remove-btn" data-id="${item.dessert.id}" aria-label="Remove">✕</button>
      </div>
    `;
        cartItems.appendChild(div);
        // Add remove button listener
        const removeBtn = div.querySelector(".remove-btn");
        removeBtn.addEventListener("click", () => {
            cart.removeItem(item.dessert.id);
            updateCartUI();
        });
        // quantity controls
        const decr = div.querySelector('.qty-decr');
        const incr = div.querySelector('.qty-incr');
        decr.addEventListener('click', () => {
            const newQ = item.quantity - 1;
            cart.updateQuantity(item.dessert.id, newQ);
            updateCartUI();
        });
        incr.addEventListener('click', () => {
            const newQ = item.quantity + 1;
            cart.updateQuantity(item.dessert.id, newQ);
            updateCartUI();
        });
    });
    cartTotal.textContent = `$${cart.getTotal().toFixed(2)}`;
}
/* ---------- ORDER MODAL ---------- */
function showOrderModal() {
    const items = cart.getItems();
    // build modal content
    modalBody.innerHTML = "";
    const header = document.createElement("div");
    header.innerHTML = `
    <h2>Order Confirmed</h2>
    <p class="lead">We hope you enjoy your food!</p>
  `;
    modalBody.appendChild(header);
    const list = document.createElement("div");
    list.className = "modal-items";
    items.forEach(it => {
        const row = document.createElement("div");
        row.className = "modal-item";
        row.innerHTML = `
      <div class="left">
        <img src="${it.dessert.image}" alt="${it.dessert.name}" />
        <div class="meta">
          <div class="name">${it.dessert.name}</div>
          <div class="qty">${it.quantity}x  @ $${it.dessert.price.toFixed(2)}</div>
        </div>
      </div>
      <div class="price">$${(it.dessert.price * it.quantity).toFixed(2)}</div>
    `;
        list.appendChild(row);
    });
    modalBody.appendChild(list);
    const footer = document.createElement("div");
    footer.className = "modal-footer";
    footer.innerHTML = `
    <div class="modal-total"><span>Order Total</span><span>$${cart.getTotal().toFixed(2)}</span></div>
    <button class="modal-confirm">Start New Order</button>
  `;
    modalBody.appendChild(footer);
    // show modal
    orderModal.setAttribute("aria-hidden", "false");
    // hook up start new order
    const startBtn = footer.querySelector(".modal-confirm");
    startBtn.addEventListener("click", () => {
        cart.clear();
        updateCartUI();
        closeOrderModal();
    });
}
function closeOrderModal() {
    orderModal.setAttribute("aria-hidden", "true");
    modalBody.innerHTML = "";
}
//# sourceMappingURL=main.js.map