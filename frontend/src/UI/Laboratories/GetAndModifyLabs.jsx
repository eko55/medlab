import React, { useState, useEffect } from 'react';
import LabDisplay from './LabDisplay';

const GetAndModifyLabs = () => {
    const [labs, setLabs] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editedLab, setEditedLab] = useState({});
    const [displayLabId, setDisplayLabId] = useState('');
    
    const getAllLabs = async () => {
        try {
            let headers = new Headers();
            headers.set("Authorization", "Basic " + btoa("admin" + ":" + "admin"));
            const response = await fetch(`http://localhost:8080/laboratories`, {
                method: "GET",
                headers: headers,
            });
            const data = await response.json();
            setLabs(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const getLab = async (labId) => {
        try {
            let headers = new Headers();
            headers.set("Authorization", "Basic " + btoa("admin" + ":" + "admin"));
            const response = await fetch(`http://localhost:8080/laboratories/${labId}`, {
                method: "GET",
                headers: headers,
            });
            const data = await response.json();
            setLabs(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleEdit = (lab) => {
        setIsEditing(true);
        setEditedLab({ ...lab });
    };

    const handleSave = async () => {
        try {
            let headers = new Headers();
            headers.set("Authorization", "Basic " + btoa("admin" + ":" + "admin"));
            headers.set("Content-Type", "application/json; charset=UTF-8");
            await fetch(`http://localhost:8080/laboratories/${editedLab.id}`, {
                method: "PUT",
                headers: headers,
                body: JSON.stringify(editedLab)
            });
            setIsEditing(false);
            setLabs([]);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleRemove = async (labId) => {
        try {
            let headers = new Headers();
            headers.set("Authorization", "Basic " + btoa("admin" + ":" + "admin"));
            const response = await fetch(`http://localhost:8080/laboratories/${labId}`, {
                method: "DELETE",
                headers: headers,
            });
            const data = await response.json();
            console.log(data);
            setLabs([]);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleInputChange = (e, field) => {
        setEditedLab({ ...editedLab, [field]: e.target.value });
    };

    const handleDisplayAll = async () => {
        setDisplayLabId('');
        await getAllLabs();
    };

    const handleDisplayLab = async () => {
        await getLab(displayLabId);
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
                     <LabDisplay labs={labs} isSmallScreen={window.innerWidth < 768} onEdit={handleEdit} onRemove={handleRemove} />
                </>
            )}
        </div>
    );
};

export default GetAndModifyLabs;
