import React, { useState } from 'react';
import axios from 'axios';

const AddLabService = () => {
    const [newLabService, setNewLabService] = useState({
        name: '',
        description: '',
        price: '',
        referenceRange: '',
        units: '',
        labId: '',
    });

    const handleInputChange = (e, field) => {
        setNewLabService({ ...newLabService, [field]: e.target.value });
    };

    const handleAddLabService = async () => {
        try {
            // TODO: Replace with backend endpoint for LabService creation
            const response = await axios.post('/api/LabServices', newLabService);
            console.log('LabService added successfully:', response.data);

            // Clear the input fields
            setNewLabService({
                name: '',
                description: '',
                price: '',
                referenceRange: '',
                units: '',
                labId: '',
            });
        } catch (error) {
            console.error('Error adding LabService:', error);
        }
    };

    return (
        <div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: '10px' }}>
                <div>
                    <label htmlFor="name">Test Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={newLabService.name}
                        onChange={(e) => handleInputChange(e, 'name')}
                    />
                </div>
                <div>
                    <label htmlFor="description">Test Description:</label>
                    <input
                        type="text"
                        id="description"
                        value={newLabService.description}
                        onChange={(e) => handleInputChange(e, 'description')}
                    />
                </div>
                <div>
                    <label htmlFor="price">Test Price:</label>
                    <input
                        type="text"
                        id="price"
                        value={newLabService.price}
                        onChange={(e) => handleInputChange(e, 'price')}
                    />
                </div>
                <div>
                    <label htmlFor="referenceRange">Reference Range:</label>
                    <input
                        type="text"
                        id="referenceRange"
                        value={newLabService.referenceRange}
                        onChange={(e) => handleInputChange(e, 'referenceRange')}
                    />
                </div>

                <div>
                    <label htmlFor="units">Test Units:</label>
                    <input
                        type="text"
                        id="units"
                        value={newLabService.units}
                        onChange={(e) => handleInputChange(e, 'units')}
                    />
                </div>

                <div>
                    <label htmlFor="labId">Lab ID:</label>
                    <input
                        type="text"
                        id="labId"
                        value={newLabService.labId}
                        onChange={(e) => handleInputChange(e, 'labId')}
                    />
                </div>
            </div>





            <button style={{ marginTop: '10px' }} onClick={handleAddLabService}>
                Add Lab Test
            </button>
        </div>
    );
};

export default AddLabService;