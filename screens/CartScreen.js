import React from 'react';
import { View, Text, FlatList, Button, Alert, StyleSheet } from 'react-native';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import * as cartActions from '../store/actions/cart';
import * as orderActions from '../store/actions/orders';

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
    return transformedCartItems.sort((a, b) => a.productID > b.productID);
  });

  const renderItem = (itemData) => {
    return (
      <CartItem
        title={itemData.item.productTitle}
        quantity={itemData.item.quantity}
        price={itemData.item.productPrice}
        onDelete={() =>
          dispatch(cartActions.deleteProductFromCart(itemData.item.productID))
        }
        onReduce={() =>
          dispatch(cartActions.reduceProductInCart(itemData.item.productID))
        }
        onAdd={() =>
          dispatch(cartActions.increaseProductInCart(itemData.item.productID))
        }
      />
    );
  };

  const dispatch = useDispatch();

  return (
    <View style={styles.screen}>
      <View style={styles.totalSumView}>
        <Text style={styles.totalSumTitle}>
          Total:{' '}
          <Text style={styles.totalSumDigit}>
            {Math.abs(cartTotalPrice).toFixed(2)}$
          </Text>
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ marginRight: 7 }}>
            <Button
              title="x"
              color="black"
              disabled={cartProducts.length === 0 ? true : false}
              onPress={() => {
                dispatch(cartActions.clearCart());
              }}
            />
          </View>
          <Button
            color="green"
            title="order now"
            disabled={cartProducts.length === 0 ? true : false}
            onPress={() => {
              Alert.alert('Congratulations!', 'Your order is saved!', [
                { text: 'Okey', style: 'default' },
              ]);
              dispatch(orderActions.addOrder(cartProducts, cartTotalPrice));
            }}
          />
        </View>
      </View>
      <Text style={styles.cartTextHeader}>
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
  cartTextHeader: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 16,
    textTransform: 'uppercase',
  },
});

export default CartScreen;
