import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Keyboard,
  TouchableOpacity,
  Text,
} from 'react-native';
import { ActiveRadioIcon, CrossIcon, RadioIcon, TickIcon } from '@assets';
import { Colors, FontSize, Spacing } from '@theme';
import { Button, Card, Layout, Modal } from '@ui-kitten/components';

export const AppModal = (props: any) => {
  const {
    style = {},
    visible = false,
    children,
    modalRef,
    onBackdropPress,
  } = props;

  return (
    <Modal
      ref={modalRef}
      style={style}
      visible={visible}
      backdropStyle={styles.backdrop}
      onBackdropPress={onBackdropPress}>
      <View style={styles.children}>{children}</View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  children: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
