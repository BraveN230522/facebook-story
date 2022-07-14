import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';

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
      <View style={[disabled ? styles.disabled : {}, styles.container, style]}>
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
    fontWeight: '700',
    fontSize: 15,
  },
  disabled: {
    opacity: 0.5,
  },
});
