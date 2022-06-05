import { useEffect, useState } from 'react';

import { setMobile } from '@redux/slices';
import { useAppDispatch, useAppSelector } from '@redux/store';
import { hasAndroidPhotoPermission } from '@utils/helper';
import { Platform } from 'react-native';
import CameraRoll, {
  GetPhotosParams,
} from '@react-native-community/cameraroll';

const useLogic = (props: any) => {
  const dispatch = useAppDispatch();
  const [photos, setPhotos] = useState<CameraRoll.PhotoIdentifier[]>([]);
  useEffect(() => {
    getPhotos();
  }, []);

  const getPhotos = async () => {
    if (Platform.OS === 'android' && !(await hasAndroidPhotoPermission())) {
      return;
    }
    const fetchParams: GetPhotosParams = {
      first: 11,
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

  return { getPhotos, photos };
};

export default useLogic;
