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

// UI Elements
import IconButton from '../UI/IconButton';

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
        <IconButton
          iconColor="#fff"
          mainColor="#000"
          iconSize={14}
          iconName={Platform.OS === 'android' ? 'md-remove' : 'ios-remove'}
          bodyStyles={{
            height: 30,
            borderRadius: 4,
            backgroundColor: '#f44336',
          }}
          disabledVariable={false}
          onClick={props.onReduce}
        />
        <Text style={[styles.itemText, { marginHorizontal: 2 }]}>
          {props.quantity}
        </Text>
        <IconButton
          iconColor="#fff"
          mainColor="#000"
          iconSize={14}
          iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
          bodyStyles={{
            height: 30,
            borderRadius: 4,
            backgroundColor: '#667d47',
          }}
          disabledVariable={false}
          onClick={props.onAdd}
        />
      </View>
      <View style={styles.itemsDeleteButtonView}>
        <TouchableOpacity activeOpacity={0.7} onPress={props.onDelete}>
          <Ionicons
            size={24}
            color="#f44336"
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
