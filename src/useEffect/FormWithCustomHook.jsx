import { useEffect} from "react"
import { useForm } from "../hooks/useForm"

export const FormWithCustomHook = () => {

    const {username, email, password, onInputChange,onResetForm} = useForm({
        username:'',
        email:'',
        password: ''
    })
  
    return (
    <>
    <h1>Form With Custom Hook</h1>
    <hr />
    
    <input type="text" 
    className="form-cotrol"
    placeholder="Username"
    name="username"
    style={{display:'block'}}
    value={username}
    onChange={onInputChange}/>
    
    <input type="email" 
    className="form-cotrol mt-2"
    placeholder="name@email.com"
    name="email"
    value={email}
    onChange={onInputChange}/>

    <input type="password" 
    className="form-cotrol mt-2"
    placeholder="Password"
    name="password"
    value={password}
    style={{display:'block'}}
    onChange={onInputChange}/>

    <button onClick={onResetForm} className="btn btn-primary mt-2">Borrar</button>
    </>
  )
}
