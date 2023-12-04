import BodyMedium from '../../atoms/BodyMedium/BodyMedium';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-ionicons';

type Props = {
  text: string;
};

export default function Task(props: Props) {
  return (
    <TouchableOpacity style={styles.taskContainer}>
      <Icon name="checkbox-outline" style={styles.icon} />
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
    padding: 10,
    margin: 7,
    borderRadius: 10,
  },
  icon: {
    marginRight: 10,
  },
});
