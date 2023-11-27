import { useState } from "react"


export const useCounter = (inititalValue=10) => {
  
    const [counter, setCounter] = useState(inititalValue)
  
    const increment = () =>{
        setCounter(counter+1)
    }
  
    const decrement = () =>{
        setCounter(counter-1)
    }
  
    const reset = () =>{
        setCounter(inititalValue)
    }

    return {

        counter,
        increment,
        decrement,
        reset
        
    }
}
