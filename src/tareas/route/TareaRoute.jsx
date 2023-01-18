import { Navigate, Route, Routes } from "react-router-dom"
import { Tarea } from "../pages/Tarea"


export const TareaRoute = () => {
    return (
        <div className="container">
            <Routes>
                <Route path="home" element={<Tarea />} />

                <Route path="/" element={<Navigate to="/home" />} />
            </Routes>
        </div>
    )
}
