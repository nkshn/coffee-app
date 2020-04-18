import React from 'react';

// Navigation
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import CartScreen from '../screens/CartScreen';

const Stack = createStackNavigator();

const CartStackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Cart">
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{ title: 'Your Cart' }}
      />
    </Stack.Navigator>
  );
};

export default CartStackNavigation;
