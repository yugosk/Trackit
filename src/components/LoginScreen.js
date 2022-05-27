import React, { useState, useContext } from "react";
import logoImg from "../assets/logo-trackit.png"
import styled from "styled-components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { token, setToken } = useContext(UserContext);
    const navigate = useNavigate;

    function submitLogin(event) {
        event.preventDefault();
        const regEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
        if (regEmail.test(email) && password !== "") {
            const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", {
                email: email,
                password: password
            })

            promise.then(response => setToken(response.data.token));
            promise.catch(err => console.log(err));
            
            navigate("/habitos");
} else {
    alert("Preencha os campos corretamente.");
}
    }

    return (
        <LoginContainer>
            <LogoHome />
            <FormsLogin
            submitLogin={submitLogin}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}/>
            <Link to="/cadastro">
                <SwitchLogin>Não tem uma conta? Cadastre-se</SwitchLogin>
            </Link>
        </LoginContainer>
    );
}

export function LogoHome() {
    return (
        <StyledHomeLogo>
            <img src={logoImg} alt="logo Trackit" />
        </StyledHomeLogo>
    );
}

function FormsLogin({ submitLogin, email, setEmail, password, setPassword }) {
    return (
        <FormsHome onSubmit={submitLogin}>
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
            <button>Entrar</button> 
        </FormsHome>
    );
}

const LoginContainer = styled.div`
    height: 100vh;
    width: 100vw;
    padding-top: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledHomeLogo = styled.div`
    width: 48%;
    height: 27%;

    img {
        width: 100%;
        heigth: 100%
    }
`

const FormsHome = styled.form`
    margin-top: 32px;
    height: 160px;
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

    button {
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
export const SwitchLogin = styled.p`
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52b6ff;
    margin-top: 25px;
    margin-bottom: 25px;
`