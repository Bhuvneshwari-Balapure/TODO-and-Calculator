import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';

export default function Buttons({
  title = String,
  type = 'operator' | 'number',
  onPress = Function,
}) {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={{ fontSize: 30, color: 'white' }}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    height: 70,
    width: 70,
    borderRadius: 30,
    // padding: 20,
    margin: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    // backgroundColor: "gray",
  },
});
