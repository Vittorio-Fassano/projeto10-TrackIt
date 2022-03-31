import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';

export default function Historic() {
    return (
        <>
            <Header />
                <ContainerHistoric>
                <h1>Histórico</h1>
                <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
                </ContainerHistoric>
            <Footer />
        </>
    );
}

const ContainerHistoric = styled.div `
    h1 {
        font-family: 'Lexend Deca';
        margin-top: 98px;
        margin-left: 18px;
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
    }

    h2 {
        font-family: 'Lexend Deca';
        margin-top: 17px;
        margin-left: 18px;
        font-size: 18px;
        line-height: 29px;
        color: #BABABA;
        line-height: 22px;
    }
`;