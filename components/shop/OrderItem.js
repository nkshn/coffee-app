import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Platform,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const OrderItem = (props) => {
  const [showDetailsButton, setShowDetailsButton] = useState(false);

  const renderItem = (itemData) => {
    return (
      <View style={styles.carProductsList}>
        <View style={styles.cartProductTitleView}>
          <Text numberOfLines={1} style={styles.cartProductText}>
            {itemData.item.productTitle}
          </Text>
        </View>
        <View style={styles.cartProductQuantityView}>
          <Text style={styles.cartProductText}>{itemData.item.quantity}</Text>
        </View>
        <View style={styles.cartProductPriceView}>
          <Text style={styles.cartProductText}>
            ${itemData.item.productPrice.toFixed(2)}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>${props.totalSum}</Text>
        <Text style={styles.titleText}>{props.orderDate}</Text>
      </View>
      <View style={styles.separatorView}>
        <View style={styles.separatorLine}></View>
      </View>
      <View style={styles.showDetailsContainer}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => setShowDetailsButton((prevState) => !prevState)}
        >
          <View style={styles.showDetailsView}>
            <Ionicons
              size={26}
              name={
                showDetailsButton === false
                  ? Platform.OS === 'android'
                    ? 'md-arrow-dropdown-circle'
                    : 'ios-arrow-dropdown-circle'
                  : Platform.OS === 'android'
                  ? 'md-arrow-dropup-circle'
                  : 'ios-arrow-dropup-circle'
              }
              color="black"
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.cartProductsContainer}>
        {showDetailsButton && (
          <FlatList
            renderItem={renderItem}
            data={props.cartProducts}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.productID}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 23,
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 13,
    borderWidth: 0.7,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  separatorView: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  separatorLine: {
    height: 0.6,
    width: '100%', // 85
    backgroundColor: 'black',
  },
  showDetailsView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  carProductsList: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  cartProductTitleView: {
    flex: 3,
  },
  cartProductQuantityView: {
    flex: 1,
    alignItems: 'center',
  },
  cartProductPriceView: {
    flex: 1.3,
    alignItems: 'flex-start',
  },
  cartProductText: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default OrderItem;
