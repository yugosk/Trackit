import styled from 'styled-components';
import React, { useContext } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { useNavigate } from 'react-router-dom';
import "react-circular-progressbar/dist/styles.css";
import ProgressContext from '../contexts/ProgressContext';

export default function Footer() {
    const { progress } = useContext(ProgressContext);
    const navigate = useNavigate();
    return (
        <StyledFooter>
            <h1 onClick={() => navigate("/habitos")}> Hábitos </h1>            
            <Progress>
                <p onClick={() => navigate("/hoje")}> Hoje </p>
                <CircularProgressbar value={progress*100} />
            </Progress>
            <h1 onClick={() => navigate("/historico")}> Histórico </h1>
        </StyledFooter>
    )
}

const StyledFooter = styled.div`
    padding: 0 35px;
    width: 100%;
    height: 70px;
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom: 0;
    z-index: 2;
    
    h1 {
        font-size: 18px;
        color: #52B6FF;
        font-weight: 400;
        font-family: 'Lexend Deca', sans-serif;
    }
`;

const Progress = styled.div`
    width: 90px;
    height: 90px;
    background-color: #52B6FF;
    border-radius: 50%;
    position: absolute; 
    bottom: 10px;
    left: 50%;
    transform: translate(-50%, 0);

    p {
        font-size: 18px;
        font-weight: 400;
        color: #FFFFFF;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: 'Lexend Deca', sans-serif;
    }
`