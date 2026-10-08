import { createRoot } from "react-dom/client"
import { StrictMode } from "react"
import React from "react"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <div>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    </StrictMode>
)