import {Text, StyleSheet} from 'react-native';
import React from 'react';

type Props = {
  text: string;
};

export default function BodyMedium(props: Props) {
  return <Text style={styles.bodyMedium}>{props.text}</Text>;
}

const styles = StyleSheet.create({
  bodyMedium: {
    fontSize: 20,
  },
});
