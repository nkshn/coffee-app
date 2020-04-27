import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TabBarBadge = (props) => {
  const { badgeCount } = props;

  let formatedBadgeComponent;

  if (badgeCount == 0) {
    formatedBadgeComponent = <View style={{ position: 'absolute' }}></View>;
  } else if (badgeCount > 9) {
    formatedBadgeComponent = (
      <View style={styles.badgeView}>
        <Text style={styles.badgeText}>9+</Text>
      </View>
    );
  } else if (badgeCount >= 1) {
    formatedBadgeComponent = (
      <View style={styles.badgeView}>
        <Text style={styles.badgeText}>{badgeCount}</Text>
      </View>
    );
  }
  return <View>{formatedBadgeComponent}</View>;
};

const styles = StyleSheet.create({
  badgeView: {
    position: 'absolute',
    right: -8,
    top: -2,
    zIndex: 10,
    // backgroundColor: 'white',
    backgroundColor: '#f44336',
    borderWidth: 0.7,
    borderRadius: 8,
    borderColor: '#f44336',
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    fontSize: 10,
    // color: 'black',
    color: 'white',
    fontWeight: 'bold',
  },
});

export default TabBarBadge;
