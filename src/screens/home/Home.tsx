import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import React, { useState } from 'react';

import { Button } from '@components/button';
import { AppInput } from '@components/AppInput';
import { styles } from './Home.style';
import useLogic from './Home.logic';
import { EyeInactiveIcon, MailIcon, PadLockIcon } from '@assets';
import { AppMultipleSelection } from '@components/AppMultipleSelection';
import { AppAccordion } from '@components/AppAccordion';
import { AppSingleSelection } from '@components/AppSingleSelection';
import { AppDateTimePicker } from '@components/AppDateTimePicker';
import { AppYesNo } from '@components/AppYesNo';
import { AppPicker } from '@components/AppPicker';
import { AppModal } from '@components/AppModal';
import { Modal } from '@ui-kitten/components';
import { AppButton } from '@components/AppButton';

export const Home = (props: any) => {
  const { handleCreateStory } = useLogic(props);

  const [select, setSelect] = useState([0]);
  const [select2, setSelect2] = useState(0);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* <Button style={styles.box} onPress={handleCreateStory}>
        <Image
          style={styles.image}
          source={{ uri: 'https://source.unsplash.com/random' }}
          resizeMode="cover"
        />
        <View style={styles.textBox}>
          <View style={styles.plusWrap}>
            <Icon size={20} color="white" name="plus" />
          </View>
          <View style={styles.wrapText}>
            <Text style={styles.text}>Create story</Text>
          </View>
        </View>
      </Button> */}
      {/* <AppInput
        // placeholder="Email"
        // secureTextEntry
        onChangeText={(value: string) => {
          console.log(value);
        }}
        // value={values.password}
        // error={errors.password}
        // maxLength={100}
        // PreIcon={MailIcon}
        // PostIcon={MailIcon}
        error="sai email roi"
        label="Username"
        isPassword
        isRequired
        // multiline
        // inputStyle={{ minHeight: '30%' }}
      /> */}
      {/* <AppMultipleSelection
        selected={select}
        data={[
          {
            id: 1,
            content: 'Key necessary',
          },
          {
            id: 2,
            content: 'Advertisement unwanted',
          },
          {
            id: 3,
            content: 'House of main street',
          },
          {
            id: 4,
            content: 'Main drop off point within the house',
          },
          {
            id: 5,
            content: 'Further hinderings',
          },
        ]}
        onSelect={setSelect}
        title="day la title"
        error="loi roi"
        isRequired
      /> */}
      {/* <AppSingleSelection
        selected={select2}
        data={[
          {
            id: 1,
            content: 'Key necessary',
          },
          {
            id: 2,
            content: 'Advertisement unwanted',
          },
          {
            id: 3,
            content: 'House of main street',
          },
          {
            id: 4,
            content: 'Main drop off point within the house',
          },
          {
            id: 5,
            content: 'Further hinderings',
          },
        ]}
        onSelect={setSelect2}
        title="day la title"
        error="loi roi"
        isRequired
      /> */}
      {/* <AppDateTimePicker
        onPickDate={date => {
          console.log(date);
        }}
        error="loi roi"
        title="Test package delivered intact?"
        isRequired
        mode="time"
      /> */}
      {/* <AppYesNo
        onSelect={setSelect}
        selected={select}
        title="day la title"
        isRequired
      /> */}
      <AppPicker
        title="title"
        isRequired
        header="Select address"
        data={[
          {
            id: 1,
            content: 'Key necessary',
          },
          {
            id: 2,
            content: 'Advertisement unwanted',
          },
          {
            id: 3,
            content: 'House of main street',
          },
          {
            id: 4,
            content: 'Main drop off point within the house',
          },
          {
            id: 5,
            content: 'Further hinderings',
          },
          {
            id: 6,
            content: 'Further hinderings',
          },
          {
            id: 7,
            content: 'Further hinderings',
          },
          {
            id: 8,
            content: 'Further hinderings',
          },
          {
            id: 9,
            content: 'Further hinderings',
          },
          {
            id: 10,
            content: 'Further hinderings',
          },
          {
            id: 11,
            content: 'Further hinderings',
          },
          {
            id: 12,
            content: 'Further hinderings',
          },
          {
            id: 13,
            content: 'Further hinderings',
          },
          {
            id: 14,
            content: 'Further hinderings',
          },
          {
            id: 15,
            content: 'Further hinderings',
          },
          {
            id: 16,
            content: 'Further hinderings',
          },
        ]}
        onSelect={setSelect}
        selected={select}
      />
      {/* <AppButton text="Button" disabled /> */}
      {/* <AppAccordion /> */}
    </ScrollView>
  );
};
