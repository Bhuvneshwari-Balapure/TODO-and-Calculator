import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import React, { useState } from 'react';
export default function AddTask() {
  const [text, setText] = React.useState({ title: '', subtitle: '' });
  // const isFocussed = useIsFocused();
  const handleChange = (name, value) => {
    setText(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  const AddTask = async () => {
    const newTask = {
      id: Date.now(),
      tittle: text.title,
      subtitle: text.subtitle,
      isDone: false,
    };
    try {
      if (text.title === '' && text.subtitle === '') {
        return alert('Please Fill task and subtask');
      } else {
        let oldData = await AsyncStorage.getItem('todoList');
        let todoList = oldData ? JSON.parse(oldData) : [];
        todoList.push(newTask);
        await AsyncStorage.setItem('todoList', JSON.stringify(todoList));
        console.log(todoList);
        alert('task Saved');
      }
    } catch (error) {
      console.log('Error while saving task', error);
    }
  };

  return (
    <View>
      <View>
        <Text style={styles.heading}>Add Task</Text>
      </View>
      <View style={styles.titleForm}>
        <TextInput
          placeholder="Enter Task Title"
          style={styles.textInput}
          value={text.title}
          onChangeText={value => handleChange('title', value)}
        />
        <TextInput
          placeholder="Enter Task Sub Title"
          style={styles.textInput}
          value={text.subtitle}
          onChangeText={value => handleChange('subtitle', value)}
        />

        <Button
          title="Add"
          onPress={AddTask}
          color="#a691f7ff"
          style={styles.btn}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: '#a691f7ff',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textInput: {
    fontSize: 18,
    color: 'purple',
    borderWidth: 1,

    borderColor: '#f0d0f6ff',
    marginVertical: 10,

    padding: 10,
  },
  titleForm: {
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'center',
  },
});
