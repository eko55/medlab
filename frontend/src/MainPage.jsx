import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to MedLab</h1>
      <button onClick={() => navigate('/login')}>Login</button>
    </div>
  );
};

export default MainPage;
