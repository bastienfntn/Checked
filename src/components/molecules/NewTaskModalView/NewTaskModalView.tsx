import {StyleSheet, TextInput, View} from 'react-native';
import MediumTitle from '../../atoms/MediumTitle/MediumTitle';
import BasicButton from '../../atoms/BasicButton/BasicButton';
import React, {useState} from 'react';

type Props = {
  handleCancel: () => void;
  addTask: (task: string) => void;
};

export default function NewTaskModalView(props: Props) {
  const [text, setText] = useState('');

  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <View style={styles.titleView}>
          <MediumTitle>Add a task</MediumTitle>
        </View>
        <View style={styles.inputView}>
          <TextInput
            value={text}
            onChange={event => setText(event.nativeEvent.text)}
            placeholder={'New Task'}
          />
        </View>
        <View style={styles.buttonsView}>
          <BasicButton onPress={props.handleCancel} buttonTitle={'Cancel'} />
          <BasicButton
            onPress={() => props.addTask(text)}
            buttonTitle={'Add'}
          />
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
  inputView: {
    marginBottom: 20,
  },
  buttonsView: {
    flexDirection: 'row',
  },
});
