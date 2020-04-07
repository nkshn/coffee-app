import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CategoryProductsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Category All Products Screen</Text>
      <Button
        title="View Details"
        color="green"
        onPress={() => navigation.navigate('ProductDetails')}
      />
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

export default CategoryProductsScreen;
