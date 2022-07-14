import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  Modal as RNModal,
  TouchableOpacity,
} from 'react-native';

import { Modal } from '@ui-kitten/components';

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
    maxHeight: 336,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
