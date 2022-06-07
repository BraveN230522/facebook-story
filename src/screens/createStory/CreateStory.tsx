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
  Dimensions,
} from 'react-native';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';

import { StoryTicket } from './components';
import useLogic from './CreateStory.logic';
import { styles } from './CreateStory.style';
import { Device } from '@theme';

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
  const { getPhotos, photos, isCloseToBottom, handleLoadMore } =
    useLogic(props);
  return (
    <View style={styles.container}>
      <ScrollView
        stickyHeaderIndices={[1]}
        onScroll={({ nativeEvent }) => {
          if (isCloseToBottom(nativeEvent)) {
            handleLoadMore();
          }
        }}
        scrollEventThrottle={400}>
        <View style={{ height: 160 }}>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal>
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
        </View>
        <View style={styles.wrap}>
          <View style={styles.photoOptions}>
            <View style={styles.cameraRoll}>
              <Text style={styles.cameraRollText}>Camera Roll</Text>
              <IconEntypo
                size={20}
                color={Colors.gray}
                name="chevron-small-down"
              />
            </View>
            <View style={styles.multiple}>
              <IconIonicons
                size={20}
                color={Colors.gray}
                name="ios-images-outline"
              />
              <Text style={styles.multipleText}>Select multiple</Text>
            </View>
          </View>
        </View>
        <View style={styles.photos}>
          {photos.map((item, index) => {
            return (
              <Image
                key={item.node.image.uri}
                style={{
                  width: Device.width / 3 - 4 / 3,
                  marginRight: (index + 1) % 3 === 0 ? 0 : 2,
                  marginTop: 2,
                  height: 200,
                  backgroundColor: Colors.primary,
                }}
                source={{ uri: item.node.image.uri }}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};
