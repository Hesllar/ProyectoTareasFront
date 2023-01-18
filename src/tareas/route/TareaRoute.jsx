import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../Ui/Navbar"
import { Tarea } from "../pages/Tarea"


export const TareaRoute = () => {
    return (
        < >
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="home" element={<Tarea />} />

                    <Route path="/" element={<Navigate to="/home" />} />
                </Routes>
            </div>
        </>
    )
}
