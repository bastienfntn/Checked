import TasksList from '../../organisms/TasksList/TasksList';
import MediumTitle from '../../atoms/MediumTitle/MediumTitle';
import {StyleSheet, View} from 'react-native';
import React from 'react';
import BasicButton from '../../atoms/BasicButton/BasicButton';

type Props = {
  tasks: string[];
  children: string;
  onPress: () => void;
  buttonTitle: string;
};

export default function TasksPageTemplate({
  tasks,
  children,
  onPress,
  buttonTitle,
}: Props) {
  return (
    <View style={styles.tasksPageTemplate}>
      <MediumTitle>{children}</MediumTitle>
      <TasksList tasks={tasks} />
      <BasicButton onPress={onPress} buttonTitle={buttonTitle} />
    </View>
  );
}

const styles = StyleSheet.create({
  tasksPageTemplate: {
    flex: 1,
  },
});
