import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import BusinessScreen from '../screens/BusinessScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


//const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function BusinessStack() {
  return (
    <Tab.Navigator headerMode='none'>
      <Tab.Screen name='Business' component={BusinessScreen} options={{ tabBarLabel: 'Business!' }} />
    </Tab.Navigator>
  );
}