import type { CartItem } from "../types/CartItems";
import type { Dessert } from "../types/Dessert";

export class ShoppingCart {
  private items = new Map<string, CartItem>();

  addItem(dessert: Dessert, quantity: number = 1) {
    const existing = this.items.get(dessert.id);

    if (existing) {
      existing.quantity += quantity;
    } else {
      this.items.set(dessert.id, {
        dessert,
        quantity,
        addedAt: new Date()
      });
    }
  }

  removeItem(dessertId: string) {
    this.items.delete(dessertId);
  }

  updateQuantity(dessertId: string, quantity: number) {
    if (quantity <= 0) {
      this.removeItem(dessertId);
      return;
    }

    const item = this.items.get(dessertId);
    if (item) item.quantity = quantity;
  }

  getTotal(): number {
    let total = 0;
    this.items.forEach(item => {
      total += item.dessert.price * item.quantity;
    });
    return Number(total.toFixed(2));
  }

  getItemCount(): number {
    let count = 0;
    this.items.forEach(item => count += item.quantity);
    return count;
  }

  getItems(): CartItem[] {
    return Array.from(this.items.values());
  }

  clear() {
    this.items.clear();
  }

  get isEmpty() {
    return this.items.size === 0;
  }
}

