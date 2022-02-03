import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";



ReactDOM.render(
  <div>
   
  <BrowserRouter>
  <head>
  <title>Create Next App</title>
  <meta name="description" content="Generated by create next app" />
  <link rel="shortcut icon" href="https://spacejelly.dev/favicon-1024x1024.png" type="image/x-icon" />
</head>
    <App />
  </BrowserRouter>
  </div>,
  document.getElementById("root")
);

