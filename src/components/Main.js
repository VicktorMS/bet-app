import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useOptionChoice } from "../hooks/useOptionChoice";
import { useRandomNumber } from "../hooks/useRandomNumber";
import ImageChanger from "./ImageChanger";
import MoneyCounter from './MoneyCounter'
import ResultScreen from "./ResultScreen";

const NumberBox = ({ optsArr }) => {
  const { randomNumber, generateRandomNumber } = useRandomNumber()
  const { optionChoice, setOptionChoice } = useOptionChoice();

  function handleButtonPress(option) {
    generateRandomNumber(optsArr);
    setOptionChoice(option);
  }

  return (
    <>
      <ImageChanger optArr={optsArr} randomNumber={randomNumber}/>
      <ResultScreen optArr={optsArr} randomNumber={randomNumber} optionChoice={optionChoice}/>
      <MoneyCounter randomNumber={randomNumber} optionChoice={optionChoice}/>
      <View style={styles.container}>
        <View style={styles.title}> 
          <Text style={styles.titleText}>Bet Options</Text>
        </View>
        {optsArr.map((option, index) => (
          <Button 
            key={index + 'Button'} 
            title={`${option}`} 
            onPress={() => 
              handleButtonPress(index)
            }
            color='#963484'
          />
        ))}
      </View>
    </>
  );
};

export default NumberBox;


const styles = StyleSheet.create({
  container: {
    margin: 10,

    width: "100%",
    padding: 20,
    paddingTop: 35,
    borderRadius: 8,
    border: '2px solid #3066BE',
    backgroundColor: "#60AFFF",
    
    gap: 10,
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    margin: 10,
    flexDirection: "row",
    gap: 10,
  },
  title:{
    position: 'absolute',
    top: 10,
  },
  titleText: {
    fontWeight: "bold"
  }

});
