import { DessertCategory } from "./enums.js";

export interface Dessert {
  id: string;              // unique identifier
  name: string;            // dessert name
  category: DessertCategory;
  subtitle?: string;      // short label shown above the title (e.g., 'Waffle')
  price: number;           // price in USD
  image: string;           // image URL
  description: string;     // short explanation
  inStock: boolean;        // available or not
}
