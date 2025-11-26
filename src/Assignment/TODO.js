import { StyleSheet, View } from 'react-native';
import Header from '../component/TODO/Header';
import TodoAddList from '../component/TODO/TodoAddList';
import AddTask from '../component/TODO/AddTask';
// import AddTask from '../component/TODO/AddTask';
export default function TODO() {
  return (
    <View>
      <Header />
      <AddTask />
      <View style={styles.list}>
        <TodoAddList />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#e8e3fbff',
  },
});
