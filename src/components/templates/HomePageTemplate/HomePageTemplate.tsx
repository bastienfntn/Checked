import AppTitle from '../../atoms/AppTitle/AppTitle';
import BasicButton from '../../atoms/BasicButton/BasicButton';
import React, {useRef} from 'react';
import {Animated, StyleSheet} from 'react-native';

type Props = React.ComponentProps<typeof BasicButton> &
  React.ComponentProps<typeof AppTitle>;

export default function HomePageTemplate(props: Props) {
  const translateAnim = useRef(new Animated.Value(0)).current;
  const translate = () => {
    Animated.timing(translateAnim, {
      toValue: -900,
      duration: 600,
      useNativeDriver: true,
    }).start(({finished}) => {
      if (finished) {
        props.onPress();
      }
    });
  };

  const handlePress = () => {
    translate();
  };

  return (
    <Animated.View
      style={[
        {
          transform: [
            {
              translateY: translateAnim,
            },
          ],
        },
      ]}>
      <AppTitle AppTitle={props.AppTitle} />
      <BasicButton
        onPress={handlePress}
        buttonTitle={props.buttonTitle}
        style={styles.beginButton}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  beginButton: {
    backgroundColor: '#E8EAED',
  },
});
