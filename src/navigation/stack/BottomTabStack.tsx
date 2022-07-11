import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Home } from '@screens/home';
import {
  HOME_SCREEN,
  SCREEN1,
  SCREEN2,
  SCREEN3,
  SCREEN4,
} from '@navigation/route';

const Tab = createMaterialBottomTabNavigator();

export const BottomTabStack = (
  <Tab.Navigator>
    <Tab.Screen
      name={SCREEN1}
      component={Home}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name={SCREEN2}
      component={Home}
      options={{
        tabBarLabel: 'Notifications',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name={SCREEN3}
      component={Home}
      options={{
        tabBarLabel: 'Updates',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="bell" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name={SCREEN4}
      component={Home}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);
