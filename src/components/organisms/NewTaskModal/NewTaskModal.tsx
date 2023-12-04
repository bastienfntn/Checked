import {Modal} from 'react-native';
import NewTaskModalView from '../../molecules/NewTaskModalView/NewTaskModalView';
import React from 'react';

type Props = {
  handleCancel: () => void;
  addTask: (task: string) => void;
};

export default function NewTaskModal(props: Props) {
  return (
    <Modal transparent={true}>
      <NewTaskModalView
        addTask={props.addTask}
        handleCancel={props.handleCancel}
      />
    </Modal>
  );
}
