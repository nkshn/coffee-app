import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

// Components
import CategoryTile from '../components/CategoryTile';

const CategoriesScreen = ({ navigation }) => {
  const data = [
    { id: 1, counterProduct: 5, color: '#f44336', name: 'Coffee' },
    { id: 2, counterProduct: 2, color: '#ffc107', name: 'Tea' },
    { id: 3, counterProduct: 7, color: '#ff5722', name: 'Spicy' },
    { id: 4, counterProduct: 5, color: '#2196f3', name: 'Accessories' },
    { id: 5, counterProduct: 19, color: '#4caf50', name: 'All items' }
  ];

  const renderGridItem = itemData => {
    return (
      <CategoryTile
        color={itemData.item.color}
        title={itemData.item.name}
        counterProduct={itemData.item.counterProduct}
        onPress={() =>
          navigation.navigate('CategoryProducts', {
            headerTitle: itemData.item.name,
            categoryId: itemData.item.id
          })
        }
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={renderGridItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

export default CategoriesScreen;
