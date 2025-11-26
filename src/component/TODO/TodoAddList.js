import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Pressable,
  Modal,
  Button,
  TextInput,
} from 'react-native';
import { Checkbox } from 'expo-checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
// import AntDesign from '@expo/vector-icons/AntDesign';
export default function TodoAddList() {
  const [AsData, setAsData] = React.useState([]);
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [editTask, setEditTask] = React.useState(null);
  const GetTaskData = async () => {
    let Tododata = await AsyncStorage.getItem('todoList');
    let takeTodoData = await JSON.parse(Tododata);
    console.log(Tododata);
    setAsData(takeTodoData);
  };
  React.useEffect(() => {
    GetTaskData();
  }, []);
  const DeleteTask = async id => {
    let updatedList = AsData.filter(t => t.id != id);
    setAsData(updatedList);
    await AsyncStorage.setItem('todoList', JSON.stringify(updatedList));
  };
  const EditTask = async item => {
    setEditTask(item);
    setIsModalVisible(true);
  };
  const SaveEdit = async () => {
    let editedData = AsData.map(item => {
      if (item.id === editTask.id) {
        return editTask;
      }
      return item;
    });
    setAsData(editedData);
    await AsyncStorage.setItem('todoList', JSON.stringify(editedData));
    setIsModalVisible(false);
  };
  const toggleIsDone = async i => {
    let EditIsDone = AsData.map(item => {
      if (item.id === i) {
        return { ...item, isDone: !item.isDone };
      }
      return item;
    });
    setAsData(EditIsDone);
    await AsyncStorage.setItem('todoList', JSON.stringify(EditIsDone));
  };
  return (
    <ScrollView>
      {/* <View> */}
      <FlatList
        data={AsData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.todoList}>
            <View>
              <Text
                style={[
                  styles.titleStyle,
                  item.isDone && { textDecorationLine: 'line-through' },
                ]}
              >
                {item.tittle}
              </Text>
              <Text>{item.subtitle}</Text>
            </View>

            <View style={styles.editDelete}>
              <Pressable
                onPress={() => {
                  EditTask(item);
                }}
              >
                <Text>Edit</Text>
              </Pressable>

              <TouchableOpacity
                onPress={() => {
                  DeleteTask(item.id);
                }}
              >
                <Text>Delete</Text>
              </TouchableOpacity>
              {/* <AntDesign name="delete" size={24} color="black" />{' '} */}
              <Checkbox
                value={item.isDone}
                style={{
                  width: '20',
                  height: '20',
                  borderRadius: '50%',
                  borderColor: '#ba5ef4ff',
                }}
                onValueChange={() => toggleIsDone(item.id)}
              />
            </View>
          </View>
        )}
      />
      <Modal
        visible={isModalVisible}
        animation="slide"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: 'lightblue',
            padding: 20,
            justifyContent: 'center',
            // alignItems: 'center',
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              color: 'purple',
              fontWeight: 'bold',
              fontSize: 18,
            }}
          >
            Edit Task
          </Text>
          <TextInput
            style={styles.textInput}
            value={editTask?.tittle}
            onChangeText={text => setEditTask({ ...editTask, tittle: text })}
          />
          <TextInput
            style={styles.textInput}
            value={editTask?.subtitle}
            onChangeText={t => setEditTask({ ...editTask, subtitle: t })}
          />
          <View style={styles.btn}>
            <Button title="Save" color="green" onPress={SaveEdit}></Button>

            <Button
              title="close"
              color="midnightblue"
              onPress={() => {
                setIsModalVisible(false);
              }}
            ></Button>
          </View>
        </View>
      </Modal>
      {/* </View> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  todoList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,

    marginVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'white',
    backgroundColor: 'white',
    marginHorizontal: 13,
  },
  editDelete: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,

    // marginHorizontal: 30,
  },
  titleStyle: {
    color: '#9848f3ff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  textInput: {
    fontSize: 18,
    color: 'purple',
    borderWidth: 1,

    borderColor: '#f0d0f6ff',
    marginVertical: 10,

    padding: 10,
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
});
