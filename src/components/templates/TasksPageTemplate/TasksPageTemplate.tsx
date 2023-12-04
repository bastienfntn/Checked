import TasksList from '../../organisms/TasksList/TasksList';
import MediumTitle from '../../atoms/MediumTitle/MediumTitle';
import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import BasicButton from '../../atoms/BasicButton/BasicButton';
import NewTaskModal from '../../organisms/NewTaskModal/NewTaskModal';

type Props = {
  tasks: string[];
  children: string;
  buttonTitle: string;
  addTask: (task: string) => void;
};

export default function TasksPageTemplate({
  tasks,
  children,
  addTask,
  buttonTitle,
}: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const changeModalState = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleAddTask = (task: string) => {
    addTask(task);
    changeModalState();
  };

  return (
    <View style={styles.tasksPageTemplate}>
      <MediumTitle>{children}</MediumTitle>
      <TasksList tasks={tasks} />
      <BasicButton onPress={changeModalState} buttonTitle={buttonTitle} />
      {isModalOpen && (
        <NewTaskModal handleCancel={changeModalState} addTask={handleAddTask} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  tasksPageTemplate: {
    flex: 1,
  },
});
