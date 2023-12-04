import {StyleSheet, Text, View} from 'react-native';
import MediumTitle from '../../atoms/MediumTitle/MediumTitle';
import BasicButton from '../../atoms/BasicButton/BasicButton';
import React from 'react';

type Props = {
  handleCancel: () => void;
  deleteTask: () => void;
};

export default function DeleteModalView(props: Props) {
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <View style={styles.titleView}>
          <MediumTitle>Delete a task</MediumTitle>
        </View>
        <View style={styles.textView}>
          <Text>Do you want to delete this task ?</Text>
        </View>
        <View style={styles.buttonsView}>
          <BasicButton onPress={props.handleCancel} buttonTitle={'Cancel'} />
          <BasicButton onPress={props.deleteTask} buttonTitle={'Delete'} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    width: '60%',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  titleView: {
    marginBottom: 20,
  },
  textView: {
    marginBottom: 20,
    textDecorationColor: 'red',
  },
  buttonsView: {
    flexDirection: 'row',
  },
});
