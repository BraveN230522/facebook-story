import { setMobile } from '@redux/slices';
import { useAppDispatch, useAppSelector } from '@redux/store';

const useLogic = (props: any) => {
  const dispatch = useAppDispatch();
  const mobile = useAppSelector(state => state.home.mobile);

  const handleDispatch = () => {
    dispatch(setMobile(!mobile));
  };
  return { handleDispatch };
};

export default useLogic;
