import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

// Components
import TouchableComponent from './UX/TouchableComponent';

const CategoryTile = props => {
  return (
    <View style={styles.container}>
      <TouchableComponent activeOpacity={0.7} onPress={props.onPress}>
        <View style={[styles.tileContainer, { backgroundColor: props.color }]}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.counterText}>{props.counterProduct} items</Text>
          </View>
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 13,
    overflow: 'hidden',
    /*overflow:
      Platform.OS === 'android' && Platform.Version >= 21
        ? 'hidden'
        : 'visible',*/
    marginVertical: 15,
    marginHorizontal: 15
  },
  tileContainer: {
    width: 150,
    height: 150,
    borderRadius: 13,
    justifyContent: 'flex-end'
  },
  textContainer: {
    marginTop: 1,
    marginRight: 13,
    marginBottom: 7,
    alignItems: 'flex-end'
    // flexDirection: 'column',
  },
  title: { fontSize: 20, color: 'white', fontWeight: '700' },
  counterText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '500',
    marginTop: -3
  }
});

export default CategoryTile;
