import React from 'react';
import { Platform } from 'react-native';

// Navigation
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import HomeScreen from '../screens/HomeScreen';
import CategoryProductsScreen from '../screens/CategoryProductsScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';

const Stack = createStackNavigator();

const HomeStackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
      <Stack.Screen
        name="CategoryProducts"
        component={CategoryProductsScreen}
        options={({ route }) => ({ title: route.params.screenName })}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={({ route }) => ({
          title: route.params.productName,
          headerTitleStyle: {
            width: 240,
            // width: Platform.OS === 'android' ? 140 : null, // 240
          },
        })}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigation;
