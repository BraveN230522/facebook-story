import { CalendarIcon, ClockIcon } from '@assets';
import moment from 'moment';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import IIcons from 'react-native-vector-icons/Ionicons';

const slideDown = {
  from: {
    top: -8,
    opacity: 0,
  },
  to: {
    top: 0,
    opacity: 1,
  },
};

interface IProps {
  value?: string;
  error?: string | string[];
  style?: ViewStyle | ViewStyle[];
  title?: string;
  onPickDate: (date: Date) => void;
  maxDate?: any;
  minDate?: any;
  isRequired?: any;
  mode?: any;
}

export const AppDateTimePicker = (props: IProps) => {
  const {
    value,
    error,
    style,
    title,
    onPickDate,
    maxDate,
    minDate,
    isRequired,
    mode = 'date',
  } = props;
  const [visible, setVisible] = useState(false);

  const handleCancel = () => {
    setVisible(false);
  };

  const handleOpenDatePick = () => {
    setVisible(true);
  };

  const handleConfirm = (date: Date) => {
    onPickDate(date);
    setVisible(false);
  };

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.textTitle}>
        {isRequired && <Text style={styles.isRequired}>* </Text>}
        {title}
      </Text>
      <TouchableOpacity
        onPress={handleOpenDatePick}
        activeOpacity={0.7}
        style={styles.viewSelect}>
        {mode === 'date' ? <CalendarIcon /> : <ClockIcon />}
        <Text style={[styles.textSelect, value ? styles.textAfterSelect : {}]}>
          {value ? value : `Select ${mode}`}
        </Text>
      </TouchableOpacity>
      {!!error && <Text style={styles.error}>{error}</Text>}
      {visible && (
        <DateTimePickerModal
          maximumDate={maxDate}
          minimumDate={minDate}
          date={moment(value || moment()).toDate()}
          display="spinner"
          isVisible={true}
          mode={mode}
          // minimumDate={minTimeBooking}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  textTitle: {
    fontWeight: '700',
    fontSize: 15,
    marginBottom: 10,
  },
  viewSelect: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#C6C6C6',
    marginHorizontal: 0,
    backgroundColor: '#D5D5D5',
    padding: 12,
    borderRadius: 4,
  },
  isRequired: {
    color: '#FF5757',
  },
  textAfterSelect: {
    color: 'red',
  },
  textSelect: {
    fontWeight: '400',
    fontSize: 15,
    color: '#666666',
    marginLeft: 12,
    textTransform: 'capitalize',
  },
  error: {
    marginTop: 7,
    fontSize: 14,
    color: '#DA202A',
    fontWeight: '400',
  },
});
