import React, { useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

import {
  ActiveCheckIcon,
  ActiveRadioIcon,
  CheckIcon,
  RadioIcon,
} from '@assets';

/**
 * - Data must be object and include ID and CONTENT
 * - Selected must be ID ARRAY
 * - Selected is also default data
 */
export const AppMultipleSelection = React.memo((props: any) => {
  const {
    style,
    data = [],
    selected = [],
    onSelect,
    isRequired,
    title,
    error,
  } = props;

  const dataRef = useRef<any>(selected);

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.textTitle}>
        {isRequired && <Text style={styles.isRequired}>* </Text>}
        {title}
      </Text>
      {data.map((item: any, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => {
              if (dataRef.current.includes(item.id)) {
                const filteredData = dataRef.current.filter((id: any) => {
                  return id !== item.id;
                });
                dataRef.current = filteredData;
              } else dataRef.current = [...dataRef.current, item.id];

              onSelect(dataRef.current);
            }}
            style={styles.radioBox}
            activeOpacity={0.7}>
            {selected.includes(item.id) ? <ActiveCheckIcon /> : <CheckIcon />}
            <Text style={styles.text}>{item.content}</Text>
          </TouchableOpacity>
        );
      })}
      {!!error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  textTitle: {
    fontWeight: '700',
    fontSize: 15,
    marginBottom: 10,
  },
  radioBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D5D5D5',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 4,
    marginBottom: 15,
  },
  text: {
    fontSize: 15,
    fontWeight: '400',
    color: '#333333',
    marginLeft: 10,
  },
  error: {
    fontSize: 14,
    color: '#DA202A',
    fontWeight: '400',
  },
  isRequired: {
    color: '#FF5757',
  },
});
