export class ShoppingCart {
    constructor() {
        this.items = new Map();
    }
    addItem(dessert, quantity = 1) {
        const existing = this.items.get(dessert.id);
        if (existing) {
            existing.quantity += quantity;
        }
        else {
            this.items.set(dessert.id, {
                dessert,
                quantity,
                addedAt: new Date()
            });
        }
    }
    removeItem(dessertId) {
        this.items.delete(dessertId);
    }
    updateQuantity(dessertId, quantity) {
        if (quantity <= 0) {
            this.removeItem(dessertId);
            return;
        }
        const item = this.items.get(dessertId);
        if (item)
            item.quantity = quantity;
    }
    getTotal() {
        let total = 0;
        this.items.forEach(item => {
            total += item.dessert.price * item.quantity;
        });
        return Number(total.toFixed(2));
    }
    getItemCount() {
        let count = 0;
        this.items.forEach(item => count += item.quantity);
        return count;
    }
    getItems() {
        return Array.from(this.items.values());
    }
    clear() {
        this.items.clear();
    }
    get isEmpty() {
        return this.items.size === 0;
    }
}
//# sourceMappingURL=ShoppingCart.js.map