import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function HomeStack() {
  return (
    <Tab.Navigator headerMode='none'>
      <Tab.Screen name='Home' component={HomeScreen} options={{ tabBarLabel: 'Home!' }} />
    </Tab.Navigator>

  );
}
