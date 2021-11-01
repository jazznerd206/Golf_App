import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./styled/global.styled";
import App from "./App.js";

console.log(`App`, App)

ReactDOM.render(
    <Router>
        <GlobalStyle />
        <App />
    </Router>,
    document.getElementById('root')
);