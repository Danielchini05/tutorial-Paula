import { useState } from "react"

function Login(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleInputEmail = (event) =>{
        setEmail(event.target.value) 
    }
    
    const handleInputPassword = (event) =>{
        setPassword(event.target.value) 
    }

    console.log(password)
    console.log(email)

    return(
        <>
        <form>
            <label>E-mail:</label>
            <input type="email"
            value={email}
            onChange={handleInputEmail}
            />

            <label>Senha:</label>
            <input type="password"
            value={password}
            onChange={handleInputPassword}
            />
        </form>
        </>
    )
}

export default Login