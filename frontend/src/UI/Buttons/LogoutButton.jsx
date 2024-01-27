import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LogoutButton.css'

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    //TODO: Handle logout logic
    navigate('/login');
  };

  return (
    <button className='logout-button' onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;