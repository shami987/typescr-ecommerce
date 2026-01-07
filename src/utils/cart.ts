// import type { CartItem } from "../types/CartItems";
// import type { Dessert } from "../types/Dessert";

// // Function to add a dessert to the cart
// export function addToCart(
//     cart: CartItem[],      // The current cart
//     dessert: Dessert,      // The dessert you want to add
//     quantity: number       // How many of that dessert you want to add
// ): CartItem[] {
//     if(quantity <= 0) return cart;

//     const existing = cart.find(item => item.dessert.id === dessert.id);
//     if (existing) {
//         return cart.map(item =>
//             item.dessert.id === dessert.id
//         ? { ...item, quantity: item.quantity + quantity }
//         : item
//         )
//     }
//     return [
//     ...cart,
//     { dessert, quantity, addedAt: new Date() }
//   ];
// }

// export function removeFromCart(
//   cart: CartItem[],
//   dessertId: string
// ): CartItem[] {
//   return cart.filter(item => item.dessert.id !== dessertId);
// }

// export function updateQuantity(
//   cart: CartItem[],
//   dessertId: string,
//   newQuantity: number
// ): CartItem[] {

//   if (newQuantity <= 0) {
//     return removeFromCart(cart, dessertId);
//   }

//   return cart.map(item =>
//     item.dessert.id === dessertId
//       ? { ...item, quantity: newQuantity }
//       : item
//   );
// }

// export function calculateTotal(cart: CartItem[]): number {
//   const subtotal = cart.reduce(
//     (sum, item) => sum + item.dessert.price * item.quantity,
//     0
//   );

//   const tax = subtotal * 0.1; // 10% tax
//   const total = subtotal + tax;

//   return Number(total.toFixed(2));
// }
