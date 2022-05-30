import React, { useState, useContext } from "react";
import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";

export default function Today() {
    return (
        <>
            <Header />
            <TodayContainer>
                <Title>
                    <h1>Segunda, 17/05</h1>
                    <p>Nenhum hábito concluído ainda</p>
                </Title>
                <DailyHabit completed={false} />
            </TodayContainer>
            <Footer />
        </>
    );
}

function DailyHabit() {
    return (
        <HabitCheck>
            <HabitCheckText>
                <h2>Nome do hábito</h2>
                <p>Sequência: x dias</p>
                <p>Seu recorde: y dias</p>
            </HabitCheckText>
            <HabitCheckButton>
                <ion-icon name="checkmark-outline"></ion-icon>
            </HabitCheckButton>
        </HabitCheck>
    );
}

const HabitCheck = styled.div`
    width: 90%;
    height: 94px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #ffffff;
    border-radius: 5px;
    padding-right: 15px;
    padding-left: 15px;
    margin-bottom: 10px;
`

const HabitCheckText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    h2{
        font-family: 'Lexend Deca', sans-serif;
        font-size: 20px;
        font-weigth: 400;
        line-height: 25px;
        color: #666666;
        margin-bottom: 7px;
    }

    p{
        font-family: 'Lexend Deca', sans-serif;
        font-size: 13px;
        font-weigth: 400;
        line-height: 16px;
        color: #666666;
    }
`

const HabitCheckButton = styled.div`
    width: 69px;
    height: 69px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ebebeb;
    border-radius: 5px;
    font-size: 36px;
    color: #ffffff;
`

const TodayContainer = styled.div`
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

const Title = styled.div`
    width: 90%;
    height: 52px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-bottom: 28px;

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
        color: #bababa;
        line-height: 22px;
    }
`