import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Button,
} from 'react-native';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import * as cartActions from '../store/actions/cart';

const CategoryProductsScreen = ({ route, navigation }) => {
  // An array of Product data for the current user-selected Category
  const categoryProductsData = useSelector((state) =>
    state.goods.avaliableGoods.filter((item) => {
      if (item.categoryID == route.params.categoryID) {
        return true;
      }
    })
  );
  /*
   * Converting Cart Products Object to an Array only with Keys (id's). Example: ['g1', 'g3', 'g22']
   * And then checking for already existing products in the cart
   */
  const cartProducts = Object.keys(useSelector((state) => state.cart.products));

  const dispatch = useDispatch();

  const renderItem = (itemData) => {
    let isProductsInTheCart = false;
    if (cartProducts.includes(itemData.item.ID) == true) {
      isProductsInTheCart = true;
    } else {
      isProductsInTheCart = false;
    }

    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() =>
          navigation.navigate('ProductDetails', {
            productID: itemData.item.ID,
            productName: itemData.item.name,
          })
        }
      >
        <View style={styles.itemContainer}>
          <View style={styles.itemTextView}>
            <Text style={styles.itemTextTitle} numberOfLines={1}>
              {itemData.item.name}
            </Text>
            <Text style={styles.itemTextPrice}>
              ${itemData.item.price.toFixed(2)}
            </Text>
          </View>
          <View style={styles.itemButtonsView}>
            <View style={{ width: '65%' }}>
              <Button
                color="green"
                title={isProductsInTheCart == true ? 'Added' : 'To Cart'}
                disabled={isProductsInTheCart}
                onPress={() =>
                  dispatch(cartActions.addProductToCart(itemData.item))
                }
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={categoryProductsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.ID}
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
  itemContainer: {
    width: '100%',
    borderRadius: 15,
    marginBottom: 20,
    flexDirection: 'row',
    overflow: 'hidden',
    borderWidth: 0.7,
  },
  itemTextView: {
    width: '60%',
    flexDirection: 'column',
    marginVertical: 15,
    paddingLeft: 13,
    justifyContent: 'center',
  },
  itemTextTitle: {
    fontSize: 18,
    fontWeight: '700',
  },
  itemTextPrice: {
    fontSize: 17,
    fontWeight: '500',
  },
  itemButtonsView: {
    width: '40%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 13,
  },
  itemButtonsTextView: {
    marginHorizontal: 8,
  },
  itemButtonsText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default CategoryProductsScreen;
