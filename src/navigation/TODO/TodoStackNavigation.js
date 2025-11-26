import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TodoAddList from '../../component/TODO/TodoAddList';
import AddTask from '../../component/TODO/AddTask';
export default function TodoStackNavigation() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TodoList"
          component={TodoAddList}
          options={{ title: 'TodoList' }}
        />
        <Stack.Screen
          name="AddTask"
          component={AddTask}
          options={{ title: 'AddTask' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
