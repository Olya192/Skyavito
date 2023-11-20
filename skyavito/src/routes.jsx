import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Container } from "./components/container/Container"
import { ProtectedRoute } from "./components/ProtectedRoute/ProtedRouter"
import { Main } from "./components/main/Main"
import { Article } from "./components/article/Article"
import { Profile } from "./components/profile/Profile"
import { SellerProfile } from "./components/sellerProfile/SellerProfile"
import { useEffect, useState } from "react"

export const AppRoutes = () => {

    const checkAuth = () => {
          const token = localStorage.getItem("token");
          return token;
    };

    useEffect(() => {
        checkAuth();
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route element={
                    <ProtectedRoute isAllowed={checkAuth} />}>

                    <Route path="/profile"
                        element={
                            <Profile />
                        } />
                </Route>

                <Route path="/"
                    element={
                        <Main />
                    } />
                <Route path="/article/:id"
                    element={
                        <Article />
                    } />
                <Route path="/seller-profile"
                    element={
                        <SellerProfile />
                    } />


            </Routes>
        </BrowserRouter>

    )
}