import { goBack } from '@utils/helper';
import React, { ReactElement } from 'react';
import { Text, View, TouchableOpacity, Image, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import useLogic from './Button.logic';
import { styles } from './Button.style';

interface IProps {
  children: React.ReactNode;
  onPress: () => void;
  style: ViewStyle | ViewStyle[];
}

export const Button = (props: IProps) => {
  const { children, onPress, style } = props;
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={style}>
      {children}
    </TouchableOpacity>
  );
};
