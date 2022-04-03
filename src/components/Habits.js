import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { ThreeDots } from "react-loader-spinner";
import UserContext from '../Contexts/userContext';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

export default function Habits() {




    




    return (
        <>
            <Header />
                <ContainerHabits>
                    <ContainerText>
                        <h1>Meus hábitos</h1>
                        <button>+</button>
                    </ContainerText>
                    <p> Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                </ContainerHabits>
            <Footer />
        </>
    );
}

const ContainerText = styled.div `
    display: flex;
    justify-content: space-between;

    h1 {
        font-family: 'Lexend Deca';
        margin-top: 28px;
        margin-left: 18px;
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
    }

    button {
        width: 40px;
        height: 40px;
        background: #52B6FF;
        border-radius: 4.63636px;
        font-size: 27px;
        line-height: 34px;
        text-align: center;
        color: #FFFFFF;
        border: none;
        margin-top: 28px;
        margin-right: 18px;
    }
`;

const ContainerHabits = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 70px;

    p {
        font-family: 'Lexend Deca';
        font-size: 18px;
        line-height: 22px;
        margin-top: 30px;
        margin-left: 17px;
        margin-right: 20px;
        color: #666666;
    }
`;

