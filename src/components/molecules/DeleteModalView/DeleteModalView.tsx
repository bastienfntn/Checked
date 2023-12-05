import {StyleSheet, Text, View} from 'react-native';
import MediumTitle from '../../atoms/MediumTitle/MediumTitle';
import BasicButton from '../../atoms/BasicButton/BasicButton';
import React from 'react';
import CrossIcon from '../../atoms/CrossIcon/CrossIcon';

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
          <CrossIcon style={styles.crossIcon} onPress={props.handleCancel} />
        </View>
        <View style={styles.textView}>
          <Text>Do you want to delete this task ?</Text>
        </View>
        <View style={styles.buttonsView}>
          <BasicButton
            onPress={props.deleteTask}
            buttonTitle={'Delete'}
            style={styles.deleteButton}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    position: 'relative',
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    width: '70%',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  titleView: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textView: {
    marginBottom: 20,
    textDecorationColor: 'red',
  },
  buttonsView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  deleteButton: {
    backgroundColor: '#FAB4B4',
    width: 100,
  },
  crossIcon: {
    position: 'absolute',
    marginLeft: 55,
    marginTop: -20,
  },
});
