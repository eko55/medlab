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
            <input
                type="text"
                placeholder="Lab Name"
                value={newLab.name}
                onChange={(e) => handleInputChange(e, 'name')}
            />
            <input
                type="text"
                placeholder="Lab Address"
                value={newLab.address}
                onChange={(e) => handleInputChange(e, 'address')}
            />
            <input
                type="text"
                placeholder="Lab Email"
                value={newLab.email}
                onChange={(e) => handleInputChange(e, 'email')}
            />
            <input
                type="text"
                placeholder="Lab Phone"
                value={newLab.phone}
                onChange={(e) => handleInputChange(e, 'phone')}
            />
            <input
                type="text"
                placeholder="Hospital Name"
                value={newLab.hospitalName}
                onChange={(e) => handleInputChange(e, 'hospitalName')}
            />
            <button onClick={handleAddLab}>Add Lab</button>
        </div>
    );
};

export default AddLab;