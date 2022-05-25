import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import useLogic from './CreateStory.logic';
import { styles } from './CreateStory.style';

export const CreateStory = (props: any) => {
  const { handleDispatch } = useLogic(props);

  return <View style={styles.container}></View>;
};
