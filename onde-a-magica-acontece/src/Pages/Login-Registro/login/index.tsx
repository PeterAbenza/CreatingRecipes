import { Link } from "react-router-dom"
import { Bodyform, MainCenter } from "./styled"
import { FormEventHandler, useContext, useState } from "react"
import axios from "axios"
import baseURL from "../../../baseRoute";
import { LogadoContext } from "../../../services/userLogado/userContext";


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [logadoError, setLogadoError] = useState('');

    const {setUser} = useContext(LogadoContext)

const logar: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    try {
        const response = await axios.post(`${baseURL}/login`, {
            email: email,
            password: password,
        })
        if(response.status === 200){
            alert("Login Feito!")

            setEmail('')
            setPassword('')

            const dadosLogado = [response.data.id, response.data.nome, response.data.credential, response.data.token]
            localStorage.setItem("userLogado", JSON.stringify(dadosLogado))
            
            setUser({
                id: response.data.id,
                nome: response.data.nome,
                credential: response.data.credential,
                token: response.data.token,
            })
        }
    } catch (error) {
        alert("Login error!");
        setLogadoError("password ou email invalido!")
        console.log(error);
    }};

    return <MainCenter>
        <Bodyform onSubmit={logar}>
            <div className="form">
            <h1>logar</h1>
            <p>seja bem vindo de volta!</p>
            <div className="form-infos">
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
            {logadoError}
            </div>
            <button type="submit">Registrar</button>
            </div>
            <Link to="/register" className="contacriada">Não possui conta?</Link>
        </Bodyform>
        </MainCenter>
};