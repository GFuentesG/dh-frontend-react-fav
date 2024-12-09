import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Favorites from "../pages/favorites/Favorites";
import Contact from "../pages/contact/Contact";
import About from "../pages/about/About";
import Login from "../pages/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import Character from "../pages/character/Character";
import ProtectedRoute from "../components/ProtectedRoute";
import { useState } from "react";

const Router = ({ isLoggedIn, onLogin }) => {


    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login onLogin={onLogin} />} />
            <Route path="/dashboard" element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Dashboard />
                </ProtectedRoute>
            } />
            <Route path="/character/:id" element={<Character />} />
            <Route path="*" element={<h1>Not Found - 404</h1>} />
        </Routes>
    )
}

export default Router;