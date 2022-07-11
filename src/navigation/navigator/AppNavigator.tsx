import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { BottomTabStack, CreateStoryStack, HomeStack } from '..';

export const AppNavigation = () => {
  const Stack = createStackNavigator();
  // return BottomTabStack;
  return (
    <Stack.Navigator>
      {HomeStack}
      {CreateStoryStack}
    </Stack.Navigator>
  );
};
