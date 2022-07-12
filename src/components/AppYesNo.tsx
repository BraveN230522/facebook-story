import React, { useEffect, useState } from 'react';
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

/**
 * - Selected must be number 0 (No) or 1 (Yes)
 * - Selected is also default data
 */
export const AppYesNo = React.memo((props: any) => {
  const { style, selected, onSelect } = props;

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        style={[styles.box, selected === 1 ? styles.active : {}]}
        onPress={() => onSelect(1)}>
        <TickIcon />
        <Text style={styles.text}>Yes</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.box, selected === 0 ? styles.active : {}]}
        onPress={() => onSelect(0)}>
        <CrossIcon />
        <Text style={styles.text}>No</Text>
      </TouchableOpacity>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    // marginTop: Spacing.height18,
    width: '100%',
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#C6C6C6',
    padding: 12,
    borderRadius: 4,
  },
  active: {
    backgroundColor: '#D5D5D5',
  },
  text: {
    fontSize: 15,
    fontWeight: '400',
    color: '#666666',
    marginLeft: 10,
  },
});
