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

export const Home = (props: any) => {
  const { handleCreateStory } = useLogic(props);

  const [selectRadio, setSelectRadio] = useState([]);
  console.log(selectRadio);

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
        placeholder="Email"
        // secureTextEntry
        onChangeText={(value: string) => {
          console.log(value);
        }}
        // value={values.password}
        // error={errors.password}
        maxLength={100}
        PreIcon={MailIcon}
        error="sai email roi"
        label="Username"
        isRequired
      /> */}
      <AppMultipleSelection
        selected={selectRadio}
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
        onSelect={setSelectRadio}
      />
      {/* <AppAccordion /> */}
    </ScrollView>
  );
};
