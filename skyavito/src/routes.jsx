import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Container } from "./components/container/Container"
import { ProtectedRoute } from "./components/ProtectedRoute/ProtedRouter"
import { Main } from "./components/main/Main"
import { Article } from "./components/article/Article"
import { Profile } from "./components/profile/Profile"
import { SellerProfile } from "./components/sellerProfile/SellerProfile"

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={
                    <ProtectedRoute />}>

                    <Route path="/"
                        element={
                            <Main />
                        } />
                    <Route path="/article/:id"
                        element={
                            <Article />
                        } />
                    <Route path="/profile"
                        element={
                            <Profile />
                        } />
                    <Route path="/seller-profile"
                        element={
                            <SellerProfile />
                        } />

                </Route>
            </Routes>
        </BrowserRouter>

    )
}