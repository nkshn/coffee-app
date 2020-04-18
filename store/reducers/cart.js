import { ADD_TO_CART, DELETE_FROM_CART } from '../actions/cart';
import CartItem from '../../models/cart-items';

const initialState = {
  products: {},
  totalSum: 0,
};

export default (state = initialState, actions) => {
  switch (actions.type) {
    case ADD_TO_CART:
      const addedProduct = actions.product;
      const productTitle = addedProduct.name;
      const productPrice = addedProduct.price;

      if (state.products[addedProduct.ID]) {
        const updatedCartItem = new CartItem(
          state.products[addedProduct.ID].quantity + 1,
          productTitle,
          productPrice,
          state.products[addedProduct.ID].sum + productPrice
        );

        return {
          ...state,
          products: { ...state.products, [addedProduct.ID]: updatedCartItem },
          totalSum: state.totalSum + productPrice,
        };
      } else {
        const newCartItem = new CartItem(
          1,
          productTitle,
          productPrice,
          productPrice
        );
        return {
          ...state,
          products: { ...state.products, [addedProduct.ID]: newCartItem },
          totalSum: state.totalSum + productPrice,
        };
      }
    case DELETE_FROM_CART:
      const selectedProduct = state.products[actions.pid]; // selected by user
      const selectedProductQuantity = selectedProduct.quantity;

      let updatedCartItems;

      if (selectedProductQuantity > 1) {
        const updatedCartItem = new CartItem(
          selectedProduct.quantity - 1,
          selectedProduct.productTitle,
          selectedProduct.productPrice,
          selectedProduct.sum - selectedProduct.productPrice
        );
        updatedCartItems = {
          ...state.products,
          [actions.pid]: updatedCartItem,
        };
      } else {
        updatedCartItems = { ...state.products };
        delete updatedCartItems[actions.pid];
      }
      return {
        ...state,
        products: updatedCartItems,
        totalSum: state.totalSum - selectedProduct.productPrice,
      };
  }
  return state;
};
