import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";

export default function Today() {
    const { user } = useContext(UserContext);
    const [todaysHabits, setTodaysHabits] = useState([]);
    const [progress, setProgress] = useState(0);
    const [done, setDone] = useState(0);
    const dayjs = require('dayjs')
    const date = dayjs().locale('pt-br').format('dddd DD/MM')


    useEffect(() => {
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        })
        promise.then(response => {
            setTodaysHabits(response.data)
            let completedHabits = 0;
            for (let i=0; i<todaysHabits.length; i++) {
                if (todaysHabits[i].done === true) {
                    completedHabits++;
                }
            }
            setDone(completedHabits);
            setProgress(done/todaysHabits.length);
        });
    }, [user]);

    return (
        <>
            <Header />
            <TodayContainer>
                <TodayTitle date={date} progress={progress} />
                {
                    todaysHabits.map((habit, index) => <DailyHabit user={user} completed={habit.done} currentSequence={habit.currentSequence}
                    highestSequence={habit.highestSequence} setProgress={setProgress}
                    todaysHabits={todaysHabits} done={done} setDone={setDone}
                    habitName={habit.name} id={habit.id} key={index} />)
                }
            </TodayContainer>
            <Footer />
        </>
    );
}

function TodayTitle({ date, progress }) {
    if (progress === 0) {
        return (
            <Title>
                <h1>{date}</h1>
                <p>Nenhum hábito concluído ainda</p>
            </Title>
        );
    } else {
        return (
            <Title>
                <h1>{date}</h1>
                <p><em>{progress}% dos hábitos concluidos</em></p>
            </Title>
        );
    }
}

function DailyHabit({ user, completed, currentSequence, highestSequence, habitName, id, done, setDone, setProgress, todaysHabits }) {
    const [check, setCheck] = useState(completed)
    function textoSequencias(n) {
        if (n === 1) {
            return "1 dia"
        } else {
            return `${n} dias`
        }
    }

    function checkHabit(n) {
        if (check === true) {
            const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${n}/uncheck`, {}, {
                headers: {
                    "Authorization": `Bearer ${user.token}`
                }
            });
            promise.then(() => {
                setCheck(false);
                setDone(done-1);
                setProgress(done/todaysHabits.length)
            });
        } else {
            const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${n}/check`, {}, {
                headers: {
                    "Authorization": `Bearer ${user.token}`
                }
            });
            promise.then(() => {
                setCheck(true);
                setDone(done+1);
                setProgress(done/todaysHabits.length)
            });
        }
    }


    switch (check) {
        case true:
            if (currentSequence>=highestSequence) {
                return (
                    <HabitCheck>
                        <HabitCheckText sequence="#8fc545">
                            <h2>{habitName}</h2>
                            <p>Sequência atual: <em>{textoSequencias(currentSequence)}</em></p>
                            <p>Seu recorde: <em>{textoSequencias(highestSequence)}</em></p>
                        </HabitCheckText>
                        <HabitCheckButton checked="#8fc545" onClick={() => checkHabit(id)}>
                            <ion-icon name="checkmark-outline"></ion-icon>
                        </HabitCheckButton>
                    </HabitCheck>        
                );
            } else {
                return (
                    <HabitCheck>
                        <HabitCheckText sequence="#666666">
                            <h2>{habitName}</h2>
                            <p>Sequência atual: <em>{textoSequencias(currentSequence)}</em></p>
                            <p>Seu recorde: {textoSequencias(highestSequence)}</p>
                        </HabitCheckText>
                        <HabitCheckButton checked="#8fc545" onClick={() => checkHabit(id)}>
                            <ion-icon name="checkmark-outline"></ion-icon>
                        </HabitCheckButton>
                    </HabitCheck>        
                );
            }
        case false:
            return (
                <HabitCheck>
                    <HabitCheckText sequence="#666666">
                        <h2>{habitName}</h2>
                        <p>Sequência atual: {textoSequencias(currentSequence)}</p>
                        <p>Seu recorde: {textoSequencias(highestSequence)}</p>
                    </HabitCheckText>
                    <HabitCheckButton checked="#ebebeb" onClick={() => checkHabit(id)}>
                        <ion-icon name="checkmark-outline"></ion-icon>
                    </HabitCheckButton>
                </HabitCheck>        

            );
    }
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

    em{
        color: #8cf549;
    }
`

const HabitCheckButton = styled.div`
    width: 69px;
    height: 69px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 36px;
    color: #ffffff;
    background-color: ${props => props.checked};
    border-radius: 5px;
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