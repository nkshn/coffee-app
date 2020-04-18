import React from 'react';
import {
  View,
  Text,
  Platform,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CartItem = (props) => {
  return (
    <View style={styles.itemView}>
      <View style={styles.itemTitleView}>
        <Text style={styles.itemText} numberOfLines={1}>
          {props.title}
        </Text>
      </View>
      <View style={styles.itemQuantityView}>
        <Text style={styles.itemText}>{props.quantity}</Text>
      </View>
      <View style={styles.itemPriceView}>
        <Text style={styles.itemText}>{props.price.toFixed(2)}</Text>
      </View>
      <View style={styles.itemsDeleteButtonView}>
        <TouchableOpacity onPress={props.onDelete}>
          <Ionicons
            size={26}
            color="red"
            name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    paddingHorizontal: 7,
  },
  itemTitleView: {
    flex: 4,
  },
  itemQuantityView: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 5,
  },
  itemPriceView: {
    flex: 2,
    paddingLeft: 20,
    alignItems: 'flex-start',
  },
  itemsDeleteButtonView: {
    backgroundColor: 'black',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    color: '#777',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CartItem;
