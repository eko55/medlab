import React, { useState } from 'react';
import GetAndModifyLabs from '../../UI/Laboratories/GetAndModifyLabs';
import AddLab from '../../UI/Laboratories/AddLab';

const Laboratories = () => {
    const [displayGetAndModifyLabs, setDisplayGetAndModifyLabs] = useState(true);
    const [displayAddLab, setDisplayAddLab] = useState(false);

    const toggleDisplayGetAndModifyLabs = () => {
        setDisplayGetAndModifyLabs(true);
        setDisplayAddLab(false);
    };

    const toggleDisplayAddLab = () => {
        setDisplayGetAndModifyLabs(false);
        setDisplayAddLab(true);
    };

    return (
        <div className='main-container'>
            <div  style={{ marginBottom: '20px' }}>
                <button style={{ marginRight: '10px' }} onClick={toggleDisplayGetAndModifyLabs}>Show, Modify or Remove Labs</button>
                <button onClick={toggleDisplayAddLab}>Show AddLab</button>
            </div>

            {displayGetAndModifyLabs && (
                <GetAndModifyLabs />
            )}

            {displayAddLab && (
                <AddLab />
            )}
        </div>
    );
};

export default Laboratories;
