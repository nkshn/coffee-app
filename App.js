import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Screens
import ProductsStackNavigation from '../coffee-app/navigation/stack/ProductsStackNavigation';

export default function App() {
  return <ProductsStackNavigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
