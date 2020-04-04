import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// Components
import TouchableComponent from './UX/TouchableComponent';

const ProductItem = props => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          // source={{ uri: 'https://via.placeholder.com/75' }}
          source={{ uri: props.img }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textTitle}>{props.title}</Text>
        <Text style={styles.textDesc}>{props.desc}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Text style={styles.priceText}>{props.price}</Text>
        <View style={styles.buttonsView}>
          <Text style={styles.buttonsText}>-</Text>
        </View>
        <Text style={styles.counterText}>0</Text>
        <View style={styles.buttonsView}>
          <Text style={styles.buttonsText}>+</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 15,
    marginHorizontal: 10,
    height: 75,
    flexDirection: 'row',
    borderRadius: 20,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 3
  },
  image: {
    width: 75,
    height: 75
  },
  textContainer: {
    justifyContent: 'center',
    height: '100%',
    marginLeft: 10
  },
  textTitle: {
    color: '#777',
    fontSize: 20,
    fontWeight: 'bold'
  },
  textDesc: {
    color: '#777',
    fontSize: 15,
    fontWeight: 'normal',
    marginTop: -2
  },
  buttonsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  priceText: {
    marginHorizontal: 5,
    fontWeight: 'bold',
    color: '#777',
    fontSize: 20
  },
  buttonsView: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  buttonsText: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 40
  },
  counterText: {
    marginHorizontal: 10,
    fontWeight: 'bold',
    color: '#777',
    fontSize: 20
  }
});

export default ProductItem;
