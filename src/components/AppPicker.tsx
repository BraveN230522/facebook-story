import { CalendarIcon, ChevronPickerIcon, ClockIcon } from '@assets';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import IIcons from 'react-native-vector-icons/Ionicons';
import { AppModal } from '@components/AppModal';
import { AppSingleSelection } from '@components/AppSingleSelection';

/**
 * - Data must be object and include ID and CONTENT
 * - Selected must be ID
 * - Selected is also default data
 */
export const AppPicker = (props: any) => {
  const { selected, error, style, title, isRequired, onSelect, header, data } =
    props;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    handleBackdropPress();
  }, [selected]);

  const handleOpenModal = () => {
    setVisible(true);
  };

  const handleBackdropPress = () => {
    setVisible(false);
  };

  const handleFindIndex = id => {
    return data.findIndex(i => i.id === id);
  };

  return (
    <>
      <View style={[styles.container, style]}>
        <Text style={styles.textTitle}>
          {isRequired && <Text style={styles.isRequired}>* </Text>}
          {title}
        </Text>
        <TouchableOpacity
          onPress={handleOpenModal}
          activeOpacity={0.7}
          style={styles.viewSelect}>
          {/* {mode === 'date' ? <CalendarIcon /> : <ClockIcon />} */}
          <Text
            style={[styles.textSelect, selected ? styles.textAfterSelect : {}]}>
            {selected
              ? data[handleFindIndex(selected)]?.content
              : `Select an option`}
          </Text>
          <ChevronPickerIcon />
        </TouchableOpacity>
        {!!error && <Text style={styles.error}>{error}</Text>}
      </View>
      <AppModal visible={visible} onBackdropPress={handleBackdropPress}>
        {!!header && (
          <View style={styles.header}>
            <Text style={styles.headerTxt}>{header}</Text>
          </View>
        )}
        <View style={styles.modalContent}>
          <AppSingleSelection
            selected={selected}
            data={data}
            onSelect={onSelect}
          />
        </View>
      </AppModal>
    </>
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
    fontWeight: '400',
    fontSize: 15,
    color: '#333333',
    // marginLeft: 12,
    textTransform: 'capitalize',
  },
  textSelect: {
    flex: 1,
    fontWeight: '400',
    fontSize: 15,
    color: '#666666',
    // marginLeft: 12,
    textTransform: 'capitalize',
  },
  modalContent: {
    paddingHorizontal: 16,
  },
  header: {
    backgroundColor: '#F7F7F7',
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    height: 43,
  },
  headerTxt: {
    fontWeight: '700',
    fontSize: 15,
    color: '#000000',
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  error: {
    marginTop: 7,
    fontSize: 14,
    color: '#DA202A',
    fontWeight: '400',
  },
});
