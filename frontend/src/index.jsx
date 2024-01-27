import React from "react";
import ReactDOM from "react-dom/client";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import Login from "./pages/Login/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />}>
        </Route>
        <Route path='login' element={<Login />} />
        <Route path='*' element={<Navigate to={"login"} />} />
      </Routes>
    </Router>
  </React.StrictMode>
);