import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Collection from "./pages/Collection";

const Router = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/collection" element={<Collection />} />
            <Route exact path="/login" element={<Login />} />
        </Routes>
    );
};

export default Router;
