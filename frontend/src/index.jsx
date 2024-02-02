import React from "react";
import ReactDOM from "react-dom/client";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import "./index.css";
import Login from "./pages/Login/Login";
import AdminDashboard from "./pages/Admin/Dashboard";
import Laboratories from "./pages/Admin/Laboratories";
import LabServices from "./pages/Admin/LabServices";
import Staff from "./pages/Admin/Staff";
import Patients from "./pages/Admin/Patients";
import PatientExam from "./pages/Admin/PatientExam";
import SignUp from "./pages/SignUp/SignUp";
import Admin from "./pages/Admin/Admin";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/admin' element={<Admin />}>
          <Route path='*' element={<AdminDashboard />} />
          <Route path='laboratories' element={<Laboratories />} />
          <Route path='laboratory-services' element={<LabServices />} />
          <Route path='staff' element={<Staff />} />
          <Route path='patients' element={<Patients />} />
          <Route path='patient-examinations' element={<PatientExam />} />
        </Route>
        <Route path='*' element={<Navigate to={"/"} />} />
      </Routes>
    </Router>
  </React.StrictMode>
);