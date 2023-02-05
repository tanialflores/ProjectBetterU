import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
//components
const Login = lazy(() => import("../../../pages/guest/Login/Login"))
const RecoverAccount = lazy(() => import("../../../pages/guest/Login/RecoverAccount/RecoverAccount"))
const RecoveryCode = lazy(() => import("../../../pages/guest/Login/RecoveryCode/RecoveryCode"))
//skeleton

export default function ({AuthFunctions}) {
    return (
        <Routes>
            <div/>
        </Routes>
    )
}