const cart = {
  cartItems: undefined,
  //oop makes it easy to create multiple objects with the same properties and methods, and it also makes it easy to organize the code and keep related data and functions together. It also makes it easier to maintain and update the code, because you can make changes to the object without affecting other parts of the code that use the object.
  //methods
  loadFromStorage() {
    this.cartItems = JSON.parse(localStorage.getItem("cart-oop"));
    if (!this.cartItems) {
      this.cartItems = [
        {
          productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6", //normalizing the data
          quantity: 2,
          deliveryOptionId: "1",
        },
        {
          productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
          quantity: 1,
          deliveryOptionId: "2",
        },
      ];
    }
  },

  saveToStorage() {
    localStorage.setItem("cart-oop", JSON.stringify(this.cartItems));
  },

  addToCart(productId) {
    let matchingProduct;
    this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingProduct = cartItem;
      }
    });

    if (matchingProduct) {
      matchingProduct.quantity += 1;
    } else {
      this.cartItems.push({
        productId: productId,
        quantity: 1,
        deliveryOptionId: "1",
      });
    }
    this.saveToStorage();
  },

  removeFromCart(productId) {
    const newCart = [];

    this.cartItems.forEach((cartItem) => {
      if (cartItem.productId !== productId) {
        newCart.push(cartItem);
      }
    });

    this.cartItems = newCart;
    this.saveToStorage();
  },

  updateDeliveryOption(productId, deliveryOptionId) {
    let matchingProduct;
    this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingProduct = cartItem;
      }
    });

    matchingProduct.deliveryOptionId = deliveryOptionId;
    this.saveToStorage();
  },
};

cart.loadFromStorage();
