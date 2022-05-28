import { StyleSheet } from 'react-native';
import { Spacing } from '../../theme/size';

import { Colors } from '@theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 100,
  },
  box: {
    width: 150,
    height: 250,
    borderRadius: 20,
    backgroundColor: Colors.primary,
  },
  image: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 0.7,
  },
  textBox: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  wrapText: {
    width: '50%',
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  plusWrap: {
    position: 'absolute',
    top: -15,
    borderColor: Colors.primary,
    borderWidth: 2,
    width: 30,
    height: 30,
    backgroundColor: Colors.blue,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
