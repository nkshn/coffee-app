import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// UI Elements
import TouchableComponent from './TouchableComponent';

const IconButton = (props) => {
  const {
    iconColor,
    mainColor,
    iconName,
    iconSize,
    disabledVariable,
    bodyStyles,
    onClick,
  } = props;

  return (
    <View style={{ overflow: 'hidden', borderRadius: 5 }}>
      <TouchableComponent
        activeOpacity={0.5}
        onPress={onClick}
        disabled={disabledVariable}
      >
        <View style={{ ...styles.body, ...bodyStyles }}>
          <Ionicons name={iconName} size={iconSize} color={iconColor} />
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: '700',
  },
});

export default IconButton;
