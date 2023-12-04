import AppTitle from '../../atoms/AppTitle/AppTitle';
import BasicButton from '../../atoms/BasicButton/BasicButton';
import React, {useRef} from 'react';
import {Animated, StyleSheet, View} from 'react-native';

type Props = React.ComponentProps<typeof BasicButton> &
  React.ComponentProps<typeof AppTitle>;

export default function HomePageTemplate(props: Props) {
  const zoomAnim = useRef(new Animated.Value(1)).current;
  const translateAnim = useRef(new Animated.Value(0)).current;

  const zoomIn = () => {
    Animated.timing(zoomAnim, {
      toValue: 50,
      duration: 500,
      useNativeDriver: true,
    }).start(({finished}) => {
      if (finished) {
        props.onPress();
      }
    });
  };

  const translate = () => {
    Animated.timing(translateAnim, {
      toValue: 10,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const handlePress = () => {
    zoomIn();
    translate();
  };

  return (
    <View>
      <AppTitle AppTitle={props.AppTitle} />
      <Animated.View
        style={[
          styles.buttonContainer,
          {
            transform: [
              {
                scale: zoomAnim,
              },
              {
                translateY: translateAnim,
              },
            ],
          },
        ]}>
        <BasicButton
          onPress={handlePress}
          buttonTitle={props.buttonTitle}
          style={styles.beginButton}
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  beginButton: {
    backgroundColor: '#E8EAED',
  },
  buttonContainer: {},
});
