import { useEffect, useState } from 'react';

import { setMobile } from '@redux/slices';
import { useAppDispatch, useAppSelector } from '@redux/store';
import { hasAndroidPermission } from '@utils/helper';
import { Platform } from 'react-native';
import CameraRoll, {
  GetPhotosParams,
} from '@react-native-community/cameraroll';

const useLogic = (props: any) => {
  const dispatch = useAppDispatch();
  const mobile = useAppSelector(state => state.home.mobile);
  const [photos, setPhotos] = useState<CameraRoll.PhotoIdentifier[]>([]);

  const getPhotos = async () => {
    if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
      return;
    }
    const fetchParams: GetPhotosParams = {
      first: 5,
      assetType: 'Photos',
    };

    CameraRoll.getPhotos(fetchParams)
      .then(r => {
        setPhotos(r.edges);
      })
      .catch(err => {
        //Error Loading Images
      });
  };

  const handleDispatch = () => {
    dispatch(setMobile(!mobile));
  };
  return { handleDispatch };
};

export default useLogic;
