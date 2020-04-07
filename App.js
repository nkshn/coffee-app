import React from 'react';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './navigation/TabNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
}
