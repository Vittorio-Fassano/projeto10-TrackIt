import styled from 'styled-components';
import Vector from '../assets/imagens/Vector.png';


export default function Footer() {
    return (
        <ContainerFooter>
            <ContainerPalavras>
                <h1>Hábitos</h1>
                <h1>Histórico</h1>
            </ContainerPalavras>
                <ContainerHoje>
                    <h2>Hoje</h2>
                    <ContainerImagem>
                    <img src={Vector} alt="vector" />
                    </ContainerImagem>
                </ContainerHoje>
        </ContainerFooter>
    );
}

const ContainerFooter = styled.div `
    width: 375px;
    height: 101px;
    position: fixed;
    bottom: 0;
`;

const ContainerPalavras = styled.div `
    width: 375px;
    height: 70px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-between;
   
   
    
    h1 {
        color: #52B6FF;
        font-size: 18px;
        margin-right: 31px;
        margin-left: 31px;
        margin-top: 22px;
    }
`;


const ContainerHoje = styled.div `
    width: 91px;
    height: 91px;
    background-color: #52B6FF;
    border-radius: 50px;
    margin-left: 140px;
    display: flex;
    z-index: 1;
    position: absolute;
    

    h2 {
        color: white;
        font-size: 18px;
        margin: auto auto;
    }
 
`;

const ContainerImagem = styled.div `
    display: flex;
    z-index: 2;
    position: absolute;
    margin-left: 16px;
    margin-top: 7px;
`;



