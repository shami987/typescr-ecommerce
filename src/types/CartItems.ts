import type { Dessert } from "./Dessert";

export interface CartItem {
  dessert: Dessert;        
  quantity: number;        
  addedAt: Date;           
}
