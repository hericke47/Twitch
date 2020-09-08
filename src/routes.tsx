import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Following from './pages/Following';
import CommingSoon from './pages/CommingSoon';

const { Navigator, Screen } = createBottomTabNavigator();

const Routes: React.FC = () => (
  <NavigationContainer>
    <Navigator>
      <Screen name="Following" component={Following} />
      <Screen name="Discover" component={CommingSoon} />
      <Screen name="Browse" component={CommingSoon} />
      <Screen name="Esports" component={CommingSoon} />
    </Navigator>
  </NavigationContainer>
);

export default Routes;
