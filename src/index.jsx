import React from "react";
import { createRoot } from "react-dom/client";
import Home from "./components/Home/Home";
import "./index.css";

// debugging purposes cuz me lazy
import Contacts from "./components/Contacts/Contacts";

const root = createRoot(document.getElementById("root"));
root.render(<Contacts />); // remember to change this
