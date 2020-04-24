import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OrdersHistoryScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Orders History!</Text>
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

export default OrdersHistoryScreen;
