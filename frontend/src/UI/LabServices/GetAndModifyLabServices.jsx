import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GetAndModifyLabServices = () => {
    const [LabServices, setLabServices] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editedLabService, setEditedLabService] = useState({});
    const [displayAll, setDisplayAll] = useState(true);
    const [displayServiceName, setDisplayServiceName] = useState('');

    const fetchData = async () => {
        try {
            if (displayAll) {
                await getAllLabServices();
            } else if (displayServiceName.trim() !== '') {
                await getLabService(displayServiceName);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [displayAll, displayServiceName]);

    const getAllLabServices = async () => {
        try {
            // TODO: Replace with backend endpoint for LabServices
            const response = await axios.get('/api/LabServices');
            const fetchedLabServices = response.data || [];
            setLabServices(Array.isArray(fetchedLabServices) ? fetchedLabServices : []);
        } catch (error) {
            console.error('Error fetching lab tests:', error);
        }
    };

    const getLabService = async (ServiceName) => {
        try {
            // TODO: Replace with backend endpoint for LabServices
            const response = await axios.get(`/api/LabServices/${ServiceName}`);
            const fetchedLabService = response.data;

            // Ensure that fetchedLabService is an object
            if (fetchedLabService && typeof fetchedLabService === 'object') {
                setLabServices([fetchedLabService]);
            } else {
                setLabServices([]);
            }
        } catch (error) {
            console.error('Error fetching lab test:', error);
        }
    };

    const handleEdit = (LabService) => {
        setIsEditing(true);
        setEditedLabService({ ...LabService });
    };

    const handleSave = async () => {
        try {
            const response = await axios.put(`/api/LabServices/${editedLabService.id}`, editedLabService);
            setIsEditing(false);
            setEditedLabService({});
            setLabServices((prevLabServices) =>
                prevLabServices.map((LabService) => (LabService.id === response.data.id ? response.data : LabService))
            );
        } catch (error) {
            console.error('Error editing lab test:', error);
        }
    };

    const handleRemove = async (LabServiceId) => {
        try {
            await axios.delete(`/api/LabServices/${LabServiceId}`);
            setLabServices((prevLabServices) => prevLabServices.filter((LabService) => LabService.id !== LabServiceId));
        } catch (error) {
            console.error('Error removing lab test:', error);
        }
    };

    const handleInputChange = (e, field) => {
        setEditedLabService({ ...editedLabService, [field]: e.target.value });
    };

    const handleDisplayAll = () => {
        setDisplayAll(true);
        setDisplayServiceName('');
    };

    const handleDisplayLabService = () => {
        setDisplayAll(false);
    };

    const handleServiceNameChange = (e) => {
        setDisplayServiceName(e.target.value);
    };

    return (
        <div>
            <div>
                <button onClick={handleDisplayAll}>Display All Lab Services</button>
            </div>

            <div style={{ marginTop: '10px' }}>
                <button onClick={handleDisplayLabService}>Display Lab Services</button>
                <input
                    type="text"
                    placeholder="Enter Service Name"
                    value={displayServiceName}
                    onChange={handleServiceNameChange}
                />
            </div>

            {isEditing ? (
                <>
                    <div>
                        <input
                            type="text"
                            value={editedLabService.name}
                            onChange={(e) => handleInputChange(e, 'name')}
                        />
                        <input
                            type="text"
                            value={editedLabService.description}
                            onChange={(e) => handleInputChange(e, 'description')}
                        />
                        <input
                            type="text"
                            value={editedLabService.price}
                            onChange={(e) => handleInputChange(e, 'price')}
                        />
                        <input
                            type="text"
                            value={editedLabService.referenceRange}
                            onChange={(e) => handleInputChange(e, 'referenceRange')}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            value={editedLabService.units}
                            onChange={(e) => handleInputChange(e, 'units')}
                        />
                        <input
                            type="text"
                            value={editedLabService.labId}
                            onChange={(e) => handleInputChange(e, 'labId')}
                        />
                        <button onClick={handleSave}>Save</button>
                    </div>
                </>
            ) : (
                <>
                    <ul>
                        {LabServices.map((LabService) => (
                            <li key={LabService.id}>
                                <div>{LabService.name}</div>
                                <div>{LabService.description}</div>
                                <div>{LabService.price}</div>
                                <div>{LabService.referenceRange}</div>
                                <div>{LabService.units}</div>
                                <div>{LabService.labId}</div>
                                <button onClick={() => handleEdit(LabService)}>Edit</button>
                                <button onClick={() => handleRemove(LabService.id)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};

export default GetAndModifyLabServices;