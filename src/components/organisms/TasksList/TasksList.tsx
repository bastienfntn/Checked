import React from 'react';
import {StyleSheet, View} from 'react-native';
import Task from '../../molecules/Task/Task';

type Props = {
  tasks: string[];
  deleteTask: (index: number) => void;
};

export default function TaskList({tasks, deleteTask}: Props) {
  const handleLongPress = (index: number) => () => {
    deleteTask(index);
  };
  return (
    <View style={styles.tasksList}>
      {tasks.map((task, index) => (
        <Task
          key={`task-${index}`}
          text={task}
          handleLongPress={handleLongPress(index)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  tasksList: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
  },
});
