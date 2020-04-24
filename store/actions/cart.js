export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART'; // Add product to Cart
export const INCREASE_PRODUCT_IN_CART = 'INCREASE_PRODUCT_IN_CART'; // Increase Value of Product in Cart
export const REDUCE_PRODUCT_IN_CART = 'REDUCE_PRODUCT_IN_CART'; // Reduce Value of Product in Cart
export const DELETE_PRODUCT_FROM_CART = 'DELETE_PRODUCT_FROM_CART'; // Delete product from Cart

export const addProductToCart = (product) => {
  return { type: ADD_PRODUCT_TO_CART, product: product };
};
export const increaseProductInCart = (productID) => {
  return { type: INCREASE_PRODUCT_IN_CART, pid: productID };
};
export const reduceProductInCart = (productID) => {
  return { type: REDUCE_PRODUCT_IN_CART, pid: productID };
};
export const deleteProductFromCart = (productID) => {
  return { type: DELETE_PRODUCT_FROM_CART, pid: productID };
};
