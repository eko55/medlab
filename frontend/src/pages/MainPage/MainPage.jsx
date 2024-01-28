import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainPage.css';

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div className="centered-layout">
      <div className="main-container">
        <h1>Welcome to MedLab</h1>
        <div className="button-container">
          <button className="main-page-button" onClick={() => navigate('/login')}>Login</button>
          <span style={{ margin: '0 10px' }} />
          <button className="main-page-button" onClick={() => navigate('/signup')}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
