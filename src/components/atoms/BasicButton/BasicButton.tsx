import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Button, useColorScheme} from 'react-native';
import React from 'react';

type Props = {
  onPress: () => void;
  buttonTitle: string;
};

export default function BasicButton(props: Props) {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Button
      title={props.buttonTitle}
      color={isDarkMode ? Colors.white : Colors.black}
      onPress={props.onPress}
    />
  );
}
