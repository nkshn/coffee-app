export const ADD_ORDER = 'ADD_ORDER';

export const addOrder = (cartProducts, totalSum) => {
  return {
    type: ADD_ORDER,
    orderData: { items: cartProducts },
    orderTotalSum: totalSum,
  };
};
