import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBarStyle.css'
import LogoutButton from '../Buttons/LogoutButton';

const NavigationBar = () => {
    //TODO: Handle patient and employee page logic as well
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/admin/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link to="/admin/laboratories">Laboratories</Link>
                </li>
                <li>
                    <Link to="/admin/laboratory-services">Laboratory Services</Link>
                </li>
                <li>
                    <Link to="/admin/staff">Staff</Link>
                </li>
                <li>
                    <Link to="/admin/patients">Patients</Link>
                </li>
                <li>
                    <Link to="/admin/patient-examinations">Patient Examinations</Link>
                </li>
                <li>
                    <LogoutButton />
                </li>
            </ul>
        </nav>
    );
};

export default NavigationBar;