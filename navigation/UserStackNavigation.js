import React from 'react';

// Navigation
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();

const UserStackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: 'Your Profile' }}
      />
    </Stack.Navigator>
  );
};

export default UserStackNavigation;
