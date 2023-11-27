import { useState } from "react"

export const CounterApp = () => {
  
    const [state, setCounter] = useState({
        counter1:10,
        counter2:20,
        counter3:30,
    })
    
    //desestructurar el objeto 
    const {counter1,counter2,counter3} = state

    const onClick = () =>{

        setCounter({
            ...state, //spread del objeto para no tener que instaciar cada contador
            counter1:counter1+1,
            // counter2,
            // counter3
        })
    }
  
    return (
    <>
    <h1>Counter1: {counter1}</h1>
    <h1>Counter2: {counter2}</h1>
    <h1>Counter3: {counter3}</h1>
    <hr />

    <button onClick={onClick}>+1</button>
    </>
  )
}
