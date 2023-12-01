import {Text, StyleSheet} from 'react-native';
import React from 'react';

type Props = {
  AppTitle: string;
};

export default function AppTitle(props: Props) {
  return <Text style={styles.mainTitle}>{props.AppTitle}</Text>;
}

const styles = StyleSheet.create({
  mainTitle: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: '600',
  },
});
