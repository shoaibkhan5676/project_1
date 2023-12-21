import React from "react";
import {createRoot} from "react-dom/client"
import App from "./App"
import "./index.css"
import { BrowserRouter } from "react-router-dom";



let container=document.getElementById("root")
let root=createRoot(container)

root.render(
    <BrowserRouter>
    <App/>
    
    </BrowserRouter>
)

