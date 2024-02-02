import React, { useEffect } from 'react';
import NavigationBar from '../../UI/NavigationBar/NavigationBar';
import { Outlet, useNavigate } from 'react-router-dom';

const Admin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAdminRole = () => {
      const userDataString = sessionStorage.getItem('userData');
      if (userDataString) {
        const userData = JSON.parse(userDataString);
        return userData.role === 1;
      }
      return false;
    };

    if (!checkAdminRole()) {
      navigate('/');
    }
  }, [navigate]);

  return (
    <>
      <NavigationBar />
      <div style={{ marginTop: '250px' }}>
        <Outlet />
      </div>
    </>
  );
};

export default Admin;