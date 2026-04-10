import { renderOrderSummary } from "./checkout/order-summary.js";
import { renderPaymentSummary } from "./checkout/payment-summary.js";

/* import "../data/cart-class.js";
 */
//promises helps keep our code flat to prevent more nesting
import { loadCart } from "../data/cart.js";
import { loadProducts } from "../data/products.js";

Promise.all([
  newPromise((resolve) => {
    loadProducts(() => {
      resolve();
    });
  }),
  newPromise((resolve) => {
    loadCart(() => {
      resolve();
    });
  }),
]).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});

//promises are a way to wait for asynchronous code to run
/* new Promise((resolve) => {
  loadProducts(() => {
    resolve();
  });
})
  .then(() => {
    return new Promise((resolve) => {
      loadCart(() => {
        resolve();
      });
    });
  })
  .then(() => {
    renderOrderSummary();
    renderPaymentSummary();
  }); */

/* loadProducts(() => {
  loadCart(() => {
   renderOrderSummary();
    renderPaymentSummary();
  });
});
 */
