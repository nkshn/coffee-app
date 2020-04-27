import React from 'react';
import { View, Text, FlatList, Button, Alert, StyleSheet } from 'react-native';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import * as cartActions from '../store/actions/cart';
import * as orderActions from '../store/actions/orders';

// Components
import CartItem from '../components/shop/CartItem';
import CartNoItems from '../components/shop/CartNoItems';

// UI Elements
import SimpleButton from '../components/UI/SimpleButton';
import IconButton from '../components/UI/IconButton';

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
      {cartProducts.length === 0 ? (
        <CartNoItems />
      ) : (
        <View style={{ flex: 1 }}>
          <View style={styles.totalSumView}>
            <Text style={styles.totalSumTitle}>
              Total:{' '}
              <Text style={styles.totalSumDigit}>
                {Math.abs(cartTotalPrice).toFixed(2)}$
              </Text>
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ marginRight: 10 }}>
                <IconButton
                  iconColor="#000"
                  mainColor="#000"
                  iconSize={20}
                  iconName="md-close" // PLatfoRM SYKA!!!1
                  bodyStyles={{ borderColor: '#000', borderWidth: 0.7 }}
                  disabledVariable={cartProducts.length === 0 ? true : false}
                  onClick={() => dispatch(cartActions.clearCart())}
                />
              </View>
              <SimpleButton
                textColor="#fff"
                mainColor="#667d47"
                title="Order Now"
                disabledVariable={cartProducts.length === 0 ? true : false}
                onClick={() => {
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
          <View style={{ flex: 1 }}>
            <FlatList
              data={cartProducts}
              renderItem={renderItem}
              keyExtractor={(item) => item.productID}
            />
          </View>
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
  totalSumView: {
    width: '100%',
    elevation: 4,
    marginBottom: 25,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 13,
    backgroundColor: '#ababab',
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
