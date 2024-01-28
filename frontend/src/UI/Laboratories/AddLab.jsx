import React, { useState } from 'react';
import axios from 'axios';

const AddLab = () => {
    const [newLab, setNewLab] = useState({
        name: '',
        address: '',
        email: '',
        phone: '',
        hospitalName: '',
    });

    const handleInputChange = (e, field) => {
        setNewLab({ ...newLab, [field]: e.target.value });
    };

    const handleAddLab = async () => {
        try {
            // TODO: Replace with backend endpoint
            const response = await axios.post('/api/labs', newLab);
            // You can handle any frontend logic here (e.g., displaying a success message)
            console.log('Lab added successfully:', response.data);

            // Clear the input fields
            setNewLab({
                name: '',
                address: '',
                email: '',
                phone: '',
                hospitalName: '',
            });
        } catch (error) {
            // Handle errors (e.g., display an error message)
            console.error('Error adding lab:', error);
        }
    };

    return (
        <div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: '10px' }}>
                <div>
                    <label htmlFor="name">Lab Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={newLab.name}
                        onChange={(e) => handleInputChange(e, 'name')}
                    />
                </div>
                <div>
                    <label htmlFor="address">Lab Address:</label>
                    <input
                        type="text"
                        id="address"
                        value={newLab.address}
                        onChange={(e) => handleInputChange(e, 'address')}
                    />
                </div>
                <div>
                    <label htmlFor="email">Lab Email:</label>
                    <input
                        type="text"
                        id="email"
                        value={newLab.email}
                        onChange={(e) => handleInputChange(e, 'email')}
                    />
                </div>
                <div>
                    <label htmlFor="phone">Lab Phone:</label>
                    <input
                        type="text"
                        id="phone"
                        value={newLab.phone}
                        onChange={(e) => handleInputChange(e, 'phone')}
                    />
                </div>
            </div>

            <div style={{ marginTop: '10px' }}>
                <label htmlFor="hospitalName">Hospital Name:</label>
                <input
                    type="text"
                    id="hospitalName"
                    value={newLab.hospitalName}
                    onChange={(e) => handleInputChange(e, 'hospitalName')}
                />
            </div>

            <button style={{ marginTop: '10px' }} onClick={handleAddLab}>Add Lab</button>
        </div>
    );
};

export default AddLab;