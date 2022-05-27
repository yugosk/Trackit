import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { LogoHome, SwitchLogin } from "./LoginScreen";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [photo, setPhoto] = useState("");
    const navigate = useNavigate();

    function submitRegister(event) {
        event.preventDefault();
        const regEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
        const regURL = /(https?:\/\/.*\.(?:png|jpg|jpeg))/i;
        if (!email.match(regEmail) || password === "" || !photo.match(regURL)) {
            alert("Preencha os campos corretamente.");
        } else {
            const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", {
                email: email,
                name: name,
                image: photo,
                password: password
            });

            promise.then(response => console.log(response));
            promise.catch(err => console.log(err));

            navigate("/");
        }
    }

    return(
        <RegisterContainer>
            <LogoHome />
            <FormsRegister 
            submitRegister={submitRegister}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            name={name}
            setName={setName}
            photo={photo}
            setPhoto={setPhoto}/>
            <Link to="/">
                <SwitchLogin>Já tem uma conta? Faça login!</SwitchLogin>
            </Link>
        </RegisterContainer>
    );
}

function FormsRegister({ submitRegister, email, setEmail, password, setPassword, name, setName, photo, setPhoto }) {
    return (
        <StyledRegister onSubmit={submitRegister}>
            <input
                type="text"
                id="email"
                value={email}
                placeholder="email"
                required
                onChange={(e) => setEmail(e.target.value)}  
            />
            <input
                type="text"
                id="password"
                value={password}
                placeholder="senha"
                required
                onChange={(e) => setPassword(e.target.value)}  
            />
            <input
                type="text"
                id="name"
                value={name}
                placeholder="nome"
                required
                onChange={(e) => setName(e.target.value)}  
            />
            <input
                type="text"
                id="photo"
                value={photo}
                placeholder="foto"
                required
                onChange={(e) => setPhoto(e.target.value)}  
            />                                
            <button>Cadastrar</button> 
        </StyledRegister>
    );
}

const RegisterContainer = styled.div`
    height: 100vh;
    width: 100vw;
    padding-top: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledRegister = styled.form`
    margin-top: 45px;
    height: 270px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;

    input{
        font-family: 'Lexend Deca', sans-serif;
        width: 81%;
        line-height: 45px;
        background-color: #FFFFFF;
        border: 1px solid #d5d5d5;
        border-radius: 5px;
        font-size: 20px;
        font-weight: 400;
        color: #666666;
        padding-left: 11px;
        display: flex;
        align-items: flex-start;
        justify-content: center;
    }

    input::placeholder{
        color: #dbdbdb;
        opacity: 1;
    }

    button{
        font-family: 'Lexend Deca', sans-serif;
        height: 45px;
        width: 81%;
        background-color: #52b6ff;
        border-radius: 5px;
        border: none;
        font-size: 21px;
        font-weight: 400;
        text-align: center;
        color: #ffffff;
    }
`