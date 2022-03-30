import { Link } from 'react-router-dom';
import Logo from '../assets/imagens/logo.png';
import styled from 'styled-components';

export default function Login() {
    return (
        <ContainerLogin>
            <img src={Logo} alt="logo" />
            <input type="email" placeholder="Email"></input>
            <input type="password" placeholder="Senha"></input>
            <button>Entrar</button>
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
    }

    input::placeholder {
        color: #D4D4D4;
        padding-left: 11px;
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
        margin-bottom: 198px;
    }
`;

