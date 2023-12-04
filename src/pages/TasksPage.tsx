import TasksPageTemplate from '../components/templates/TasksPageTemplate/TasksPageTemplate';
import {useState} from 'react';
import React from 'react';

export default function TasksPage() {
  const [tasks, setTasks] = useState<string[]>([]);
  const addTask = (task: string) => {
    setTasks([...tasks, task]);
  };
  const deleteTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <TasksPageTemplate
      addTask={addTask}
      tasks={tasks}
      buttonTitle={'Add a Task'}
      deleteTask={deleteTask}>
      To-Do List:
    </TasksPageTemplate>
  );
}
