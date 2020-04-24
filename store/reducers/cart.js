import {
  ADD_PRODUCT_TO_CART,
  INCREASE_PRODUCT_IN_CART,
  REDUCE_PRODUCT_IN_CART,
  DELETE_PRODUCT_FROM_CART,
  CLEAR_CART,
} from '../actions/cart';
import { ADD_ORDER } from '../actions/orders';

import CartItem from '../../models/cart-items';

const initialState = {
  products: {},
  totalSum: 0,
};

export default (state = initialState, actions) => {
  switch (actions.type) {
    // Add product to Cart
    case ADD_PRODUCT_TO_CART:
      const addedProduct = actions.product;

      const productTitle = addedProduct.name;
      const productPrice = addedProduct.price;

      let cartItem;

      if (state.products[addedProduct.ID]) {
        cartItem = new CartItem(
          state.products[addedProduct.ID].quantity + 1,
          productTitle,
          productPrice,
          state.products[addedProduct.ID].sum + productPrice
        );
      } else {
        cartItem = new CartItem(1, productTitle, productPrice, productPrice);
      }
      return {
        ...state,
        products: { ...state.products, [addedProduct.ID]: cartItem },
        totalSum: state.totalSum + productPrice,
      };
    // Increase Value of Product in Cart
    case INCREASE_PRODUCT_IN_CART:
      const selectedProductForIncrease = state.products[actions.pid];

      let updatedSelectedProduct;

      const updatedQuantityProduct = new CartItem(
        selectedProductForIncrease.quantity + 1,
        selectedProductForIncrease.productTitle,
        selectedProductForIncrease.productPrice,
        selectedProductForIncrease.sum + selectedProductForIncrease.productPrice
      );
      updatedSelectedProduct = {
        ...state.products,
        [actions.pid]: updatedQuantityProduct,
      };
      return {
        ...state,
        products: updatedSelectedProduct,
        totalSum: state.totalSum + selectedProductForIncrease.productPrice,
      };
    // Reduce Value of Product in Cart
    case REDUCE_PRODUCT_IN_CART:
      const selectedProduct = state.products[actions.pid];
      const selectedProductQuantity = selectedProduct.quantity;

      let updatedCartProducts;

      if (selectedProductQuantity > 1) {
        const cartItem = new CartItem(
          selectedProduct.quantity - 1,
          selectedProduct.productTitle,
          selectedProduct.productPrice,
          selectedProduct.sum - selectedProduct.productPrice
        );
        updatedCartProducts = {
          ...state.products,
          [actions.pid]: cartItem,
        };
      } else {
        updatedCartProducts = { ...state.products };
        delete updatedCartProducts[actions.pid];
      }
      return {
        ...state,
        products: updatedCartProducts,
        totalSum: state.totalSum - selectedProduct.productPrice,
      };
    // Delete product from Cart
    case DELETE_PRODUCT_FROM_CART:
      const selectedDeleteProduct = state.products[actions.pid];
      let updatedProducts = { ...state.products };

      delete updatedProducts[actions.pid];

      return {
        ...state,
        products: updatedProducts,
        totalSum: state.totalSum - selectedDeleteProduct.sum,
      };
    // Clearing Cart by pressing Button
    case CLEAR_CART:
      return initialState;
    // Clearing Cart after submitting Order
    case ADD_ORDER:
      return initialState;
  }
  return state;
};
