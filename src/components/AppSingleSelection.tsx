import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

import { ActiveRadioIcon, RadioIcon } from '@assets';

/**
 * - Data must be object and include ID and CONTENT
 * - Selected must be ID
 * - Selected is also default data
 */
export const AppSingleSelection = React.memo((props: any) => {
  const {
    style,
    data = [],
    selected,
    onSelect,
    isRequired,
    title,
    error,
    isRadio = true,
  } = props;

  return (
    <View style={[styles.container, style]}>
      {!!title && (
        <Text style={styles.textTitle}>
          {isRequired && <Text style={styles.isRequired}>* </Text>}
          {title}
        </Text>
      )}
      {data.map((item: any, index) => {
        return (
          <TouchableOpacity
            onLayout={event => {
              var { x, y, width, height } = event.nativeEvent.layout;
              console.log(height);
            }}
            key={index}
            onPress={() => onSelect(item.id)}
            style={[
              styles.radioBox,
              selected === item.id && !isRadio && styles.active,
            ]}
            activeOpacity={0.7}>
            {isRadio && (
              <>{selected === item.id ? <ActiveRadioIcon /> : <RadioIcon />}</>
            )}
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
    paddingTop: 15,
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
  isRequired: {
    color: '#FF5757',
  },
  text: {
    fontSize: 15,
    // lineHeight: 20,
    fontWeight: '400',
    color: '#333333',
    marginLeft: 10,
  },
  active: {
    backgroundColor: '#D5D5D5',
  },
  error: {
    marginTop: 7,
    fontSize: 14,
    color: '#DA202A',
    fontWeight: '400',
  },
});
