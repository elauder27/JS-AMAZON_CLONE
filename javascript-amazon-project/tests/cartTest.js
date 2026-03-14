import { addToCart, cart } from "../data/cart.js";

console.log("Test suite: addToCart");
console.log("adds an existing product to the cart");
//flaky test, because the cart is not reset before the test runs. If you run the test multiple times, it will fail after the first time, because the quantity of the product will be increased each time. To fix this, we need to reset the cart before each test runs.
if (
  addToCart("e43638ce-6aa0-4b85-b27f-e1d07eb678c6") === cart.length &&
  cart[0].quantity === 3
) {
  console.log("Test passed");
} else {
  console.log("Test failed");
}

if (cart.length === 1 && cart[0].quantity === 1) {
  console.log("Test passed");
} else {
  console.log("Test failed");
}
