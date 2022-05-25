import React, { ReactElement } from 'react';
import { View } from 'react-native';

import { Button } from '@components/button';
import { styles } from './Header.style';
import { goBack } from '@utils/helper';
import useLogic from './Header.logic';

interface IProps {
  LeftComponent: () => ReactElement;
  RightComponent: () => ReactElement;
  CenterComponent: () => ReactElement;
  onLeftPress: () => void;
}

export const Header = (props: IProps) => {
  const { LeftComponent, RightComponent, CenterComponent, onLeftPress } = props;
  const { handleLeftPress } = useLogic(props);

  const Left = () => {
    if (LeftComponent) return <LeftComponent />;
    return <></>;
  };
  const Center = () => {
    if (CenterComponent) return <CenterComponent />;
    return <></>;
  };

  const Right = () => {
    if (RightComponent) return <RightComponent />;
    return <></>;
  };

  return (
    <View style={styles.container}>
      <Button onPress={handleLeftPress}>
        <Left />
      </Button>
      <Center />
      <Right />
    </View>
  );
};
