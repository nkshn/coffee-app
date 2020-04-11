import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

// Data
import { GOODS } from '../data/dummy-data';

const CategoryProductsScreen = ({ route, navigation }) => {
  const renderItem = (itemData) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() =>
          navigation.navigate('ProductDetails', {
            itemID: itemData.item.ID,
            itemName: itemData.item.name
          })
        }
      >
        <View style={styles.itemView}>
          <Text style={styles.itemText}>{itemData.item.name}</Text>
          <Text style={styles.itemText}>{itemData.item.description}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={GOODS.filter((item) => {
          if (item.categoryID == route.params.categoryID) {
            return true;
          }
        })}
        renderItem={renderItem}
        keyExtractor={(item) => item.ID}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
  },
  itemView: {
    width: '100%',
    height: 100,
    backgroundColor: '#777',
    marginBottom: 30,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default CategoryProductsScreen;
