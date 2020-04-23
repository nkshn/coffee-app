import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Button,
} from 'react-native';

// Redux
import { useSelector } from 'react-redux';

const CategoryProductsScreen = ({ route, navigation }) => {
  // An array of Product data for the current user-selected Category
  const categoryProductsData = useSelector((state) =>
    state.goods.avaliableGoods.filter((item) => {
      if (item.categoryID == route.params.categoryID) {
        return true;
      }
    })
  );

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
          <View style={styles.itemTextView}>
            <Text style={styles.itemTextTitle} numberOfLines={1}>
              {itemData.item.name}
            </Text>
            <Text style={styles.itemTextPrice}>
              ${itemData.item.price.toFixed(2)}
            </Text>
          </View>
          <View style={styles.itemButtonsView}>
            <View style={{ width: '35%' }}>
              <Button
                title="-"
                color="red"
                onPress={() => {
                  console.log('-1');
                }}
              />
            </View>
            <View style={styles.itemButtonsTextView}>
              <Text style={styles.itemButtonsText}>0</Text>
            </View>
            <View style={{ width: '35%' }}>
              <Button
                title="+"
                color="green"
                onPress={() => {
                  console.log('+1');
                }}
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
    width: '65%',
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
    width: '35%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 7,
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
