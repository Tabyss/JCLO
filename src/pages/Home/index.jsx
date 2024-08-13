import React from "react";
import "./home.scss";
import Product from "./components/Product";
import Sample from "./components/Sample";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";

function Home() {
    return (
        <>
            <Navbar />
            <Landing />
            <Product />
            <Sample />
        </>
    );
}

export default Home;
