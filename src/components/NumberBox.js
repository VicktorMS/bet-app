import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { isMultipleOf } from "../utils/utils";
import { useOptionChoice } from "../hooks/useOptionChoice";

const NumberBox = ({optsArr}) => {
    const {optionChoice, setOptionChoice } = useOptionChoice()
    console.log("Estado:",optionChoice)

    function handleButtonPress(option){
        setOptionChoice(option)
        console.log("Opção Atual:", option)
    }


  return (
    <View style={styles.container}>
        {optsArr.map((option, index) => (
            <Button 
            title={`${option}`} 
            onPress={() => handleButtonPress(index)}
            />
        ))}
    </View>
  );
};

export default NumberBox;

const styles = StyleSheet.create({
    container: {
        margin: 10,
        width: '70%',
        gap: 10,
        flexWrap: 'wrap',
        flexDirection: 'row',
        maxHeight: 200,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: 'lightgrey'
    },
    row:{
        margin: 10,
        flexDirection: "row",
        gap: 10
    },
   
});


// <View style={styles.row}>
//             <Button title="Avestruz" />
//             <Button title="Leão" />
//             <Button title="Tigre" />
//         </View>
//         <View style={styles.row}>
//             <Button title="Borboleta" />
//             <Button title="Touro" />
//             <Button title="Cavalo" />
//         </View>