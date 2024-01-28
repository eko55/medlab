// Laboratories.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '../../UI/NavigationBar/NavigationBar';
import LabList from '../../UI/Laboratories/LabList';

const Laboratories = () => {
    
    return (
        <>
            <NavigationBar />
            <LabList />
        </>
    );
};

export default Laboratories;
