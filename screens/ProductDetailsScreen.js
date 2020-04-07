import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProductDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Product Details Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProductDetailsScreen;
