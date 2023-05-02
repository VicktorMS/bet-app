import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { getRandomInt } from "../utils/utils";
import { useOptionChoice } from "../hooks/useOptionChoice";

const ImageChanger = ({ optArr }) => {
    const { optionChoice } = useOptionChoice()
     const randomNumber = getRandomInt(optArr.length)
    function verifBetAnswer(randomNumber){
        if(randomNumber === optionChoice){
            console.log("Acertou")
        }
        else{
            console.log("Errou")
        }

    }
    verifBetAnswer(randomNumber)

  return (
    <Image
    style={styles.mainImage}
    source={{
        uri: `https://source.unsplash.com/random/?${optArr[randomNumber]}`,
    }}
    />
  );
};

export default ImageChanger;

const styles = StyleSheet.create({
  mainImage: {
    width: 300,
    height: 300,
  },
});
