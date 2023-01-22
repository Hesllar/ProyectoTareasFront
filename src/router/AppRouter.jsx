import { Navigate, Route, Routes } from "react-router-dom"
import { Login } from "../login/pages/Login"
import { TareaRoute } from "../tareas/route/TareaRoute"
import { Navbar } from "../Ui/Navbar"
import { Footer } from "../Ui/Footer"

export const AppRouter = () => {
    return (
        <>
            
                <Routes>

                    <Route path="login" element={<Login />} />

                    <Route path="/*" element={<TareaRoute />} />

                    <Route path="/" element={<Navigate to="/" />} />

                </Routes>
            <Footer />
        </>
    )
}
