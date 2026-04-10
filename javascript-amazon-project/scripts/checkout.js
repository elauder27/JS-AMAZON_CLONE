import { renderOrderSummary } from "./checkout/order-summary.js";
import { renderPaymentSummary } from "./checkout/payment-summary.js";

/* import "../data/cart-class.js";
 */
//promises helps keep our code flat to prevent more nesting
import { loadCart } from "../data/cart.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";

//shortcut for promises
async function loadPage() {
  // makes the function return a promise
  try {
    // we can use it for both async and normal code
    //we can use the "throw" to create an error
    await loadProductsFetch(); // we can only use this when we use async\
    const value = await new Promise((resolve, reject) => {
      loadCart(() => {
        //  reject("err3");
        resolve();
      });
    });
  } catch (error) {
    console.log("oops!, error, Go back to safety");
  }
  renderOrderSummary();
  renderPaymentSummary();
}

loadPage();

//async/await can only be used with a promise
/* Promise.all([
  loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  }),
]).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
}); */

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
