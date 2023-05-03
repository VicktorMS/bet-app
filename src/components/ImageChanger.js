import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

const ImageChanger = ({ optArr, randomNumber }) => {
  
  const startGameImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-yYAJjZ11jiwek1i4sVhnEgD7g1WEvOc1uEWcnfPJ6vzciWpgg77O2_Z3jIPM7Y3iEHs&usqp=CAU'

  const [imageDisplay, setImageDisplay] = useState(startGameImage) 

  useEffect(() => {
    if(randomNumber !== null && randomNumber !== undefined && randomNumber < optArr.length){
      setImageDisplay(`https://source.unsplash.com/random/?${optArr[randomNumber]}`)
    }else{
      setImageDisplay(startGameImage)
    }
  }, [randomNumber, optArr])


  return (
    <View>
      <Image
      style={styles.mainImage}
      source={{
          uri: imageDisplay,
      }}
      />
    </View>
  );
};

export default ImageChanger;

const styles = StyleSheet.create({
  mainImage: {
    width: 300,
    height: 300,
    borderRadius: 8,
  },
});
