import {Text, StyleSheet} from 'react-native';
import React from 'react';

type Props = {
  children: string;
};

export default function ({children}: Props) {
  return <Text style={styles.mediumTitle}>{children}</Text>;
}

const styles = StyleSheet.create({
  mediumTitle: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: '600',
  },
});
