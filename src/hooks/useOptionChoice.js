import { useState } from "react"

export function useOptionChoice() {
   
    const [optionChoice, setOptionChoice] = useState();

    return {
        optionChoice, setOptionChoice
    }

}

