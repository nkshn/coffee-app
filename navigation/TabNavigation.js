import React from 'react';
import { Ionicons } from '@expo/vector-icons';

// Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Stacks Navigation
import HomeStackNavigation from './HomeStackNavigation';
import CartStackNavigation from './CartStackNavigation';
import OrdersStackNavigation from './OrdersStackNavigation';

// Screens
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'md-home';
          } else if (route.name === 'Cart') {
            iconName = 'md-cart';
          } else if (route.name === 'Orders') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          } else if (route.name === 'Profile') {
            iconName = 'md-people';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
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
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
