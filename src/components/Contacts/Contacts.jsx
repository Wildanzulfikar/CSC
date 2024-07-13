import React from "react";
import Navbar from "../Navbar/Navbar";
import ContentContacts from "./ContentContacts";

function Home() {
  return (
    <div className="w-full h-screen bg-[#003366]">
      <Navbar />
      <ContentContacts />
    </div>
  );
}

export default Home;
