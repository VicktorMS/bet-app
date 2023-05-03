import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ImageChanger from "./src/components/ImageChanger";
import Main from "./src/components/Main";

export default function App() {
  const optionsInGame = [
    "Bear",
    "Lion",
    "Tiger",
    "Butterfly",
    "Bull",
    "Horse",
  ];

  return (
    <View style={styles.container}>
      {/* <ImageChanger optArr={optionsInGame}/> */}
      <Main optsArr={optionsInGame}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    maxWidth: '100vw',
    maxHeight: '100vh',
    backgroundColor: "#2AF5FF",
    alignItems: "center",
    justifyContent: "center",
  },
});
