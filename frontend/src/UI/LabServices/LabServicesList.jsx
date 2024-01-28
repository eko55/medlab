import React, { useState } from 'react';
import GetAndModifyLabServices from './GetAndModifyLabServices';
import AddLabService from './AddLabService';

const LabServicesList = () => {
    const [displayGetAndModifyLabServices, setDisplayGetAndModifyLabServices] = useState(true);
    const [displayAddLabServices, setDisplayAddLabServices] = useState(false);

    const toggleDisplayGetAndModifyLabServices = () => {
        setDisplayGetAndModifyLabServices(true);
        setDisplayAddLabServices(false);
    };

    const toggleDisplayAddLabServices = () => {
        setDisplayGetAndModifyLabServices(false);
        setDisplayAddLabServices(true);
    };

    return (
        <div className="main-container">
            <div style={{ marginBottom: '20px' }}>
                <button style={{ marginRight: '10px' }} onClick={toggleDisplayGetAndModifyLabServices}>
                    Get or Edit Services
                </button>
                <button onClick={toggleDisplayAddLabServices}>Add Lab Service</button>
            </div>

            {displayGetAndModifyLabServices && <GetAndModifyLabServices />}

            {displayAddLabServices && <AddLabService />}
        </div>
    );
};

export default LabServicesList;
