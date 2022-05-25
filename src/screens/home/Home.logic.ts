import { CREATE_STORY_SCREEN } from '@navigation/route';

const useLogic = (props: any) => {
  const handleCreateStory = () => {
    props.navigation.navigate(CREATE_STORY_SCREEN);
  };
  return { handleCreateStory };
};

export default useLogic;
