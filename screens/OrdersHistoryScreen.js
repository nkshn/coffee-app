import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

// Redux
import { useSelector } from 'react-redux';

import OrderItem from '../components/shop/OrderItem';

const OrdersHistoryScreen = () => {
  const ordersData = useSelector((state) => state.orders.orders);

  const renderItem = (itemData) => {
    return (
      <OrderItem
        cartProducts={itemData.item.items}
        totalSum={itemData.item.totalSum.toFixed(2)}
        orderDate={itemData.item.readebleDate}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <View style={{}}>
        <FlatList
          data={ordersData}
          keyExtractor={(item) => item.ID}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    margin: 15,
  },
});

export default OrdersHistoryScreen;
