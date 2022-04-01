import { Link } from 'react-router-dom';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
import styled from 'styled-components';
import Logo from '../assets/imagens/logo.png';
import UserContext from '../Contexts/userContext'

export default function Login() {
    const {setToken, setImgHeader} = useContext(UserContext)
    const navigate = useNavigate();

    const [infosLogin, setInfosLogin] = useState({emailLogin: "", passwordLogin: ""})
    const [isloading, setIsLoading] = useState(false)

    const objLogin = {
        email: infosLogin.emailLogin,
        password: infosLogin.passwordLogin
    }

    function LoginUser (e) {
        e.preventDefault()
        setIsLoading(true)

        const URLLOGIN =  "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"
        const promise = axios.post(URLLOGIN, objLogin);
        
        promise.then(response => {
            const {data} = response;
            console.log(data)
            setToken(data.token)
            setImgHeader(data.image)
            setIsLoading(false)
            navigate("/hoje");
        })
        promise.catch(err => {
            alert('Usuário inexiste ou usuário e senha incorretos!')
            setIsLoading(false)
        })
    }

    const LoadInputs = inputs () 

    function inputs () {
        return (
            isloading === true ?
            <form onSubmit={LoginUser}>
                <input type="email" placeholder="Email" value={infosLogin.emailLogin} disabled={true} onChange={(e) => setInfosLogin({...infosLogin, emailLogin: e.target.value})} ></input>
                <input type="password" placeholder="Senha" value={infosLogin.passwordLogin} disabled={true} onChange={(e) => setInfosLogin({...infosLogin, passwordLogin: e.target.value})}></input>
                <button type='submit' disabled>
                 <ThreeDots color="#FFF" height={50} width={50} />
                </button>
            </form>
            :
            <form onSubmit={LoginUser}>
                <input type="email" placeholder="Email" value={infosLogin.emailLogin} disabled={false} onChange={(e) => setInfosLogin({...infosLogin, emailLogin: e.target.value})} ></input>
                <input type="password" placeholder="Senha" value={infosLogin.passwordLogin} disabled={false}  onChange={(e) => setInfosLogin({...infosLogin, passwordLogin: e.target.value})}></input>
                <button type='submit'>Entrar</button>
            </form>
        )
    }

    return (
        <ContainerLogin>
            <img src={Logo} alt="logo" />
            {LoadInputs}
            <Link to='/cadastro'> <p>Não tem uma conta? Cadastre-se!</p> </Link>
        </ContainerLogin>
    )
}

const ContainerLogin = styled.div`
    background-color: white;
    margin: auto auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    
    form {
        justify-content: center;
        align-items: center;
        margin-left: 37px;
    }

    img {
        width: 180px;
        height: 179px;
        margin: auto auto;
        margin-top: 68px;
        margin-bottom: 33px;
    }

    input {
        width: 303px;
        height: 45px;
        margin: auto auto;
        margin-bottom: 1px;
        margin-top: 8px;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        padding-left: 11px;
    }

    input::placeholder {
        color: #D4D4D4;
        font-size: 15px;
    }

    button {
        width: 303px;
        height: 45px;
        color: white;
        background-color: #52B6FF;
        margin: auto auto;
        border: none;
        border-radius: 4.7px;
        margin-top: 8px;
        font-size: 15px;
    }

    p {
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
        color: #52B6FF;
        margin-top: 25px;
        margin-bottom: 150px;
    }
`;