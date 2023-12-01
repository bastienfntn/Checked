import BodyMedium from '../../atoms/BodyMedium/BodyMedium';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-ionicons';

type Props = {
  text: string;
};

export default function Task(props: Props) {
  return (
    <View style={styles.taskContainer}>
      <Icon name="checkbox-outline" />
      <BodyMedium text={props.text} />
    </View>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
});
