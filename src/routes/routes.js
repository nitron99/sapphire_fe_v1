import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import ProtectedRoutes from "./ProtectedRoutes";
import Footer from "../components/footer/Footer";
//Pages
import LandingPage from "../views/LandingPage/LandingPage";
import AuthPage from "../views/AuthPage/AuthPage";
import DashboardPage from "../views/DashboardPage/DashboardPage";
import HomePage from "../views/HomePage/HomePage";
import ExplorePage from "../views/ExplorePage/ExplorePage";
import TrendingPage from "../views/TrendingPage/TrendingPage";
import CreatePage from "../views/CreatePage/CreatePage";
import NftPage from "../views/NftPage/NftPage";
import UserPage from "../views/UserPage/UserPage";

const Router = () => {
    const [select, setSelect] = useState();

    const onSelectHandler = (e) => {
        setSelect(e)
    }

    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage props={onSelectHandler}/>}/>
                    <Route path="/auth" element={<ProtectedRoutes><AuthPage props={select}/></ProtectedRoutes>}/>
                    <Route path="/dashboard" element={<ProtectedRoutes><DashboardPage /></ProtectedRoutes>}/>
                    <Route path="/home" element={<ProtectedRoutes><HomePage /></ProtectedRoutes>}/>
                    <Route path="/explore" element={<ProtectedRoutes><ExplorePage /></ProtectedRoutes>}/>
                    <Route path="/trending" element={<ProtectedRoutes><TrendingPage /></ProtectedRoutes>}/>
                    <Route path="/create" element={<ProtectedRoutes><CreatePage /></ProtectedRoutes>}/>
                    <Route path="/collection/:id" element={<ProtectedRoutes><NftPage /></ProtectedRoutes>}/>
                    <Route path="/user/:id" element={<ProtectedRoutes><UserPage /></ProtectedRoutes>}/>
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default Router