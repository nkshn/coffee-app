import React from 'react';

// Navigation
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import OrdersHistoryScreen from '../screens/OrdersHistoryScreen';

const Stack = createStackNavigator();

const OrdersStackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="OrdersHistory">
      <Stack.Screen
        name="OrdersHistory"
        component={OrdersHistoryScreen}
        options={{ title: 'Orders History' }}
      />
    </Stack.Navigator>
  );
};

export default OrdersStackNavigation;
