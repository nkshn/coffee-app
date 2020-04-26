import React from 'react';
import {
  View,
  Text,
  Button,
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
      <View style={styles.itemPriceView}>
        <Text style={styles.itemText}>${props.price.toFixed(2)}</Text>
      </View>
      <View style={styles.itemQuantityView}>
        <View style={{ width: '30%' }}>
          <Button title="-" color="red" onPress={props.onReduce} />
        </View>
        <Text style={styles.itemText}>{props.quantity}</Text>
        <View style={{ width: '30%' }}>
          <Button title="+" color="green" onPress={props.onAdd} />
        </View>
      </View>
      <View style={styles.itemsDeleteButtonView}>
        <TouchableOpacity activeOpacity={0.7} onPress={props.onDelete}>
          <Ionicons
            size={24}
            color="red"
            name={
              Platform.OS === 'android' ? 'md-close-circle' : 'ios-close-circle'
            }
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
    marginBottom: 17,
  },
  itemTitleView: {
    flex: 3,
    marginRight: 5,
  },
  itemPriceView: {
    flex: 2,
    paddingLeft: 5,
    alignItems: 'flex-start',
  },
  itemQuantityView: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemsDeleteButtonView: {
    width: 40,
    height: 40,
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
