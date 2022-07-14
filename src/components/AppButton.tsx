import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const AppButton = React.memo(
  ({
    text,
    color = 'onClick',
    style,
    onPress,
    disabled,
    ...TouchableOpacityProps
  }: any) => {
    return (
      <View style={[styles.container, disabled ? styles.disabled : {}, style]}>
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={0.5}
          disabled={disabled}
          {...TouchableOpacityProps}>
          <View style={styles.textWrap}>
            <Text style={styles.text}>{text}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#DA202A',
    borderRadius: 1000,
  },
  textWrap: {
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  text: {
    color: '#F5F5F5',
    fontWeight: '400',
    fontSize: 16,
  },
  disabled: {
    backgroundColor: '#C1C6C8',
  },
});
