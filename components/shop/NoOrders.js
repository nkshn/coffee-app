import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// Navigation
import { useNavigation } from '@react-navigation/native';

const NoOrders = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.textTitle}>No orders yet</Text>
        <Text style={styles.textDescription}>
          Looks like you haven't added orders yet
        </Text>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Home')}
        >
          <View style={styles.buttonView}>
            <Text style={styles.buttonText}>Find products</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 0.7,
    textTransform: 'uppercase',
    marginBottom: 15,
  },
  textDescription: {
    textAlign: 'center',
    fontSize: 16,
    color: '#777',
  },
  buttonView: {
    marginTop: 15,
    width: 150,
    height: 40,
    borderColor: 'black',
    borderWidth: 0.7,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 14,
    letterSpacing: 0.7,
    textTransform: 'uppercase',
  },
});

export default NoOrders;
