import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

// Redux
import { useSelector } from 'react-redux';

// Components
import CartItem from '../components/shop/CartItem';

const CartScreen = () => {
  const cartTotalPrice = useSelector((state) => state.cart.totalSum);
  const cartProducts = useSelector((state) => {
    const transformedCartItems = [];
    for (const key in state.cart.products) {
      transformedCartItems.push({
        productID: key,
        productTitle: state.cart.products[key].productTitle,
        productPrice: state.cart.products[key].productPrice,
        quantity: state.cart.products[key].quantity,
        sum: state.cart.products[key].sum,
      });
    }
    return transformedCartItems;
  });

  const renderItem = (itemData) => {
    return (
      <CartItem
        title={itemData.item.productTitle}
        quantity={itemData.item.quantity}
        price={itemData.item.productPrice}
        onDelete={() => console.log('delete item')}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <View style={styles.totalSumView}>
        <Text style={styles.totalSumTitle}>
          Total:{' '}
          <Text style={styles.totalSumDigit}>{cartTotalPrice.toFixed(2)}$</Text>
        </Text>
        <Button
          color="green"
          title="order now"
          disabled={cartProducts.length === 0 ? true : false}
          onPress={() => console.log('Ordered now')}
        />
      </View>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 20,
          marginBottom: 16,
          textTransform: 'uppercase',
        }}
      >
        Cart items ({cartProducts.length})
      </Text>
      <FlatList
        data={cartProducts}
        renderItem={renderItem}
        keyExtractor={(item) => item.productID}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    margin: 15,
  },
  totalSumView: {
    width: '100%',
    marginBottom: 25,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 13,
    backgroundColor: 'gray',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  totalSumTitle: {
    textAlign: 'left',
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  totalSumDigit: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CartScreen;
