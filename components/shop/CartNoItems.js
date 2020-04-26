import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

// Navigation
import { useNavigation } from '@react-navigation/native';

const CartNoItems = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.noCartItemsContainer}>
      <Image
        source={{
          uri: 'https://tyjara.com/assets/site/img/empty-cart.png',
        }}
        style={styles.noCartItemsImage}
        resizeMode="cover"
      />
      <View style={styles.noCartItemsTextView}>
        <Text style={styles.noCartItemsText}>
          Looks like you haven't added anything to your cart yet
        </Text>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Home')}
        >
          <View style={styles.noCartItemsNavigateButtonView}>
            <Text style={styles.noCartItemsNavigateButtonText}>
              Find products
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  noCartItemsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noCartItemsImage: {
    width: 250,
    height: 350,
  },
  noCartItemsTextView: {
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    top: -85,
  },
  noCartItemsText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#777',
  },
  noCartItemsNavigateButtonView: {
    marginTop: 20,
    width: 150,
    height: 40,
    borderColor: 'black',
    borderWidth: 0.7,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noCartItemsNavigateButtonText: {
    fontWeight: 'bold',
    fontSize: 14,
    letterSpacing: 0.7,
    textTransform: 'uppercase',
  },
});

export default CartNoItems;
