import React, { useState } from 'react';

const AddLab = () => {
    const [responseData, setResponseData] = useState([]);
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
            let headers = new Headers();
            headers.set("Authorization", "Basic " + btoa("admin" + ":" + "admin"));
            headers.set("Content-Type", "application/json; charset=UTF-8");
            const response = await fetch(`http://localhost:8080/laboratories`, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(newLab)
            });
            const data = await response.json();
            setResponseData(data);
            console.log('Lab added successfully:', response);
        } catch (error) {
            console.error("Error fetching data:", error);
        }

        // Clear the input fields
        setNewLab({
            name: '',
            address: '',
            email: '',
            phone: '',
            hospitalName: '',
        });
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
            {responseData && responseData.length > 0 && (
                <table className="centerTable">
                    <thead style={{ backgroundColor: "#f2f2f2" }}>
                        <tr>
                            <th className="tableHeader">Id</th>
                            <th className="tableHeader">Name</th>
                            <th className="tableHeader">Address</th>
                            <th className="tableHeader">Email</th>
                            <th className="tableHeader">Phone</th>
                            <th className="tableHeader">Hospital Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="tableRow">
                            <td className="tableCell">{responseData.id}</td>
                            <td className="tableCell">{responseData.name}</td>
                            <td className="tableCell">{responseData.address}</td>
                            <td className="tableCell">{responseData.email}</td>
                            <td className="tableCell">{responseData.phone}</td>
                            <td className="tableCell">{responseData.hospitalName}</td>
                        </tr>
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default AddLab;