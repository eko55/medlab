import React from 'react';
import NavigationBar from '../../UI/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';

const Admin = () => {
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