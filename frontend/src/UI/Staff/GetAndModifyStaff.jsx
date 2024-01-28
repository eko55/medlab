import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GetAndModifyStaff = () => {
    const [staffMembers, setStaffMembers] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editedStaff, setEditedStaff] = useState({});
    const [displayAll, setDisplayAll] = useState(true);
    const [displayPersonalNumber, setDisplayPersonalNumber] = useState('');

    const fetchData = async () => {
        try {
            if (displayAll) {
                await getAllStaffMembers();
            } else if (displayPersonalNumber.trim() !== '') {
                await getStaffMember(displayPersonalNumber);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [displayAll, displayPersonalNumber]);

    const getAllStaffMembers = async () => {
        try {
            // TODO: Replace with backend endpoint for staff members
            const response = await axios.get('/api/staff');
            const fetchedStaffMembers = response.data || [];
            setStaffMembers(Array.isArray(fetchedStaffMembers) ? fetchedStaffMembers : []);
        } catch (error) {
            console.error('Error fetching staff members:', error);
        }
    };

    const getStaffMember = async (personalNumber) => {
        try {
            // TODO: Replace with backend endpoint for staff members
            const response = await axios.get(`/api/staff/${personalNumber}`);
            const fetchedStaffMember = response.data;

            // Ensure that fetchedStaffMember is an object
            if (fetchedStaffMember && typeof fetchedStaffMember === 'object') {
                setStaffMembers([fetchedStaffMember]);
            } else {
                setStaffMembers([]);
            }
        } catch (error) {
            console.error('Error fetching staff member:', error);
        }
    };

    const handleEdit = (staffMember) => {
        setIsEditing(true);
        setEditedStaff({ ...staffMember });
    };

    const handleSave = async () => {
        try {
            const response = await axios.put(`/api/staff/${editedStaff.id}`, editedStaff);
            setIsEditing(false);
            setEditedStaff({});
            setStaffMembers((prevStaffMembers) =>
                prevStaffMembers.map((staffMember) =>
                    staffMember.id === response.data.id ? response.data : staffMember
                )
            );
        } catch (error) {
            console.error('Error editing staff member:', error);
        }
    };

    const handleRemove = async (staffMemberId) => {
        try {
            await axios.delete(`/api/staff/${staffMemberId}`);
            setStaffMembers((prevStaffMembers) =>
                prevStaffMembers.filter((staffMember) => staffMember.id !== staffMemberId)
            );
        } catch (error) {
            console.error('Error removing staff member:', error);
        }
    };

    const handleInputChange = (e, field) => {
        setEditedStaff({ ...editedStaff, [field]: e.target.value });
    };

    const handleDisplayAll = () => {
        setDisplayAll(true);
        setDisplayPersonalNumber('');
    };

    const handleDisplayStaffMember = () => {
        setDisplayAll(false);
    };

    const handlePersonalNumberChange = (e) => {
        setDisplayPersonalNumber(e.target.value);
    };

    return (
        <div>
            <div>
                <button onClick={handleDisplayAll}>Display All Staff Members</button>
            </div>

            <div style={{ marginTop: '10px' }}>
                <button onClick={handleDisplayStaffMember}>Display Staff Member</button>
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
                            value={editedStaff.personalNumber}
                            onChange={(e) => handleInputChange(e, 'personalNumber')}
                        />
                        <input
                            type="text"
                            value={editedStaff.firstName}
                            onChange={(e) => handleInputChange(e, 'firstName')}
                        />
                        <input
                            type="text"
                            value={editedStaff.lastName}
                            onChange={(e) => handleInputChange(e, 'lastName')}
                        />
                        <input
                            type="text"
                            value={editedStaff.labId}
                            onChange={(e) => handleInputChange(e, 'labId')}
                        />
                        <input
                            type="text"
                            value={editedStaff.userId}
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
                        {staffMembers.map((staffMember) => (
                            <li key={staffMember.id}>
                                <div>{staffMember.personalNumber}</div>
                                <div>{staffMember.firstName}</div>
                                <div>{staffMember.lastName}</div>
                                <div>{staffMember.labId}</div>
                                <div>{staffMember.userId}</div>
                                <button onClick={() => handleEdit(staffMember)}>Edit</button>
                                <button onClick={() => handleRemove(staffMember.id)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};

export default GetAndModifyStaff;
