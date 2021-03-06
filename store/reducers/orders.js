import { ADD_ORDER } from '../actions/orders';

import Order from '../../models/order';

const initialState = {
  orders: [],
};

export default (state = initialState, actions) => {
  switch (actions.type) {
    case ADD_ORDER:
      const newOrder = new Order(
        new Date().toString(),
        actions.orderData.items,
        actions.orderTotalSum,
        new Date()
      );

      return {
        ...state,
        orders: state.orders.concat(newOrder),
      };
  }

  return state;
};
