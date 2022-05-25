import { setMobile } from '@redux/slices';
import { useAppDispatch, useAppSelector } from '@redux/store';

import { goBack } from '@utils/helper';

const useLogic = (props: any) => {
  const { onLeftPress } = props;

  const handleLeftPress = () => {
    if (onLeftPress) return onLeftPress;
    return goBack();
  };

  return { handleLeftPress };
};

export default useLogic;
