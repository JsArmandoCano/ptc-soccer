import { Routes, Route } from "react-router-dom";
import Home from "../pages/web/Home";

const WebRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    )
}

export default WebRoutes
