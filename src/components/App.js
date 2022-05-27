import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyled from "./GlobalStyled";
import Login from "./LoginScreen";
import Register from "./RegisterScreen";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<Register />} />
            </Routes>
            <GlobalStyled />
        </BrowserRouter>
    );
}