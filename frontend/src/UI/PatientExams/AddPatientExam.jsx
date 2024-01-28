import React, { useState } from 'react';
import axios from 'axios';

const AddPatientExam = () => {
    const [newPatientExam, setNewPatientExam] = useState({
        date: '',
        values: '',
        labTestId: '',
        patientId: '',
        labEmployeeId: '',
    });

    const handleInputChange = (e, field) => {
        setNewPatientExam({ ...newPatientExam, [field]: e.target.value });
    };

    const handleAddPatientExam = async () => {
        try {
            // TODO: Replace with backend endpoint for patient exam creation
            const response = await axios.post('/api/patient-exams', newPatientExam);
            console.log('Patient exam added successfully:', response.data);

            // Clear the input fields
            setNewPatientExam({
                date: '',
                values: '',
                labTestId: '',
                patientId: '',
                labEmployeeId: '',
            });
        } catch (error) {
            console.error('Error adding patient exam:', error);
        }
    };

    return (
        <div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: '10px' }}>
                <div>
                    <label htmlFor="date">Date:</label>
                    <input
                        type="date"
                        id="date"
                        value={newPatientExam.date}
                        onChange={(e) => handleInputChange(e, 'date')}
                    />
                </div>
                <div>
                    <label htmlFor="values">Values:</label>
                    <input
                        type="text"
                        id="values"
                        value={newPatientExam.values}
                        onChange={(e) => handleInputChange(e, 'values')}
                    />
                </div>
                <div>
                    <label htmlFor="labTestId">Lab Test ID:</label>
                    <input
                        type="text"
                        id="labTestId"
                        value={newPatientExam.labTestId}
                        onChange={(e) => handleInputChange(e, 'labTestId')}
                    />
                </div>
                <div>
                    <label htmlFor="patientId">Patient ID:</label>
                    <input
                        type="text"
                        id="patientId"
                        value={newPatientExam.patientId}
                        onChange={(e) => handleInputChange(e, 'patientId')}
                    />
                </div>
                <div>
                    <label htmlFor="labEmployeeId">Lab Employee ID:</label>
                    <input
                        type="text"
                        id="labEmployeeId"
                        value={newPatientExam.labEmployeeId}
                        onChange={(e) => handleInputChange(e, 'labEmployeeId')}
                    />
                </div>
            </div>
            <button style={{ marginTop: '10px' }} onClick={handleAddPatientExam}>
                Add Patient Exam
            </button>
        </div>
    );
};

export default AddPatientExam;
