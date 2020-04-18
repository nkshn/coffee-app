import { ADD_TO_CART } from '../actions/cart';
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
  }
  return state;
};
