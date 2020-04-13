import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';

// Redux
import { useSelector } from 'react-redux';

const ProductDetailsScreen = ({ route }) => {
  const goodsData = useSelector(state => state.goods.avaliableGoods)

  const renderItem = (itemData) => {
    return (
      <View style={styles.itemView}>
        <Text>{itemData.item.name}</Text>
        <Text>{itemData.item.description}</Text>
        <Text>{itemData.item.price}$</Text>
        <Text>{itemData.item.counterLeft}</Text>
        <Text>{itemData.item.counterBuy}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={goodsData.filter((item) => {
          if (item.ID == route.params.itemID) {
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
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProductDetailsScreen;
