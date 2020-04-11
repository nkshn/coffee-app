import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

// Data
import { CATEGORIES } from '../data/dummy-data';

const HomeScreen = ({ navigation }) => {
  const renderItem = (itemData) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() =>
          navigation.navigate('CategoryProducts', {
            categoryID: itemData.item.ID,
            screenName: itemData.item.name,
          })
        }
      >
        <View style={styles.itemView}>
          <Text style={styles.itemTitle}>{itemData.item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
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
    backgroundColor: 'red',
    marginBottom: 30,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: 'white',
  },
});

export default HomeScreen;
