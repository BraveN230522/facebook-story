import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/AntDesign';

import { CREATE_STORY_SCREEN } from '@navigation/route';
import { CreateStory } from '@screens/createStory';
import { Header } from '@components/header';
import { Text } from 'react-native';
import { Colors } from '@theme';

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
            LeftComponent={() => <Icon size={24} color="white" name="close" />}
            CenterComponent={() => (
              <Text
                style={{
                  color: Colors.white,
                  fontSize: 15,
                  fontWeight: '700',
                }}>
                Create Story
              </Text>
            )}
            RightComponent={() => (
              <Icon size={24} color="white" name="setting" />
            )}
          />
        ),
      }}
    />
  </Stack.Group>
);
