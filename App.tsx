/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import TODO from "./src/Assignment/TODO";
// import Calculator from "./src/Assignment/Calculator";

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>{/* <Calculator /> */}</SafeAreaView>
      <ScrollView>
        <TODO />
      </ScrollView>
    </SafeAreaProvider>
  );
}

export default App;
