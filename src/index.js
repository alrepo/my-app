import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)
