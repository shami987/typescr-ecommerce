import type { CartItem } from "../types/CartItems";
import type { Dessert } from "../types/Dessert";
export declare class ShoppingCart {
    private items;
    addItem(dessert: Dessert, quantity?: number): void;
    removeItem(dessertId: string): void;
    updateQuantity(dessertId: string, quantity: number): void;
    getTotal(): number;
    getItemCount(): number;
    getItems(): CartItem[];
    clear(): void;
    get isEmpty(): boolean;
}
//# sourceMappingURL=ShoppingCart.d.ts.map