import { Link } from "react-router-dom"
import { Bodyform, MainCenter } from "./styled"
import { useState } from "react"
import axios from "axios"
import baseURL from "../../../baseRoute";

//Components



export default function registro() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirPassword, setConfirPassword] = useState('');
    const [msgPassword, setMsgPassword] = useState('');

    const handleMsgError = () => {
        if(password != confirPassword) {
            setMsgPassword("Senhas diferentes!")
        } else {
            setMsgPassword("")
        }

    }

    const handleRegistro: React.FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        

        if( password === confirPassword) { 
        try {
            const response = await axios.post(`${baseURL}/register`, {
                nome: nome,
                email: email,
                password: password 
            })

            if(response.status === 201){
                alert("userCriado");

                setNome('');
                setEmail('');
                setPassword('');
            }

            console.log(response)
        } catch (error) {
            console.log(error)
            alert("error")
        }
    }}

    return <MainCenter>
        <Bodyform onSubmit={handleRegistro}>
            <div className="form">
            <h1>Criar Conta</h1>
            <p>Preencha tudo!</p>
            <div className="form-infos">
            <input type="name" placeholder="Nome" onChange={(e) => setNome(e.target.value)}></input>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
            <input type="password" placeholder="Confirma Password" onChange={(e) => setConfirPassword(e.target.value)}></input>
            </div>
            <p className="passError">{msgPassword}</p>
            <button type="submit" onClick={handleMsgError} disabled={!confirPassword || password.length < 5 || email == ""}>Registrar</button>
            </div>
            <Link to="/" className="contacriada">Já possui conta?</Link>
        </Bodyform>
        </MainCenter>
}