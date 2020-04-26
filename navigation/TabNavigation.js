import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Stacks Navigation
import HomeStackNavigation from './HomeStackNavigation';
import CartStackNavigation from './CartStackNavigation';
import OrdersStackNavigation from './OrdersStackNavigation';
import UserStackNavigation from './UserStackNavigation';

// Redux
import { useSelector } from 'react-redux';

// Components
import TabBarBadge from '../components/UI/TabBarBadge';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const cartProductsCounter = useSelector((state) => {
    let counter = 0;
    for (let key in state.cart.products) {
      counter++;
    }
    return counter;
  });
  const ordersCounter = useSelector((state) => state.orders.orders);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'md-home';
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === 'Cart') {
            iconName = 'md-cart';
            return (
              <View>
                <TabBarBadge badgeCount={cartProductsCounter} />
                <Ionicons name={iconName} size={size} color={color} />
              </View>
            );
          } else if (route.name === 'Orders') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
            return (
              <View>
                <TabBarBadge badgeCount={ordersCounter.length} />
                <Ionicons name={iconName} size={size} color={color} />
              </View>
            );
          } else if (route.name === 'Profile') {
            iconName = 'md-people';
            return <Ionicons name={iconName} size={size} color={color} />;
          }

          // You can return any component that you like here!
          // return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={HomeStackNavigation} />
      <Tab.Screen name="Cart" component={CartStackNavigation} />
      <Tab.Screen name="Orders" component={OrdersStackNavigation} />
      <Tab.Screen name="Profile" component={UserStackNavigation} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
