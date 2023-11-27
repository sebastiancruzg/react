import { useEffect, useState } from "react"
import { Message } from "./Message"

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username:'sebas',
        email:'sebas@email.com'
    })
    
    const {username,email} = formState

    const onInputChange = ({target}) =>{

        const {name,value} = target

        setFormState({
            ...formState,
            [name]:value
        })

    }

    useEffect(() => {
      
        // console.log('useEffect called');
    
    }, [])

    useEffect(() => {
      
        // console.log('formStateChange');
    
    }, [formState])

    useEffect(() => {
      
        // console.log('enmail Change');
    
    }, [email])
    
  
    return (
    <>
    <h1>Simple Form</h1>
    <hr />
    
    <input type="text" 
    className="form-cotrol"
    placeholder="Username"
    name="username"
    style={{display:'block'}}
    onChange={onInputChange}/>
    
    <input type="email" 
    className="form-cotrol mt-2"
    placeholder="name@email.com"
    name="email"
    onChange={onInputChange}/>

    { 
        (username === 'sebas2') && <Message></Message>
    }

    </>
  )
}
