import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CreateStoryStack, HomeStack } from '..';

export const AppNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      {HomeStack}
      {CreateStoryStack}
    </Stack.Navigator>
  );
};
