import React from "react";
import Navbar from "../Navbar/Navbar";
import ContentHome from "./ContentHome";

function Home () {
    return (
        <div className="w-full h-screen bg-[#003366]">
            <Navbar />
            <ContentHome />
        </div>
    )   
}

export default Home;
