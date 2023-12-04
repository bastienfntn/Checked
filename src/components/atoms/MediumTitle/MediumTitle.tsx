import {Text, StyleSheet} from 'react-native';
import React from 'react';

type Props = {
  children: string;
  style?: object;
};

export default function ({children, style}: Props) {
  return <Text style={[styles.mediumTitle, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  mediumTitle: {
    fontSize: 26,
    fontWeight: '600',
  },
});
