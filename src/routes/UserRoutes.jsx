import { Routes, Route } from "react-router-dom";
import Login from "../pages/users/Login";
import Inicio from "../pages/users/Inicio";

const UserRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/inicio" element={<Inicio />} />
        </Routes>
    )
}

export default UserRoutes
