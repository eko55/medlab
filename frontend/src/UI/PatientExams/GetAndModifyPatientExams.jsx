import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GetAndModifyPatientExams = () => {
    const [patientExams, setPatientExams] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editedPatientExam, setEditedPatientExam] = useState({});
    const [displayAll, setDisplayAll] = useState(true);
    const [displayPatientId, setDisplayPatientId] = useState('');

    const fetchData = async () => {
        try {
            if (displayAll) {
                await getAllPatientExams();
            } else if (displayPatientId.trim() !== '') {
                await getPatientExamsByPatientId(displayPatientId);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [displayAll, displayPatientId]);

    const getAllPatientExams = async () => {
        try {
            // TODO: Replace with backend endpoint for patient exams
            const response = await axios.get('/api/patient-exams');
            const fetchedPatientExams = response.data || [];
            setPatientExams(Array.isArray(fetchedPatientExams) ? fetchedPatientExams : []);
        } catch (error) {
            console.error('Error fetching patient exams:', error);
        }
    };

    const getPatientExamsByPatientId = async (patientId) => {
        try {
            // TODO: Replace with backend endpoint for patient exams by patientId
            const response = await axios.get(`/api/patient-exams/patient/${patientId}`);
            const fetchedPatientExams = response.data || [];
            setPatientExams(Array.isArray(fetchedPatientExams) ? fetchedPatientExams : []);
        } catch (error) {
            console.error('Error fetching patient exams:', error);
        }
    };

    const handleEdit = (patientExam) => {
        setIsEditing(true);
        setEditedPatientExam({ ...patientExam });
    };

    const handleSave = async () => {
        try {
            const response = await axios.put(`/api/patient-exams/${editedPatientExam.id}`, editedPatientExam);
            setIsEditing(false);
            setEditedPatientExam({});
            setPatientExams((prevPatientExams) =>
                prevPatientExams.map((patientExam) => (patientExam.id === response.data.id ? response.data : patientExam))
            );
        } catch (error) {
            console.error('Error editing patient exam:', error);
        }
    };

    const handleRemove = async (patientExamId) => {
        try {
            await axios.delete(`/api/patient-exams/${patientExamId}`);
            setPatientExams((prevPatientExams) =>
                prevPatientExams.filter((patientExam) => patientExam.id !== patientExamId)
            );
        } catch (error) {
            console.error('Error removing patient exam:', error);
        }
    };

    const handleInputChange = (e, field) => {
        setEditedPatientExam({ ...editedPatientExam, [field]: e.target.value });
    };

    const handleDisplayAll = () => {
        setDisplayAll(true);
        setDisplayPatientId('');
    };

    const handleDisplayPatientExams = () => {
        setDisplayAll(false);
    };

    const handlePatientIdChange = (e) => {
        setDisplayPatientId(e.target.value);
    };

    return (
        <div>
            <div>
                <button onClick={handleDisplayAll}>Display All Patient Exams</button>
            </div>

            <div style={{ marginTop: '10px' }}>
                <button onClick={handleDisplayPatientExams}>Display Patient Exams</button>
                <input
                    type="text"
                    placeholder="Enter Patient ID"
                    value={displayPatientId}
                    onChange={handlePatientIdChange}
                />
            </div>

            {isEditing ? (
                <>
                    <div>
                        <input
                            type="date"
                            value={editedPatientExam.date}
                            onChange={(e) => handleInputChange(e, 'date')}
                        />
                        <input
                            type="text"
                            value={editedPatientExam.values}
                            onChange={(e) => handleInputChange(e, 'values')}
                        />
                        <input
                            type="text"
                            value={editedPatientExam.labTestId}
                            onChange={(e) => handleInputChange(e, 'labTestId')}
                        />
                        <input
                            type="text"
                            value={editedPatientExam.patientId}
                            onChange={(e) => handleInputChange(e, 'patientId')}
                        />
                        <input
                            type="text"
                            value={editedPatientExam.labEmployeeId}
                            onChange={(e) => handleInputChange(e, 'labEmployeeId')}
                        />
                    </div>
                    <div>
                        <button onClick={handleSave}>Save</button>
                    </div>
                </>
            ) : (
                <>
                    <ul>
                        {patientExams.map((patientExam) => (
                            <li key={patientExam.id}>
                                <div>{patientExam.date}</div>
                                <div>{patientExam.values}</div>
                                <div>{patientExam.labTestId}</div>
                                <div>{patientExam.patientId}</div>
                                <div>{patientExam.labEmployeeId}</div>
                                <button onClick={() => handleEdit(patientExam)}>Edit</button>
                                <button onClick={() => handleRemove(patientExam.id)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};

export default GetAndModifyPatientExams;
