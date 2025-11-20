import { Routes, Route } from "react-router-dom"
import Login from "../pages/admin/Login"
import Home from "../pages/admin/Home"
import Seasons from "../pages/admin/Seasons"
import Matches from "../pages/admin/Matches"
import Teams from "../pages/admin/Teams"
import Registrations from "../pages/admin/Registrations"
import Referees from "../pages/admin/Referees"
import Settings from "../pages/admin/Settings"


const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/inicio" element={<Home />} />
            <Route path="/temporadas" element={<Seasons />} />
            <Route path="/partidos" element={<Matches />} />
            <Route path="/equipos" element={<Teams />} />
            <Route path="/inscripciones" element={<Registrations />} />
            <Route path="/arbitros" element={<Referees />} />
            <Route path="/ajustes" element={<Settings />} />
        </Routes>
    )
}

export default AdminRoutes
