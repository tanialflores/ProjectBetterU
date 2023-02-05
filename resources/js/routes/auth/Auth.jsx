import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// routes

// layout
import AuthLayout from "../../components/Organisms/AuthLayout/AuthLayout"
import ScheduleRoutes from "./Schedule/ScheduleRoutes";
export default function ({ AuthFunctions }) {
    const navigate = useNavigate();
    useEffect(() => {
        if (window.location.pathname == "/") {
            navigate("/dashboard")
        }
        const authLcl = localStorage.getItem("auth");
        if (!authLcl || authLcl == "false") {
            navigate("/");
        }
    }, []);
    return (
        <>
            <AuthLayout AuthFunctions={AuthFunctions}>
                <div/>
            </AuthLayout>
        </>
    );
}









