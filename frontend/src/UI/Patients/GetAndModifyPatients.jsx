import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GetAndModifyPatients = () => {
    const [patients, setPatients] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editedPatient, setEditedPatient] = useState({});
    const [displayAll, setDisplayAll] = useState(true);
    const [displayPersonalNumber, setDisplayPersonalNumber] = useState('');

    const fetchData = async () => {
        try {
            if (displayAll) {
                await getAllPatients();
            } else if (displayPersonalNumber.trim() !== '') {
                await getPatient(displayPersonalNumber);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [displayAll, displayPersonalNumber]);

    const getAllPatients = async () => {
        try {
            // TODO: Replace with backend endpoint for patients
            const response = await axios.get('/api/patients');
            const fetchedPatients = response.data || [];
            setPatients(Array.isArray(fetchedPatients) ? fetchedPatients : []);
        } catch (error) {
            console.error('Error fetching patients:', error);
        }
    };

    const getPatient = async (personalNumber) => {
        try {
            // TODO: Replace with backend endpoint for patients
            const response = await axios.get(`/api/patients/${personalNumber}`);
            const fetchedPatient = response.data;

            // Ensure that fetchedPatient is an object
            if (fetchedPatient && typeof fetchedPatient === 'object') {
                setPatients([fetchedPatient]);
            } else {
                setPatients([]);
            }
        } catch (error) {
            console.error('Error fetching patient:', error);
        }
    };

    const handleEdit = (patient) => {
        setIsEditing(true);
        setEditedPatient({ ...patient });
    };

    const handleSave = async () => {
        try {
            const response = await axios.put(`/api/patients/${editedPatient.id}`, editedPatient);
            setIsEditing(false);
            setEditedPatient({});
            setPatients((prevPatients) =>
                prevPatients.map((patient) => (patient.id === response.data.id ? response.data : patient))
            );
        } catch (error) {
            console.error('Error editing patient:', error);
        }
    };

    const handleRemove = async (patientId) => {
        try {
            await axios.delete(`/api/patients/${patientId}`);
            setPatients((prevPatients) => prevPatients.filter((patient) => patient.id !== patientId));
        } catch (error) {
            console.error('Error removing patient:', error);
        }
    };

    const handleInputChange = (e, field) => {
        setEditedPatient({ ...editedPatient, [field]: e.target.value });
    };

    const handleDisplayAll = () => {
        setDisplayAll(true);
        setDisplayPersonalNumber('');
    };

    const handleDisplayPatient = () => {
        setDisplayAll(false);
    };

    const handlePersonalNumberChange = (e) => {
        setDisplayPersonalNumber(e.target.value);
    };

    return (
        <div>
            <div>
                <button onClick={handleDisplayAll}>Display All Patients</button>
            </div>

            <div style={{ marginTop: '10px' }}>
                <button onClick={handleDisplayPatient}>Display Patient</button>
                <input
                    type="text"
                    placeholder="Enter Personal Number"
                    value={displayPersonalNumber}
                    onChange={handlePersonalNumberChange}
                />
            </div>

            {isEditing ? (
                <>
                    <div>
                        <input
                            type="text"
                            value={editedPatient.personalNumber}
                            onChange={(e) => handleInputChange(e, 'personalNumber')}
                        />
                        <input
                            type="text"
                            value={editedPatient.firstName}
                            onChange={(e) => handleInputChange(e, 'firstName')}
                        />
                        <input
                            type="text"
                            value={editedPatient.lastName}
                            onChange={(e) => handleInputChange(e, 'lastName')}
                        />
                        <input
                            type="text"
                            value={editedPatient.labId}
                            onChange={(e) => handleInputChange(e, 'labId')}
                        />
                        <input
                            type="text"
                            value={editedPatient.userId}
                            onChange={(e) => handleInputChange(e, 'userId')}
                        />
                    </div>
                    <div>
                        <button onClick={handleSave}>Save</button>
                    </div>
                </>
            ) : (
                <>
                    <ul>
                        {patients.map((patient) => (
                            <li key={patient.id}>
                                <div>{patient.personalNumber}</div>
                                <div>{patient.firstName}</div>
                                <div>{patient.lastName}</div>
                                <div>{patient.labId}</div>
                                <div>{patient.userId}</div>
                                <button onClick={() => handleEdit(patient)}>Edit</button>
                                <button onClick={() => handleRemove(patient.id)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};

export default GetAndModifyPatients;
