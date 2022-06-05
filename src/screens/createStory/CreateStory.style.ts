import { StyleSheet } from 'react-native';

import { Colors } from '@theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
  wrap: {
    backgroundColor: Colors.primary,
  },
  photos: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  photoOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 5,
    paddingHorizontal: 15,
  },
  cameraRoll: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cameraRollText: {
    color: Colors.gray,
    fontWeight: '700',
    fontSize: 14,
    marginRight: 5,
  },
  multiple: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: Colors.gray,
    borderRadius: 8,
    paddingVertical: 2,
    paddingHorizontal: 8,
  },
  multipleText: {
    color: Colors.gray,
    fontWeight: '700',
    fontSize: 14,
    marginLeft: 10,
  },
});
