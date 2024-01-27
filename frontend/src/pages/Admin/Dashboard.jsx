import React from 'react';
import NavigationBar from '../../UI/NavigationBar/NavigationBar';
import '../../MainPage.css'

const AdminDashboard = () => {
  return (
    <>
      <NavigationBar />
      <div className='main-container'>
        <h2>Welcome to the Admin Dashboard!</h2>
        <p>From here, you can manage laboratories, employees, patients and patient exams.</p>
        <p>Click on one of the options from the upper menu to get started.</p>
      </div>
    </>
  );
};

export default AdminDashboard;