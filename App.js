import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ImageChanger from "./src/components/ImageChanger";
import NumberBox from "./src/components/NumberBox";

export default function App() {
  const optionsInGame = [
    "ostrich",
    "Lion",
    "Tiger",
    "Butterfly",
    "Bull",
    "Horse",
  ];

  return (
    <View style={styles.container}>
      <ImageChanger optArr={optionsInGame}/>
      <NumberBox optsArr={optionsInGame}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
