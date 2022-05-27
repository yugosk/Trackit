import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "../contexts/UserContext";
import GlobalStyled from "./GlobalStyled";
import Login from "./LoginScreen";
import Register from "./RegisterScreen";
import DeuCerto from "./Teste";

export default function App() {
    const [token, setToken] = useState(null);

    return (
        <UserContext.Provider value={{token, setToken}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/cadastro" element={<Register />} />
                </Routes>
                <GlobalStyled />
            </BrowserRouter>
        </UserContext.Provider>
    );
}