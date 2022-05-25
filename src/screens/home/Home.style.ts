import { StyleSheet } from 'react-native';
import { Spacing } from '../../theme/size';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 100,
  },
  box: {
    width: Spacing.width150,
    height: Spacing.height200,
    borderRadius: 20,
    backgroundColor: '#3a3b3c',
  },
  image: {
    flex: 0.7,
  },
  textBox: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
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
});
