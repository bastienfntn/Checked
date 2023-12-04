import BodyMedium from '../../atoms/BodyMedium/BodyMedium';
import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-ionicons';

type Props = {
  text: string;
  handleLongPress: () => void;
};

export default function Task(props: Props) {
  return (
    <TouchableOpacity onLongPress={props.handleLongPress}>
      <View style={styles.taskContainer}>
        <Icon name="checkbox-outline" style={styles.icon} />
        <BodyMedium text={props.text} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
});
