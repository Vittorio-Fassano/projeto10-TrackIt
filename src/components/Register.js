import { Link } from 'react-router-dom';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import Logo from '../assets/imagens/logo.png';
import styled from 'styled-components';

export default function Register() {
    const [infosRegister, setInfoRegister] = useState({email: "", password: "", name: "", url: ""});
    const obj = {
        email: infosRegister.email,
        name: infosRegister.name,
        image: infosRegister.url,
        password: infosRegister.password
    }

    const [isloading, setIsLoading] = useState(false)
    const navigate = useNavigate();

    function RegisterNewUser(e) {
        e.preventDefault()
        setIsLoading(true)

        const POSTURLREGISTER = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
        
        const promise = axios.post(POSTURLREGISTER, obj);

        promise.then(response => {
            const {data} = response;
            console.log(data)
            setIsLoading(false)
            navigate("/")
        })
        promise.catch(err => {
            setIsLoading(false)
            alert("Erro ao registrar um novo usuário!")
        })
    }

    return (
        isloading === false ?
        <ContainerRegister>
            <img src={Logo} alt="logo" />
            <form onSubmit={RegisterNewUser}> 
                <input type="email" placeholder="Email" value={infosRegister.email} disabled={false} onChange={(e) => setInfoRegister({...infosRegister, email: e.target.value})}></input>
                <input type="password" placeholder="Senha" value={infosRegister.password} disabled={false} onChange={(e) => setInfoRegister({...infosRegister, password: e.target.value})}></input>
                <input type="text" placeholder="Nome" value={infosRegister.name} disabled={false} onChange={(e) => setInfoRegister({...infosRegister, name: e.target.value})}></input>
                <input type="text" placeholder="Foto" value={infosRegister.url} disabled={false} onChange={(e) => setInfoRegister({...infosRegister, url: e.target.value})}></input>
                <button type='submit'>Cadastrar</button>
            </form>
            <Link to='/'> <p>Já tem uma conta? Faça login!</p> </Link>
        </ContainerRegister>
        :
        <ContainerRegister>
            <img src={Logo} alt="logo" />
            <form onSubmit={RegisterNewUser}> 
                <input type="email" placeholder="Email" value={infosRegister.email} disabled={true} onChange={(e) => setInfoRegister({...infosRegister, email: e.target.value})}></input>
                <input type="password" placeholder="Senha" value={infosRegister.password} disabled={true} onChange={(e) => setInfoRegister({...infosRegister, password: e.target.value})}></input>
                <input type="text" placeholder="Nome" value={infosRegister.name} disabled={true} onChange={(e) => setInfoRegister({...infosRegister, name: e.target.value})}></input>
                <input type="text" placeholder="Foto" value={infosRegister.url} disabled={true} onChange={(e) => setInfoRegister({...infosRegister, url: e.target.value})}></input>
                <button type='submit' disabled>
                    <ThreeDots color="#FFF" height={50} width={50} />
                </button>
            </form>
            <Link to='/'> <p>Já tem uma conta? Faça login!</p> </Link>
        </ContainerRegister>
    )
}

const ContainerRegister = styled.div`
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
        margin-top: 6px;
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
        margin-top: 6px;
        font-size: 15px;
    }

    p {
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
        color: #52B6FF;
        margin-top: 25px;
        margin-bottom: 80px;
    }
`;