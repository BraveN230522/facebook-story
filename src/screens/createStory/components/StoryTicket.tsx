import { Colors } from '@theme';
import React, { ReactElement, ReactNode } from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';

interface IProps {
  IconTicket: React.ComponentType;
  title: string;
  topColor: string;
  bottomColor: string;
  isFirst: boolean;
  isLast: boolean;
}

export const StoryTicket = (props: IProps) => {
  const { IconTicket, title, topColor, bottomColor, isFirst, isLast } = props;
  return (
    <LinearGradient
      colors={[topColor, bottomColor]}
      style={[
        styles.container,
        isFirst ? styles.first : {},
        isLast ? styles.last : {},
      ]}>
      <View style={styles.iconWrap}>
        <IconTicket />
      </View>
      <Text style={styles.title}>{title}</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 120,
    height: 160,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
  },
  iconWrap: {
    backgroundColor: Colors.white,
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: '600',
  },
  first: {
    marginLeft: 10,
  },
  last: {
    marginRight: 10,
  },
});
