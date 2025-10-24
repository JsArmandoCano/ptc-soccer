import { Routes, Route } from "react-router-dom";
import WebRoutes from "./WebRoutes";
import AdminRoutes from "./AdminRoutes";
import UserRoutes from "./UserRoutes";
import RefereeRoutes from "./RefereeRoutes";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/*" element={<WebRoutes />} />
            <Route path="/admin/*" element={<AdminRoutes />} />
            <Route path="/user/*" element={<UserRoutes />} />
            <Route path="/referee/*" element={<RefereeRoutes />} />
        </Routes>
    )
}

export default AppRoutes
