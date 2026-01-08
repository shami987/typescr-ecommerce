export function renderDessertCard(dessert, onAdd, onSetQuantity, initialQty = 0) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
    <img src="${dessert.image}" alt="${dessert.name}">
    <div class="action-wrap">
      <button class="add-btn" aria-label="Add to cart">
        <img class="icon-add-to-cart" src="image/icon-add-to-cart.svg" alt="" aria-hidden="true">
        <span>Add to Cart</span>
      </button>
    </div>
    <div class="category">${dessert.subtitle ? dessert.subtitle : dessert.category}</div>
    <h4>${dessert.name}</h4>
    <p>$${dessert.price.toFixed(2)}</p>
  `;
    // local quantity state for this card
    let qty = 0;
    const actionWrap = card.querySelector('.action-wrap');
    const renderAddButton = () => {
        actionWrap.innerHTML = `
      <button class="add-btn" aria-label="Add to cart">
        <img class="icon-add-to-cart" src="image/icon-add-to-cart.svg" alt="" aria-hidden="true">
        <span>Add to Cart</span>
      </button>
    `;
        const addBtn = actionWrap.querySelector('.add-btn');
        addBtn.addEventListener('click', () => {
            // add one and switch to qty controls
            onAdd(dessert, 1);
            qty = 1;
            renderQtyControls();
        });
    };
    const renderQtyControls = () => {
        actionWrap.innerHTML = `
      <div class="card-qty">
        <button class="qty-decr">−</button>
        <span class="qty-value">${qty}</span>
        <button class="qty-incr">+</button>
      </div>
    `;
        const decr = actionWrap.querySelector('.qty-decr');
        const incr = actionWrap.querySelector('.qty-incr');
        const val = actionWrap.querySelector('.qty-value');
        incr.addEventListener('click', () => {
            // increment: add one more
            onAdd(dessert, 1);
            qty += 1;
            val.textContent = String(qty);
        });
        decr.addEventListener('click', () => {
            // decrement: if reaches 0, remove and show Add button
            const newQ = qty - 1;
            if (onSetQuantity) {
                onSetQuantity(dessert.id, newQ);
            }
            if (newQ <= 0) {
                qty = 0;
                renderAddButton();
            }
            else {
                qty = newQ;
                val.textContent = String(qty);
            }
        });
    };
    // initial render
    renderAddButton();
    if (initialQty && initialQty > 0) {
        qty = initialQty;
        renderQtyControls();
    }
    return card;
}
//# sourceMappingURL=DessertCard.js.map