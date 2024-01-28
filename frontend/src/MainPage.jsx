import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainPage.css';

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div className="centered-layout">
      <div className="main-container">
        <h1>Welcome to MedLab</h1>
        <button classname='main-page-button' onClick={() => navigate('/login')}>Login</button>
      </div>
    </div>
  );
};

export default MainPage;
