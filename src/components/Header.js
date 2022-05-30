import React, { useContext } from "react";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";

export default function Header() {
    const { user } = useContext(UserContext);

    return (
        <StyledHeader>
            <h1>Trackit</h1>
            <img src={user.image} />
        </StyledHeader>
    );
}

const StyledHeader = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    position: fixed;
    top: 0;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    z-index: 1;
    padding-left: 18px;
    padding-right: 18px;

    h1{
        font-family: 'Playball', cursive;
        font-size: 40px;
        line-height: 49px;
        text-align: start;
        color: #ffffff;
    }

    img{
        width: 51px;
        heigth: 51px;
        border: none;
        border-radius: 50%;
        object-fit: cover;
        margin-right: 18px;
    }
`