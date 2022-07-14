import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Keyboard,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';
import { ActiveRadioIcon, ChevronDownIcon, RadioIcon } from '@assets';
import { Colors, FontSize, Spacing } from '@theme';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  Transition,
  Transitioning,
} from 'react-native-reanimated';
import Collapsible from 'react-native-collapsible';

export const AppAccordion = React.memo((props: any) => {
  const { style } = props;

  const [collapsed, setCollapsed] = useState(true);

  const handleCollapsed = () => {
    setCollapsed(prev => {
      return !prev;
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={handleCollapsed}
        style={[styles.accordion, collapsed ? {} : styles.isExpanded]}>
        <Text style={styles.title}>4. TEST TRANSMISSIONS</Text>
        <ChevronDownIcon />
      </TouchableOpacity>
      <Collapsible collapsed={collapsed}>
        <View style={styles.accordionWrap}>
          <View style={styles.content}>
            <Text style={styles.contentText}>
              1.1. What is Mailagenten.de? Whether you have ordered something,
              waiting for an important letter from the office, your favorite
              magazine or just the greeting postcard from vacation - punctuality
              and reliability for sender and recipient are of great importance.
              The website was set up by the www.mailagente 1.1. What is
              Mailagenten.de? Whether you have ordered something, waiting for an
              important letter from the office, your favorite magazine or just
              the greeting postcard from vacation - punctuality and reliability
              for sender and recipient are of great importance. The website was
              set up by the www.mailagente 1.1. What is Mailagenten.de? Whether
              you have ordered something, waiting for an important letter from
              the office, your favorite magazine or just the greeting postcard
              from vacation - punctuality and reliability for sender and
              recipient are of great importance. The website was set up by the
              www.mailagente 1.1. What is Mailagenten.de? Whether you have
              ordered something, waiting for an important letter from the
              office, your favorite magazine or just the greeting postcard from
              vacation - punctuality and reliability for sender and recipient
              are of great importance. The website was set up by the
              www.mailagente
            </Text>
          </View>
        </View>
      </Collapsible>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#BBBBBB',
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
  },
  accordionWrap: {
    borderRadius: 5,
    width: '100%',
  },
  isExpanded: {
    backgroundColor: '#F9ECEC',
  },
  accordion: {
    width: '98%',
    marginVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 5,
  },
  title: {
    flex: 1,
    fontSize: 14,
    fontWeight: '400',
    color: '#333333',
  },
  content: {
    paddingHorizontal: 16,
  },
  contentText: {
    paddingVertical: 15,
  },
});
