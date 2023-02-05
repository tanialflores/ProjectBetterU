import { lazy } from "react"
//components
import HomerRoutes from "../../routes/guest/HomeRoutes/HomerRoutes";
// const Login = lazy(() => import("../../pages/guest/Login/Login"));
//skeleton
const Guest = ({AuthFunctions}) => {
    return (
        <>
        <HomerRoutes AuthFunctions={AuthFunctions} />
        </>
    )
}
export default Guest;