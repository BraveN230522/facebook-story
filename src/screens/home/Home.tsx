import { Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import React from 'react';

import { Button } from '@components/button';
import { styles } from './Home.style';
import useLogic from './Home.logic';

export const Home = (props: any) => {
  const { handleCreateStory } = useLogic(props);

  return (
    <View style={styles.container}>
      <Button style={styles.box} onPress={handleCreateStory}>
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
      </Button>
    </View>
  );
};
