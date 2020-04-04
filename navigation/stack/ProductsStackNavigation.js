import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import CategoriesScreen from '../../screens/CategoriesScreen';
import CategoryProductsScreen from '../../screens/CategoryProductsScreen';

const Stack = createStackNavigator();

const ProductsStackNavigation = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'AllСategories'}
          component={CategoriesScreen}
          options={{ title: 'Coffee app' }}
        ></Stack.Screen>
        <Stack.Screen
          name={'CategoryProducts'}
          component={CategoryProductsScreen}
          options={({ route }) => ({
            title: route.params.headerTitle,
          })}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default ProductsStackNavigation;
