import { Navigate, Outlet } from "react-router-dom"
import { Container } from "../container/Container";


export const ProtectedRoute = ({ children, redirectPath = "/login", isAllowed }) => {
    // if (!isAllowed) {
    //     return <Navigate to={redirectPath} replace={true} />
    // }

    return <Container><Outlet /></Container>;
}