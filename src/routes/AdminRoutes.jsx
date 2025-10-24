import { Routes, Route } from "react-router-dom";
import Login from "../pages/admin/Login";
import Inicio from "../pages/admin/Inicio";

const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/inicio" element={<Inicio />} />
        </Routes>
    )
}

export default AdminRoutes
