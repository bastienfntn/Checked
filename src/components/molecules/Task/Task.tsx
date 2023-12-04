import BodyMedium from '../../atoms/BodyMedium/BodyMedium';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

type Props = {
  text: string;
};

export default function Task(props: Props) {
  const [isDone, setIsDone] = React.useState(false);
  const handlePress = () => {
    setIsDone(!isDone);
  };
  return (
    <TouchableOpacity style={styles.taskContainer}>
      <TouchableOpacity
        style={isDone ? styles.checkboxFilled : styles.checkboxEmpty}
        onPress={handlePress}
      />
      <BodyMedium
        text={props.text}
        style={isDone ? styles.linedText : undefined}
      />
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
  checkboxEmpty: {
    marginRight: 12,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'black',
    width: 20,
    height: 20,
    borderRadius: 5,
    marginLeft: 5,
  },
  checkboxFilled: {
    marginRight: 12,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'black',
    width: 20,
    height: 20,
    borderRadius: 5,
    marginLeft: 5,
    backgroundColor: 'black',
  },
  linedText: {
    textDecorationLine: 'line-through',
  },
});
