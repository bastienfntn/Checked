import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

type Props = {
  style?: object;
  onPress: () => void;
};

export default function CrossIcon({style, onPress}: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={require('./cross.png')} style={[styles.icon, style]} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 12,
    height: 12,
  },
});
