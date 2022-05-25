import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import useLogic from './Home.logic';
import { styles } from './Home.style';

export const Home = (props: any) => {
  const { handleDispatch } = useLogic(props);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.box} onPress={handleDispatch}>
        <Image
          style={styles.image}
          source={{ uri: 'https://source.unsplash.com/random' }}
          resizeMode="cover"
        />
        <View style={styles.textBox}>
          <View>
            <Icon name="plus" size={30} color="#900" />
          </View>
          <View style={styles.wrapText}>
            <Text style={styles.text}>Create Story</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
