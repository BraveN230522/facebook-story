import React, { useEffect, useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Keyboard,
  TouchableOpacity,
  Text,
} from 'react-native';
import { ActiveRadioIcon, RadioIcon } from '@assets';
import { Colors, FontSize, Spacing } from '@theme';

/**
 * - Data must be object and include ID and CONTENT
 * - Selected must be ID
 * - Selected is also default data
 */
export const AppSingleSelection = React.memo((props: any) => {
  const { style, data = [], selected, onSelect } = props;

  return (
    <View style={[styles.container, style]}>
      {data.map((item: any) => {
        return (
          <TouchableOpacity
            onPress={() => onSelect(item.id)}
            style={styles.radioBox}
            activeOpacity={0.7}>
            {selected === item.id ? <ActiveRadioIcon /> : <RadioIcon />}
            <Text style={styles.text}>{item.content}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    // marginTop: Spacing.height18,
    width: '100%',
  },
  radioBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D5D5D5',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 4,
    marginTop: 15,
  },
  text: {
    fontSize: 15,
    fontWeight: '400',
    color: '#333333',
    marginLeft: 10,
  },
});
