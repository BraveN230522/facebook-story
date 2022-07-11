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

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

const transition = (
  <Transition.Together>
    <Transition.In type="fade" durationMs={200} />
    <Transition.Change />
    <Transition.Out type="fade" durationMs={200} />
  </Transition.Together>
);

export const AppAccordion = React.memo((props: any) => {
  const { style } = props;

  const [toggle, setToggle] = useState(true);
  const [height, setHeight] = useState(135);

  const sharedValue = useSharedValue({
    opacity: 0,
    backgroundColor: '#F7F7F7',
    translateY: -185,
  });

  const animatedHeaderStyles = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(sharedValue.value.backgroundColor, {
        duration: 300,
        easing: Easing.linear,
      }),
    };
  }, [toggle]);

  const animatedViewContentStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scaleY: withTiming(sharedValue.value.opacity, {
            duration: 300,
            easing: Easing.linear,
          }),
        },
        // {
        //   translateY: withTiming(sharedValue.value.translateY, {
        //     duration: 300,
        //     easing: Easing.linear,
        //   }),
        // },
      ],
      opacity: withTiming(sharedValue.value.opacity, {
        duration: 300,
        easing: Easing.linear,
      }),
    };
  }, [toggle]);

  const handleToggle = () => {
    viewRef.current.animateNextTransition();
    setToggle(prev => {
      sharedValue.value.opacity = toggle ? 1 : 0;
      sharedValue.value.translateY = toggle ? 0 : -185;
      sharedValue.value.backgroundColor = toggle ? '#F9ECEC' : '#F7F7F7';
      return !prev;
    });
  };

  const viewRef = useRef<any>();

  return (
    <Transitioning.View
      transition={transition}
      ref={viewRef}
      style={styles.accordionWrap}>
      <AnimatedTouchableOpacity
        activeOpacity={0.7}
        onPress={handleToggle}
        style={[styles.accordion, animatedHeaderStyles]}>
        <Text style={styles.title}>4. TEST TRANSMISSIONS</Text>
        <ChevronDownIcon />
      </AnimatedTouchableOpacity>
      {toggle && (
        <View
          style={[styles.content]}
          // onLayout={e => {
          //   const { height } = e.nativeEvent.layout;
          //   height && setHeight(height);
          // }}
        >
          <Text style={[styles.contentText]}>
            1.1. What is Mailagenten.de? Whether you have ordered something,
            waiting for an important letter from the office, your favorite
            magazine or just the greeting postcard from vacation - punctuality
            and reliability for sender and recipient are of great importance.
            The website was set up by the www.mailagente
          </Text>
        </View>
      )}
    </Transitioning.View>
  );
});

const styles = StyleSheet.create({
  accordionWrap: {
    padding: 3,
    backgroundColor: '#F7F7F7',
    // backgroundColor: '#ccc',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#BBBBBB',
    width: '100%',
  },
  isExpanded: {
    backgroundColor: '#F9ECEC',
  },
  accordion: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 5,
    // backgroundColor: '#F9ECEC',
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
    paddingTop: 18,
  },
});
