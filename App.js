import React from 'react';

// Redux
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import goodsReducer from './store/reducers/goods';
import cartReducer from './store/reducers/cart';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './navigation/TabNavigation';

const rootReducer = combineReducers({
  goods: goodsReducer,
  cart: cartReducer,
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
