import React, { useState } from 'react';
import axios from 'axios';

const AddStaff = () => {
    const [newStaff, setNewStaff] = useState({
        personalNumber: '',
        firstName: '',
        lastName: '',
        labId: '',
        userId: '',
    });

    const handleInputChange = (e, field) => {
        setNewStaff({ ...newStaff, [field]: e.target.value });
    };

    const handleAddStaff = async () => {
        try {
            // TODO: Replace with backend endpoint for staff creation
            const response = await axios.post('/api/staff', newStaff);
            console.log('Staff member added successfully:', response.data);

            // Clear the input fields
            setNewStaff({
                personalNumber: '',
                firstName: '',
                lastName: '',
                labId: '',
                userId: '',
            });
        } catch (error) {
            console.error('Error adding staff member:', error);
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
                        value={newStaff.personalNumber}
                        onChange={(e) => handleInputChange(e, 'personalNumber')}
                    />
                </div>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        value={newStaff.firstName}
                        onChange={(e) => handleInputChange(e, 'firstName')}
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        value={newStaff.lastName}
                        onChange={(e) => handleInputChange(e, 'lastName')}
                    />
                </div>
                <div>
                    <label htmlFor="labId">Lab ID:</label>
                    <input
                        type="text"
                        id="labId"
                        value={newStaff.labId}
                        onChange={(e) => handleInputChange(e, 'labId')}
                    />
                </div>

            </div>
            <div style={{ marginTop: '10px' }}>
                <label htmlFor="userId">User ID:</label>
                <input
                    type="text"
                    id="userId"
                    value={newStaff.userId}
                    onChange={(e) => handleInputChange(e, 'userId')}
                />
            </div>
            <button style={{ marginTop: '10px' }} onClick={handleAddStaff}>
                Add Staff Member
            </button>
        </div>
    );
};

export default AddStaff;