import React, { useState } from 'react';
import axios from 'axios';

const AddPatients = () => {
    const [newPatient, setNewPatient] = useState({
        personalNumber: '',
        firstName: '',
        lastName: '',
        labId: '',
        userId: '',
    });

    const handleInputChange = (e, field) => {
        setNewPatient({ ...newPatient, [field]: e.target.value });
    };

    const handleAddPatient = async () => {
        try {
            // TODO: Replace with backend endpoint for patient creation
            const response = await axios.post('/api/patients', newPatient);
            console.log('Patient added successfully:', response.data);

            // Clear the input fields
            setNewPatient({
                personalNumber: '',
                firstName: '',
                lastName: '',
                labId: '',
                userId: '',
            });
        } catch (error) {
            console.error('Error adding patient:', error);
        }
    };

    return (
        <div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: '10px' }}>
                <div>
                    <label htmlFor="personalNumber">Personal Number:</label>
                    <input
                        type="text"
                        id="personalNumber"
                        value={newPatient.personalNumber}
                        onChange={(e) => handleInputChange(e, 'personalNumber')}
                    />
                </div>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        value={newPatient.firstName}
                        onChange={(e) => handleInputChange(e, 'firstName')}
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        value={newPatient.lastName}
                        onChange={(e) => handleInputChange(e, 'lastName')}
                    />
                </div>
                <div>
                    <label htmlFor="labId">Lab ID:</label>
                    <input
                        type="text"
                        id="labId"
                        value={newPatient.labId}
                        onChange={(e) => handleInputChange(e, 'labId')}
                    />
                </div>
            </div>
            <div style={{ marginTop: '10px' }}>
                <label htmlFor="userId">User ID:</label>
                <input
                    type="text"
                    id="userId"
                    value={newPatient.userId}
                    onChange={(e) => handleInputChange(e, 'userId')}
                />
            </div>
            <button style={{ marginTop: '10px' }} onClick={handleAddPatient}>
                Add Patient
            </button>
        </div>
    );
};

export default AddPatients;