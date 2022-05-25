import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '@screens/home';
import { HOME_SCREEN } from '@navigation/route';

const Stack = createStackNavigator();

export const HomeStack = (
  <Stack.Group>
    <Stack.Screen
      name={HOME_SCREEN}
      component={Home}
      // options={{
      //   header: () => <Header right={<></>} />,
      // }}
    />
  </Stack.Group>
);
