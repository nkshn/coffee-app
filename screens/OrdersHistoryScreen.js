import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

// Redux
import { useSelector } from 'react-redux';

// Components
import OrderItem from '../components/shop/OrderItem';
import NoOrders from '../components/shop/NoOrders';

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
      {ordersData.length === 0 ? (
        <NoOrders />
      ) : (
        <View>
          <FlatList
            data={ordersData}
            renderItem={renderItem}
            keyExtractor={(item) => item.ID}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
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
