import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ResultScreen = ({optArr, randomNumber, optionChoice}) => {

  return (
    <View style={styles.container}>
      <View style={{...styles.resultBox, ...styles.drawn}}>
        <Text style={styles.title} >Animal Drawn</Text>
        <Text>{optArr[randomNumber] || "No Animal Bet"}</Text>
      </View>
      <View style={[styles.resultBox, optionChoice == randomNumber ? styles.lose : styles.win ]}>
        <Text style={styles.title} >Animal Bet</Text>
        <Text>{optArr[optionChoice]|| "No Animal Bet"}</Text>
      </View>
    </View>
  )
}

export default ResultScreen

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 10,
        width: "85%",
        borderRadius: 8,
        border: '2px solid #3066BE',
        backgroundColor: "#60AFFF",
    },
    resultBox: {
        padding: 10,
        width: '50%'
    },
    win: {
        backgroundColor: 'red'
    },
    lose: {
        backgroundColor: 'green'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16
    }

});