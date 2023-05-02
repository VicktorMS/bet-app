import { useState } from "react";
import { getRandomInt } from "../utils/utils";

export function useRandomNumber(){
    const [randomNumber, setRandomNumber] = useState(null)

    function generateRandomNumber(optsArr){
        setRandomNumber(getRandomInt(optArr.length))
    }
    return{
        randomNumber, generateRandomNumber
    }

}