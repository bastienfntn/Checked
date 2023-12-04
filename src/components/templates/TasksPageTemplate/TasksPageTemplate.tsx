import TasksList from '../../organisms/TasksList/TasksList';
import MediumTitle from '../../atoms/MediumTitle/MediumTitle';
import {Animated, StyleSheet} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import BasicButton from '../../atoms/BasicButton/BasicButton';
import NewTaskModal from '../../organisms/NewTaskModal/NewTaskModal';
import DeleteModal from '../../organisms/DeleteModal/DeleteModal';

type Props = {
  tasks: string[];
  children: string;
  buttonTitle: string;
  addTask: (task: string) => void;
  deleteTask: (index: number) => void;
};

export default function TasksPageTemplate({
  tasks,
  children,
  addTask,
  buttonTitle,
  deleteTask,
}: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [touchedTask, setTouchedTask] = useState(-1);
  const zoomIn = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(zoomIn, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  }, [zoomIn]);

  const changeModalState = () => {
    setIsModalOpen(!isModalOpen);
  };
  const changeDeleteModalState = () => {
    setIsDeleteModalOpen(!isDeleteModalOpen);
  };
  const handleAddTask = (task: string) => {
    addTask(task);
    changeModalState();
  };
  const handleDeleteTask = () => {
    deleteTask(touchedTask);
    changeDeleteModalState();
  };

  return (
    <Animated.View
      style={[
        styles.tasksPageTemplate,
        {
          transform: [
            {
              scale: zoomIn,
            },
          ],
        },
      ]}>
      <MediumTitle style={styles.taskListTitle}>{children}</MediumTitle>
      <TasksList
        tasks={tasks}
        deleteTask={deleteTask}
        changeDeleteModalState={changeDeleteModalState}
        setTouchedTask={setTouchedTask}
      />
      <BasicButton onPress={changeModalState} buttonTitle={buttonTitle} />
      {isModalOpen && (
        <NewTaskModal handleCancel={changeModalState} addTask={handleAddTask} />
      )}
      {isDeleteModalOpen && (
        <DeleteModal
          handleCancel={changeDeleteModalState}
          deleteTask={handleDeleteTask}
        />
      )}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  tasksPageTemplate: {
    flex: 1,
  },
  taskListTitle: {
    marginLeft: 30,
    marginTop: 40,
  },
});
