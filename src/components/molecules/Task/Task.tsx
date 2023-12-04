import BodyMedium from '../../atoms/BodyMedium/BodyMedium';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

type Props = {
  text: string;
};

export default function Task(props: Props) {
  return (
    <TouchableOpacity style={styles.taskContainer}>
      <View style={styles.checkbox} />
      <BodyMedium text={props.text} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: 'white',
    padding: 12,
    margin: 7,
    borderRadius: 10,
  },
  checkbox: {
    marginRight: 12,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'black',
    width: 20,
    height: 20,
    borderRadius: 5,
    marginLeft: 5,
  },
});
