import { Colors, FontSize, Spacing } from '@theme';
import React, { useEffect, useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Keyboard,
  TouchableOpacity,
  Text,
} from 'react-native';

export const AppInput = React.memo((props: any) => {
  const {
    secureTextEntry,
    placeholder,
    multiline,
    keyboardType,
    onChangeText,
    style,
    maxLength = null,
    error = '',
    handleBlur,
    boxStyle,
    PreIcon,
    PostIcon,
    returnKeyType,
    value,
    placeholderTextColor,
    label,
    isRequired,
    inputStyle,
  } = props;

  return (
    <View style={[styles.container, style]}>
      {!!label && (
        <Text style={styles.label}>
          {label} {isRequired && <Text style={styles.isRequired}>*</Text>}
        </Text>
      )}
      <View style={[styles.boxInput, boxStyle]}>
        {PreIcon && <PreIcon />}
        <TextInput
          style={[styles.input, inputStyle]}
          returnKeyType={returnKeyType || (multiline ? undefined : 'done')}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          value={value}
          placeholderTextColor={placeholderTextColor}
          multiline={multiline}
          blurOnSubmit={false}
          onChangeText={onChangeText}
          maxLength={maxLength}
          onSubmitEditing={multiline ? undefined : Keyboard.dismiss}
          onBlur={handleBlur}
          allowFontScaling={false}
        />
        {PostIcon && <PostIcon />}
      </View>
      {!!error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    // marginTop: Spacing.height18,
  },

  boxInput: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    textAlignVertical: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 22,
    minHeight: 50, //42
    borderRadius: 5,
  },
  input: {
    fontSize: FontSize.Font16,
    flex: 1,
    color: '#666666',
    fontWeight: '400',
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 15,
    fontWeight: '500',
    color: '#333333',
    marginBottom: 8,
  },
  isRequired: {
    color: '#FF5757',
  },
  error: {
    marginTop: 7,
    fontSize: 14,
    color: '#DA202A',
    fontWeight: '400',
  },
});
