import { useEffect, useState } from 'react';

import { hasAndroidPhotoPermission } from '@utils/helper';
import { NativeScrollEvent, Platform } from 'react-native';
import CameraRoll, {
  GetPhotosParams,
} from '@react-native-community/cameraroll';

const useLogic = (props: any) => {
  const [photos, setPhotos] = useState<CameraRoll.PhotoIdentifier[]>([]);
  const [page, setPage] = useState<number>(1);
  const [recall, setRecall] = useState<boolean>(false);

  useEffect(() => {
    getPhotos();
  }, []);

  const getPhotos = async () => {
    if (Platform.OS === 'android' && !(await hasAndroidPhotoPermission())) {
      return;
    }
    const fetchParams: GetPhotosParams = {
      first: 20,
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

  const isCloseToBottom = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }: NativeScrollEvent) => {
    const paddingToBottom = 20;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  const handleLoadMore = () => {
    setPage(page + 1);
    setRecall(false);
  };

  return { getPhotos, photos, isCloseToBottom, handleLoadMore };
};

export default useLogic;
