import HomePageTemplate from '../components/templates/HomePageTemplate/HomePageTemplate';
import React from 'react';

type Props = {
  onPress: () => void;
};

export default function HomePage(props: Props) {
  return (
    <HomePageTemplate
      onPress={props.onPress}
      buttonTitle={'Begin'}
      AppTitle={'Checked.'}
    />
  );
}
