import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";

export default function History() {
    return (
        <>
        <Header />
            <HistoryContainer>
                <HistoryText>
                    <h1>Histórico</h1>
                    <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
                </HistoryText>
            </HistoryContainer> 
        <Footer />
        </>
    );
}

const HistoryContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 98px;
    padding-bottom: 101px;
    justify-content: flex-start;
    background-color: #e5e5e5;
`
const HistoryText = styled.div`
    width: 90%;
    height: 52px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    h1{
        font-family: 'Lexend Deca', sans-serif;
        font-size: 23px;
        font-weight: 400;
        color: #126ba5;
        line-height: 29px;
    }

    p{
        font-family: 'Lexend Deca', sans-serif;
        font-size: 18px;
        font-weight: 400;
        color: #666666;
        line-height: 22px;
        margin-top: 17px;
    }

`