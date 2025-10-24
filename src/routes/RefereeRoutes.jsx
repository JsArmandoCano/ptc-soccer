import { Routes, Route } from "react-router-dom";
import Login from "../pages/referee/Login";
import Inicio from "../pages/referee/Inicio";

const RefereeRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/inicio" element={<Inicio />} />
        </Routes>
    )
}

export default RefereeRoutes
