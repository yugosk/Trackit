import React, { useState, useEffect, useContext } from "react";
import UserContext from "../contexts/UserContext";
import styled from "styled-components";
import axios from "axios";

import Footer from "./Footer";
import Header from "./Header";

export default function Habits() {
    const [habitCreation, setHabitCreation] = useState(false)
    const [habit, setHabit] = useState({
        name:"",
        days: []
    });
    const [habitList, setHabitList] = useState([]);
    const { user, setUser } = useContext(UserContext);

    const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];

    function toggleHabitCreation() {
        if (habitCreation) {
            setHabitCreation(false);
        } else {
            setHabitCreation(true);
        };
    };

    function cancelHabitCreation() {
        setHabit({
            name: "",
            days: []
        });
        setHabitCreation(false);
    }

    function getHabits() {
        // const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", {
        //     headers: {
        //         'Authorization': `Bearer ${user.token}`  
        //     }
        // });
        // promise.then(response => console.log(response));
        console.log("habitos requisitados");
    }

    function submitNewHabit() {
        // if(habit.name !== "" && Habits.days.length > 0) {
        //     const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", habit, {
        //         headers: {
        //             'Authorization': `Bearer ${user.token}`  
        //         }
        //     });
        //     request.then(response => console.log(response.data));
        //     request.catch(err => console.log(err.response.status));
        // }
        console.log("habito adicionado");
    }

    useEffect(() => {
        getHabits();
    }, []);

    return (
        <>
            <Header />
            <HabitContainer>
                <HabitText>
                    <p>Meus hábitos</p>
                    <button onClick={toggleHabitCreation}>+</button>
                </HabitText>
                <MyHabit>
                    <StyledHabit>
                        <h2>Nome do hábito</h2>
                        <ion-icon name="trash-outline"></ion-icon>
                    </StyledHabit>
                    <DayList>
                        {weekdays.map((day, index) => <WeekDay 
                            key={index}
                            day={day}
                            number={index+1}
                            habit={habit}
                            setHabit={setHabit} />)}
                    </DayList>
                </MyHabit>
                <AddHabit display={habitCreation ? "block" : "none"}>
                    <input type="text" placeholder="nome do hábito" value={habit.name} onChange={(e) => setHabit({...habit, name: e.target.value})} />
                    <DayList>
                        {weekdays.map((day, index) => <WeekDay 
                            key={index}
                            day={day}
                            number={index+1}
                            habit={habit}
                            setHabit={setHabit} />)}
                    </DayList>
                    <AddHabitButtons>
                        <p onClick={cancelHabitCreation}> Cancelar </p>
                        <button onClick={submitNewHabit}> Salvar </button>
                    </AddHabitButtons>
                </AddHabit>
            </HabitContainer>
            <Footer />
        </>
    );
}

function WeekDay({ day, number, habit, setHabit }) {
    const array = habit.days;

    function toggleSelected(p) {
        if (array.includes(p)) {
            setHabit({...habit, days: array.filter(id => id !== p)});
        } else {
            array.push(p);
            setHabit({...habit, days: array});
        }
    }

    if (array.includes(number)) {
        return (
            <StyledWeekDay background="#cfcfcf" font="#ffffff" onClick={() => toggleSelected(number)}><p>{day}</p></StyledWeekDay>
        );
    } else {
        return (
            <StyledWeekDay background="#ffffff" font="#dbdbdb" onClick={() => toggleSelected(number)}><p>{day}</p></StyledWeekDay>
        );
    };
}

function DailyHabits() {}


const MyHabit = styled.div`
    width: 90%;
    heigth: 91px;
    flex-direction: column;
    background-color: #ffffff;
    padding: 18px;
    border-radius: 5px;
    margin-bottom: 10px;

    h2{
        font-family: 'Lexend Deca', sans-serif;
        font-size: 20px;
        color: #666666;
        margin-bottom: 8px;  
    }
`

const StyledHabit = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const DayList = styled.div`
    display: flex;
    flex-direction: row;
`

const StyledWeekDay = styled.div`
    width: 30px;
    height: 30px;
    margin: 8px 2px;
    background-color: ${props => props.background};
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    p{
        font-family: 'Lexend Deca', sans-serif;
        font-size: 20px;
        color: ${props => props.font};
    }    
`

const AddHabitButtons = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 18px;
    right: 18px;

    p{
        font-size: 16px;
        color: #52B6FF;
        margin-right: 20px;
        cursor: pointer;
        font-family: 'Lexend Deca', sans-serif;
    
        &:hover {
            text-decoration: underline;
        }      
    }

    button {
        width: 84px;
        height: 35px;
        background-color: #52B6FF;
        border: 0px solid transparent;
        border-radius: 5px;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 16px;
        color: #FFFFFF;
        cursor: pointer; 
    }
`

const AddHabit = styled.form`
    width: 90%;
    height: 180px;
    padding: 18px;
    background: #FFFFFF;
    border-radius: 5px;
    position: relative;
    display: ${props => props.display};
    flex-direction: column;

    input{
        width: 100%;
        height: 45px;
        background: transparent;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        padding: 10px;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 20px;
        color: #666666;

        &::placeholder {
            font-family: 'Lexend Deca', sans-serif;
            font-size: 20px;
            color: #DBDBDB;
        }
    }
`

const HabitContainer = styled.div`
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

const HabitText = styled.div`
    display: flex;
    width: 90%;
    height: 35px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    p{
        font-family: 'Lexend Deca', sans-serif;
        font-size: 23px;
        font-weight: 400;
        color: #126ba5;
    }

    button{
        background-color: #52b6ff;
        font-family: 'Lexend Deca', sans-serif;
        color: #ffffff;
        font-size: 27px;
        line-heigth: 35px;
        font-weight: 400;
        border-radius: 5px;
        width: 40px;
        height: 35px;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: 7px;
    }
`
