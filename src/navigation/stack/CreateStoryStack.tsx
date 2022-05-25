import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/AntDesign';

import { CREATE_STORY_SCREEN } from '@navigation/route';
import { CreateStory } from '@screens/createStory';
import { Header } from '@components/header';

const Stack = createStackNavigator();

export const CreateStoryStack = (
  <Stack.Group
    screenOptions={{
      presentation: 'modal',
    }}>
    <Stack.Screen
      name={CREATE_STORY_SCREEN}
      component={CreateStory}
      options={{
        header: () => (
          <Header
            LeftComponent={() => <Icon size={20} color="white" name="close" />}
            CenterComponent={() => (
              <Icon size={20} color="white" name="close" />
            )}
            RightComponent={() => <Icon size={20} color="white" name="close" />}
          />
        ),
      }}
    />
  </Stack.Group>
);
