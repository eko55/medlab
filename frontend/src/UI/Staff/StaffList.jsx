import React, { useState } from 'react';
import GetAndModifyStaff from './GetAndModifyStaff';
import AddStaff from './AddStaff';

const StaffList = () => {
    const [displayGetAndModifyStaff, setDisplayGetAndModifyStaff] = useState(true);
    const [displayAddStaff, setDisplayAddStaff] = useState(false);

    const toggleDisplayGetAndModifyStaff = () => {
        setDisplayGetAndModifyStaff(true);
        setDisplayAddStaff(false);
    };

    const toggleDisplayAddStaff = () => {
        setDisplayGetAndModifyStaff(false);
        setDisplayAddStaff(true);
    };

    return (
        <div className="main-container">
            <div style={{ marginBottom: '20px' }}>
                <button style={{ marginRight: '10px' }} onClick={toggleDisplayGetAndModifyStaff}>
                    Get or Edit Staff
                </button>
                <button onClick={toggleDisplayAddStaff}>Add Staff</button>
            </div>

            {displayGetAndModifyStaff && <GetAndModifyStaff />}

            {displayAddStaff && <AddStaff />}
        </div>
    );
};

export default StaffList;
