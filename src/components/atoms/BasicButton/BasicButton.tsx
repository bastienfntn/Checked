import {Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';

type Props = {
  onPress: () => void;
  buttonTitle: string;
  style?: object;
};

export default function BasicButton(props: Props) {
  return (
    <Pressable style={styles.basicButton} onPress={props.onPress}>
      <Text style={styles.basicButtonText}>{props.buttonTitle}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  basicButton: {
    backgroundColor: '#D3D3D3',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    maxWidth: 200,
    alignSelf: 'center',
  },
  basicButtonText: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});
