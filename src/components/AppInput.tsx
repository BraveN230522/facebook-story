import React, { useRef, useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Keyboard,
  Text,
  TouchableOpacity,
} from 'react-native';

import { FontSize } from '@theme';
import { EyeActiveIcon, EyeInactiveIcon } from '@assets';

export const AppInput = React.memo((props: any) => {
  const {
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
    isPassword,
  } = props;

  const ref = useRef<any>();
  const [secureTextEntry, setSecureTextEntry] = useState(isPassword);

  return (
    <View style={[styles.container, style]}>
      {!!label && (
        <Text style={styles.label}>
          {isRequired && <Text style={styles.isRequired}>*</Text>} {label}
        </Text>
      )}
      <View style={[styles.boxInput, boxStyle]}>
        {PreIcon && (
          <View style={{ marginLeft: 12 }}>
            <PreIcon />
          </View>
        )}
        <TextInput
          ref={ref}
          style={[styles.input, multiline ? styles.multiline : {}, inputStyle]}
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
        {!!PostIcon && (
          <View style={{ marginRight: 12 }}>
            <PostIcon />
          </View>
        )}
        {isPassword && (
          <TouchableOpacity
            onPress={() => setSecureTextEntry(prev => !prev)}
            style={{ marginRight: 12 }}>
            {secureTextEntry ? <EyeInactiveIcon /> : <EyeActiveIcon />}
          </TouchableOpacity>
        )}
      </View>
      {!!error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {},

  boxInput: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    textAlignVertical: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 2,
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
  multiline: {
    height: 120,
    paddingBottom: 7,
    fontSize: 15,
  },
});
