import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GetAndModifyLabs = () => {
    const [labs, setLabs] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editedLab, setEditedLab] = useState({});
    const [displayAll, setDisplayAll] = useState(true); // New state for displaying all labs
    const [displayLabId, setDisplayLabId] = useState(''); // New state for displaying a specific lab by ID

    const fetchData = async () => {
        try {
            if (displayAll) {
                await getAllLabs();
            } else if (displayLabId.trim() !== '') {
                await getLab(displayLabId);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [displayAll, displayLabId]);


    const getAllLabs = async () => {
        try {
            // TODO: Replace with backend endpoint
            const response = await axios.get('/api/labs');
            const fetchedLabs = response.data || [];
            setLabs(Array.isArray(fetchedLabs) ? fetchedLabs : []);
        } catch (error) {
            console.error('Error fetching labs:', error);
        }
    };

    const getLab = async (labId) => {
        try {
            // TODO: Replace with backend endpoint
            const response = await axios.get(`/api/labs/${labId}`);
            const fetchedLab = response.data;

            // Ensure that fetchedLab is an object
            if (fetchedLab && typeof fetchedLab === 'object') {
                setLabs([fetchedLab]);
            } else {
                setLabs([]);
            }
        } catch (error) {
            console.error('Error fetching lab:', error);
        }
    };

    const handleEdit = (lab) => {
        setIsEditing(true);
        setEditedLab({ ...lab });
    };

    const handleSave = async () => {
        try {
            // TODO: Replace with backend endpoint
            const response = await axios.put(`/api/labs/${editedLab.id}`, editedLab);
            setIsEditing(false);
            setEditedLab({});
            setLabs((prevLabs) =>
                prevLabs.map((lab) => (lab.id === response.data.id ? response.data : lab))
            );
        } catch (error) {
            console.error('Error editing lab:', error);
        }
    };

    const handleRemove = async (labId) => {
        try {
            // TODO: Replace with backend endpoint
            await axios.delete(`/api/labs/${labId}`);
            setLabs((prevLabs) => prevLabs.filter((lab) => lab.id !== labId));
        } catch (error) {
            console.error('Error removing lab:', error);
        }
    };

    const handleInputChange = (e, field) => {
        setEditedLab({ ...editedLab, [field]: e.target.value });
    };

    const handleDisplayAll = () => {
        setDisplayAll(true);
        setDisplayLabId('');
    };

    const handleDisplayLab = () => {
        setDisplayAll(false);
    };

    const handleLabIdChange = (e) => {
        setDisplayLabId(e.target.value);
    };

    return (
        <div>
            <div style={{ marginBottom: '10px' }}>
                <button onClick={handleDisplayAll}>Display All Labs</button>
            </div>

            <div>
                <button onClick={handleDisplayLab}>Display Lab</button>
                <input
                    type="text"
                    placeholder="Enter Lab ID"
                    value={displayLabId}
                    onChange={handleLabIdChange}
                />
            </div>
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={editedLab.name}
                        onChange={(e) => handleInputChange(e, 'name')}
                    />
                    <input
                        type="text"
                        value={editedLab.address}
                        onChange={(e) => handleInputChange(e, 'address')}
                    />
                    <input
                        type="text"
                        value={editedLab.email}
                        onChange={(e) => handleInputChange(e, 'email')}
                    />
                    <input
                        type="text"
                        value={editedLab.phone}
                        onChange={(e) => handleInputChange(e, 'phone')}
                    />
                    <input
                        type="text"
                        value={editedLab.hospitalName}
                        onChange={(e) => handleInputChange(e, 'hospitalName')}
                    />
                    <button onClick={handleSave}>Save</button>
                </>
            ) : (
                <>
                    <ul>
                        {labs.map((lab) => (
                            <li key={lab.id}>
                                <div>{lab.name}</div>
                                <div>{lab.address}</div>
                                <div>{lab.email}</div>
                                <div>{lab.phone}</div>
                                <div>{lab.hospitalName}</div>
                                <button onClick={() => handleEdit(lab)}>Edit</button>
                                <button onClick={() => handleRemove(lab.id)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};

export default GetAndModifyLabs;
