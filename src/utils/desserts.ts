import type { Dessert } from "../types/Dessert";
import { DessertCategory } from "../types/enums.js";

export const desserts: Dessert[] = [
  {
    id: "d1",
    name: "Waffle with Berries",
    category: DessertCategory.Waffle,
    price: 6.5,
    image: "image/waffle.jpg",
    description: "Crispy waffle topped with fresh berries",
    inStock: true
  },
  {
    id: "d2",
    name: "Vanilla Crème Brûlée",
    category: DessertCategory.CremeBrulee,
    price: 7.0,
    image: "image/creme.jpg",
    description: "Rich vanilla custard with caramelized sugar",
    inStock: true
  },
  {
    id: "d3",
    name: "Macaron Mix of Five",
    category: DessertCategory.Macaron,
    price: 8.0,
    image: "image/macaron.jpg",
    description: "Five assorted French macarons",
    inStock: true
  },
  {
    id: "d4",
    name: "Classic Tiramisu",
    category: DessertCategory.Tiramisu,
    price: 5.5,
    image: "image/tiramisu.jpg",
    description: "Italian coffee-flavored dessert",
    inStock: true
  },
  {
    id: "d5",
    name: "Pistachio Baklava",
    category: DessertCategory.Baklava,
    price: 4.0,
    image: "image/baklava.jpg",
    description: "Layers of filo pastry with pistachios",
    inStock: true
  },
  {
    id: "d6",
    name: "Lemon Meringue Pie",
    category: DessertCategory.Pie,
    price: 5.0,
    image: "image/meringue.jpg",
    description: "Tangy lemon filling with fluffy meringue",
    inStock: true
  },
  {
    id: "d7",
    name: "Red Velvet Cake",
    category: DessertCategory.Cake,
    price: 4.5,
    image: "image/cake.jpg",
    description: "Soft red velvet with cream cheese frosting",
    inStock: true
  },
  {
    id: "d8",
    name: "Salted Caramel Brownie",
    category: DessertCategory.Brownie,
    price: 5.5,
    image: "image/brownie.jpg",
    description: "Chocolate brownie with salted caramel",
    inStock: true
  },
  {
    id: "d9",
    name: "Vanilla Panna Cotta",
    category: DessertCategory.PannaCotta,
    price: 6.5,
    image: "image/image-panna-cotta-desktop.jpg",
    description: "Creamy Italian panna cotta",
    inStock: true
  }
];
