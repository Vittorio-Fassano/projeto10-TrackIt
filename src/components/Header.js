import fotoPerfil from '../assets/imagens/fotoPerfil.png';
import styled from 'styled-components';


export default function Header() {
    return (
        <ContainerHeader>
            <h1>TrackIt</h1>
            <img src={fotoPerfil} alt="fotoPerfil" />
        </ContainerHeader>
    );
}


const ContainerHeader = styled.div `
    width: 100%;
    height: 70px;
    background: #126BA5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    h1 {
        font-family: 'Playball';
        font-style: normal;
        font-weight: 400;
        font-size: 39px;
        line-height: 49px;
        color: #FFFFFF;
        margin-left: 18px;
    }

    img {
        width: 51px;
        height: 51px;
        border-radius: 98px;
        margin-right: 18px;
    }
`;