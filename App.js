import React from 'react';

// Redux
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import goodsReducer from './store/reducers/goods';
import cartReducer from './store/reducers/cart';
import ordersReducer from './store/reducers/orders';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import TabNavigation from './navigation/TabNavigation';

enableScreens();

const rootReducer = combineReducers({
  goods: goodsReducer,
  cart: cartReducer,
  orders: ordersReducer,
});
const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </Provider>
  );
}
