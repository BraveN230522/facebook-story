import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeStack } from '..';

export const AppNavigation = () => {
  const Stack = createStackNavigator();
  return <Stack.Navigator>{HomeStack}</Stack.Navigator>;
};
