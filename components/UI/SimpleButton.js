import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// UI Elements
import TouchableComponent from './TouchableComponent';

const SimpleButton = (props) => {
  const { textColor, mainColor, title, disabledVariable, onClick } = props;

  return (
    <View style={{ overflow: 'hidden', borderRadius: 5 }}>
      <TouchableComponent
        activeOpacity={0.5}
        onPress={onClick}
        disabled={disabledVariable}
      >
        <View
          style={[
            styles.body,
            disabledVariable == false
              ? { backgroundColor: mainColor }
              : { backgroundColor: '#d8d8d8' },
          ]}
        >
          <Text
            style={[
              styles.title,
              disabledVariable == false
                ? { color: textColor }
                : { color: '#9e9e9e' },
            ]}
          >
            {title}
          </Text>
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

export default SimpleButton;
