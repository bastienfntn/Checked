import AppTitle from '../../atoms/AppTitle/AppTitle';
import BasicButton from '../../atoms/BasicButton/BasicButton';
import React from 'react';
import {View} from 'react-native';

type Props = React.ComponentProps<typeof BasicButton> &
  React.ComponentProps<typeof AppTitle>;

export default function HomePageTemplate(props: Props) {
  return (
    <View>
      <AppTitle AppTitle={props.AppTitle} />
      <BasicButton onPress={props.onPress} buttonTitle={props.buttonTitle} />
    </View>
  );
}
