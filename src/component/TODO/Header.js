import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Header() {
  return (
    <View style={styles.header}>
      <StatusBar backgroundColor="#a691f7ff" />
      <Text style={styles.text}>TODO App</Text>
      <TouchableOpacity
        onPress={() => {
          alert('clicked');
        }}
      >
        <Text style={styles.text}> + Add Task</Text>
      </TouchableOpacity>
      {/* <Ionicons name="calendar-number-outline" color="#000" size={40} /> */}
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 30,
    backgroundColor: '#a691f7ff',
  },
  text: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
