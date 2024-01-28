import React from "react";
import ReactDOM from "react-dom/client";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import "./index.css";
import Login from "./pages/Login/Login";
import AdminDashboard from "./pages/Admin/Dashboard";
import Laboratories from "./pages/Admin/Laboratories";
import LabServices from "./pages/Admin/LabServices";
import Staff from "./pages/Admin/Staff";
import Patients from "./pages/Admin/Patients";
import PatientExam from "./pages/Admin/PatientExam";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/admin/dashboard' element={<AdminDashboard />}/>
        <Route path='/admin/laboratories' element={<Laboratories />}/>
        <Route path='/admin/laboratory-services' element={<LabServices />}/>
        <Route path='/admin/staff' element={<Staff />}/>
        <Route path='/admin/patients' element={<Patients />}/>
        <Route path='/admin/patient-examinations' element={<PatientExam />}/>
        <Route path='*' element={<Navigate to={"/"} />} />
      </Routes>
    </Router>
  </React.StrictMode>
);