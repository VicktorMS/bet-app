import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'

const MoneyCounter = ({randomNumber, optionChoice}) => {
    const [money, setMoney] = useState(10)

    useEffect(() => {
        if(optionChoice !== null && optionChoice !== undefined){
            randomNumber === optionChoice ? setMoney(money + 5) : setMoney(money - 1)
        }
    }, [randomNumber, optionChoice])
    
  return (
    <View style={styles.container}>
        <Text>Wallet</Text>
        <Text style={styles.moneyText}>R${money}</Text>
    </View>
  )
}

export default MoneyCounter

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        width: "100%",
        padding: 10,
        borderRadius: 8,
        border: '2px solid #3066BE',
        backgroundColor: "#60AFFF",
    },
    moneyText: {
        fontWeight: 'bold',
        fontSize: 22
    }
})

/* <View style={styles.drawn}>
            <Text>Drawn Animal</Text>
        </View> */