//use pascal case to name anything that creates objects
//class = object generator
//classes use a different syntax
// classes are a better way to generate objects in oop
class Cart {
  cartItems; //public property
  #localStorageKey; //private property- cannot be accessed outside the class

  //setup code
  //method has to be named constructor
  //no return
  constructor(localStorageKey) {
    this.localStorageKey = localStorageKey;
    this.#loadFromStorage();
  }

  #loadFromStorage() {
    this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey));
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
  }

  saveToStorage() {
    localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
  }

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
  }

  removeFromCart(productId) {
    const newCart = [];

    this.cartItems.forEach((cartItem) => {
      if (cartItem.productId !== productId) {
        newCart.push(cartItem);
      }
    });

    this.cartItems = newCart;
    this.saveToStorage();
  }

  updateDeliveryOption(productId, deliveryOptionId) {
    let matchingProduct;
    this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingProduct = cartItem;
      }
    });

    matchingProduct.deliveryOptionId = deliveryOptionId;
    this.saveToStorage();
  }
}

//oop makes it easy to create multiple objects with the same properties and methods, and it also makes it easy to organize the code and keep related data and functions together. It also makes it easier to maintain and update the code, because you can make changes to the object without affecting other parts of the code that use the object.
//methods

const cart = new Cart("cart-oop");
const businessCart = new Cart("cart-business");

console.log(cart);
console.log(businessCart);

businessCart instanceof Cart;

//oop means organizing our code into objects which kinda tries to represent the real world

//classes area feature of object oriented programming - basically an object generator
