import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Redux
import { useSelector } from 'react-redux';

const CategoryProductsScreen = ({ route, navigation }) => {
  // An array of Product data for the current user-selected Category
  const categoryProductsData = useSelector(state => state.goods.avaliableGoods.filter(item => {
    if (item.categoryID == route.params.categoryID) {
      return true;
    }
  }))

  const renderItem = (itemData) => {
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
          <View style={styles.itemImageView}>
            <Image
              resizeMode="cover"
              source={{ uri: itemData.item.image }}
              style={styles.itemImage}
            />
          </View>
          <View style={styles.itemTextView}>
            <Text style={styles.itemTextTitle} numberOfLines={1}>
              {itemData.item.name}
            </Text>
            <Text style={styles.itemTextPrice}>${itemData.item.price}</Text>
          </View>
          <View style={styles.itemButtonsView}>
            <View style={[styles.itemQuantityButton, { borderBottomWidth: 1 }]}>
              <Ionicons
                name={Platform.OS === 'android' ? 'md-remove' : 'ios-remove'}
                size={20}
                color="black"
              />
            </View>
            <View style={styles.itemQuantityTitleView}>
              <Text style={styles.itemQuantityTitleText}>0</Text>
            </View>
            <View style={[styles.itemQuantityButton, { borderTopWidth: 1 }]}>
              <Ionicons
                name={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                size={20}
                color="black"
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
    height: 110,
    borderRadius: 15,
    marginBottom: 20,
    flexDirection: 'row',
    overflow: 'hidden',
    borderWidth: 1,
  },
  itemImageView: {
    width: 90, // 100
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemImage: {
    width: 75,
    height: 75,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  itemTextView: {
    width: 175,
    flexDirection: 'column',
    marginVertical: 18,
    paddingLeft: 3,
    paddingRight: 9,
  },
  itemTextTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 5,
  },
  itemTextPrice: {
    fontSize: 17,
    fontWeight: '500',
  },
  itemButtonsView: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    borderLeftWidth: 1,
  },
  itemQuantityTitleView: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemQuantityTitleText: {
    fontSize: 17,
    fontWeight: '700',
  },
  itemQuantityButton: {
    flex: 2,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryProductsScreen;
