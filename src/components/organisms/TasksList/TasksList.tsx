import React from 'react';
import { StyleSheet, View } from 'react-native';
import Task from '../../molecules/Task/Task';

type Props = {
  tasks: string[];
};

export default function TaskList({tasks}: Props) {
  return (
    <View style={styles.tasksList}>
      {tasks.map((task, index) => (
        <Task key={`task-${index}`} text={task} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  tasksList: {
    flex: 1,
    flexDirection: 'column',
  },
});
