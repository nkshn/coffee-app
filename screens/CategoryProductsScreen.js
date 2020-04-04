import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

// Components
import ProductItem from '../components/ProductItem';

const CategoryProductsScreen = ({ route }) => {
  const data = [
    {
      id: 1,
      name: 'Kolumbia',
      desc: 'Descript 1',
      price: 25,
      img: 'https://via.placeholder.com/50'
    },
    {
      id: 2,
      name: 'Ethiopia',
      desc: 'Descript 2',
      price: 54,
      img: 'https://via.placeholder.com/50'
    },
    {
      id: 3,
      name: 'Brazil',
      desc: 'Descript 3',
      price: 12,
      img: 'https://via.placeholder.com/50'
    },
    {
      id: 4,
      name: 'Gonduras',
      desc: 'Descript 4',
      price: 9.5,
      img: 'https://via.placeholder.com/50'
    },
    {
      id: 5,
      name: 'Kenia',
      desc: 'Descript 5',
      price: 97,
      img: 'https://via.placeholder.com/50'
    }
  ];

  const renderItem = itemData => {
    return (
      <ProductItem
        title={itemData.item.name}
        desc={itemData.item.desc}
        price={itemData.item.price}
        img={itemData.item.img}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text>{route.params.categoryId}</Text>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
    // backgroundColor: '#fff'
  }
});

export default CategoryProductsScreen;
