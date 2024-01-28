import React, { useState } from 'react';
import GetAndModifyPatients from './GetAndModifyPatients';
import AddPatient from './AddPatient';

const PatientList = () => {
    const [displayGetAndModifyPatients, setDisplayGetAndModifyPatients] = useState(true);
    const [displayAddPatients, setDisplayAddPatients] = useState(false);

    const toggleDisplayGetAndModifyPatients = () => {
        setDisplayGetAndModifyPatients(true);
        setDisplayAddPatients(false);
    };

    const toggleDisplayAddPatients = () => {
        setDisplayGetAndModifyPatients(false);
        setDisplayAddPatients(true);
    };

    return (
        <div className="main-container">
            <div style={{ marginBottom: '20px' }}>
                <button style={{ marginRight: '10px' }} onClick={toggleDisplayGetAndModifyPatients}>
                    Get or Edit Patients
                </button>
                <button onClick={toggleDisplayAddPatients}>Add Patient</button>
            </div>

            {displayGetAndModifyPatients && <GetAndModifyPatients />}

            {displayAddPatients && <AddPatient />}
        </div>
    );
};

export default PatientList;
