import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import * as cartActions from '../store/actions/cart';

const ProductDetailsScreen = ({ route }) => {
  const productDatailsData = useSelector((state) => state.goods.avaliableGoods);
  const selectedProduct = productDatailsData.find(
    (item) => item.ID == route.params.productID
  );

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: selectedProduct.image }}
        style={{ width: 75, height: 75, marginBottom: 10 }}
        resizeMode="cover"
      />
      <Text style={{ marginVertical: 1 }}>{selectedProduct.name}</Text>
      <Text style={{ marginVertical: 1 }}>{selectedProduct.description}</Text>
      <Text style={{ marginVertical: 1 }}>
        {selectedProduct.price.toFixed(2)}$
      </Text>
      {/* <Text>{selectedProduct.counterLeft}</Text> */}
      {/* <Text>{selectedProduct.counterBuy}</Text> */}
      {/* <View style={{ width: '65%' }}>
        <Button
          color="green"
          title="You liked it? Add to cart"
          onPress={() => {
            dispatch(cartActions.addProductToCart(selectedProduct));
          }}
        />
        </View> */}
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
