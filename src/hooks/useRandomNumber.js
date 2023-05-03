import { useState } from "react";
import { getRandomInt } from "../utils/utils";

export function useRandomNumber(){
    const [randomNumber, setRandomNumber] = useState(null)

    function generateRandomNumber(Arr){
        setRandomNumber(getRandomInt(Arr.length))
    }
    return{
        randomNumber, generateRandomNumber
    }

}