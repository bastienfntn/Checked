import TasksPageTemplate from '../components/templates/TasksPageTemplate/TasksPageTemplate';
import {useState} from 'react';
import React from 'react';

export default function TasksPage() {
  const [tasks, setTasks] = useState<string[]>([]);
  const addTask = (task: string) => {
    setTasks([...tasks, task]);
  };

  return (
    <TasksPageTemplate
      addTask={addTask}
      tasks={tasks}
      buttonTitle={'Add a Task'}>
      To-Do List:
    </TasksPageTemplate>
  );
}
