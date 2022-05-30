import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "../contexts/UserContext";
import GlobalStyled from "./GlobalStyled";

import Login from "./LoginScreen";
import Register from "./RegisterScreen";
import Habits from "./Habits.js";
import Today from "./Today.js";
import History from "./History.js"

export default function App() {
    const [user, setUser] = useState({
        id: "",
        name: "",
        image: "",
        email: "",
        password: "",
        token: ""
    });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/cadastro" element={<Register />} />
                    <Route path="/habitos" element={<Habits />} />
                    <Route path="/hoje" element={<Today />} />
                    <Route path="historico" element={<History />} />
                </Routes>
                <GlobalStyled />
            </BrowserRouter>
        </UserContext.Provider>
    );
}