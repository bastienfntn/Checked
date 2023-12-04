import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Task from '../../molecules/Task/Task';

type Props = {
  tasks: string[];
  deleteTask: (index: number) => void;
  changeDeleteModalState: () => void;
  setTouchedTask: (index: number) => void;
};

export default function TaskList(props: Props) {
  const handleDeleteTask = (index: number) => {
    props.changeDeleteModalState();
    props.setTouchedTask(index);
  };
  return (
    <View style={styles.tasksList}>
      {props.tasks.map((task, index) => (
        <TouchableOpacity
          key={`task-${index}`}
          onLongPress={() => handleDeleteTask(index)}>
          <Task text={task} />
        </TouchableOpacity>
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
