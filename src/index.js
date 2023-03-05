import React from "react";
import ReactDOM from "react-dom/client";
import Firstapp from "./Firstapp";

const mainbox = ReactDOM.createRoot(document.getElementById("main"));

mainbox.render(
        <React.StrictMode>
            <Firstapp/>
        </React.StrictMode>
    )