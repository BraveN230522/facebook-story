import { Colors } from '@theme';
import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  Platform,
} from 'react-native';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import CameraRoll, {
  GetPhotosParams,
} from '@react-native-community/cameraroll';

import { StoryTicket } from './components';
import useLogic from './CreateStory.logic';
import { styles } from './CreateStory.style';
import { hasAndroidPermission } from '@utils/helper';

const tickets = [
  {
    IconTicket: () => (
      <IconFontAwesome size={20} color={Colors.black} name="music" />
    ),
    title: 'Music',
    topColor: Colors.green,
    bottomColor: Colors.blue,
  },
  {
    IconTicket: () => (
      <IconIonicons size={20} color={Colors.black} name="text-outline" />
    ),
    title: 'Text',
    topColor: Colors.purple,
    bottomColor: Colors.purple2,
  },
  {
    IconTicket: () => (
      <IconAntDesign size={20} color={Colors.black} name="scan1" />
    ),
    title: 'Green Screen',
    topColor: Colors.green,
    bottomColor: Colors.green2,
  },
  {
    IconTicket: () => (
      <IconAntDesign size={20} color={Colors.black} name="smileo" />
    ),
    title: 'Selfie',
    topColor: Colors.red,
    bottomColor: Colors.yellow,
  },
  {
    IconTicket: () => (
      <IconIonicons size={20} color={Colors.black} name="infinite-outline" />
    ),
    title: 'Boomerang',
    topColor: Colors.purple3,
    bottomColor: Colors.purple,
  },
];

export const CreateStory = (props: any) => {
  const { handleDispatch } = useLogic(props);
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.tickets}>
        {tickets.map((ticket, index) => {
          return (
            <StoryTicket
              key={ticket.title}
              IconTicket={ticket.IconTicket}
              title={ticket.title}
              topColor={ticket.topColor}
              bottomColor={ticket.bottomColor}
              isFirst={index === 0}
              isLast={index === tickets.length - 1}
            />
          );
        })}
      </ScrollView>
      <ScrollView horizontal style={styles.tickets}>
        {photos.map(photo => {
          console.log(photo.node);

          return (
            <Image
              style={{ width: 300, height: 300, backgroundColor: 'red' }}
              source={{ uri: photo.node.image.uri }}
            />
          );
        })}
      </ScrollView>
      <TouchableOpacity
        onPress={getPhotos}
        style={{ backgroundColor: 'lime', padding: 30 }}>
        <Text>getPhotos</Text>
      </TouchableOpacity>
      {/* <FlatList
        
        data={tickets}
        // ListHeaderComponent={}
        renderItem={({ item, index }) => (
          <StoryTicket
            IconTicket={item.IconTicket}
            title={item.title}
            topColor={item.topColor}
            bottomColor={item.bottomColor}
            isFirst={index === 0}
            isLast={index === tickets.length - 1}
          />
        )}
        keyExtractor={(item, index) => String(index)}
      /> */}
    </View>
  );
};
