import TasksPageTemplate from '../components/templates/TasksPageTemplate/TasksPageTemplate';
import {useState} from 'react';
import React from 'react';

export default function TasksPage() {
  const [tasks, setTasks] = useState<string[]>([]);

  const onPress = () => {
    setTasks([...tasks, 'New Task']);
  };

  return (
    <TasksPageTemplate
      tasks={tasks}
      onPress={onPress}
      buttonTitle={'Add a Task'}>
      ToDo
    </TasksPageTemplate>
  );
}
