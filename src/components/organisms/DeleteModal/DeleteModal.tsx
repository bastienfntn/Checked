import {Modal} from 'react-native';
import React from 'react';
import DeleteModalView from '../../molecules/DeleteModalView/DeleteModalView';

type Props = {
  handleCancel: () => void;
  deleteTask: () => void;
};

export default function DeleteModal(props: Props) {
  return (
    <Modal transparent={true}>
      <DeleteModalView
        deleteTask={props.deleteTask}
        handleCancel={props.handleCancel}
      />
    </Modal>
  );
}
