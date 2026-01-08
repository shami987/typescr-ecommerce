import { DessertCategory } from "./enums.js";
export interface Dessert {
    id: string;
    name: string;
    category: DessertCategory;
    subtitle?: string;
    price: number;
    image: string;
    description: string;
    inStock: boolean;
}
//# sourceMappingURL=Dessert.d.ts.map