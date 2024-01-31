
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GetAndModifyLabs from './GetAndModifyLabs';
import AddLab from './AddLab';

const LabList = () => {
    const [labs, setLabs] = useState([]);
    const [displayGetAndModifyLabs, setDisplayGetAndModifyLabs] = useState(true);
    const [displayAddLab, setDisplayAddLab] = useState(false);
    const [responseData, setResponseData] = useState([]);

    useEffect(() => {
        // Fetch all labs
        getAllLabs();
    }, []);

    const getAllLabs = async () => {
        try {
                let headers = new Headers();
                headers.set('Authorization', 'Basic '  + btoa('admin' + ":" + 'admin'));
                const response = await fetch(`http://localhost:8080/laboratories`, {method:'GET',headers: headers,});
                const data = await response.json();
                setResponseData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
    };

    const addLab = async (newLabData) => {
        try {
            const response = await axios.post('/api/labs', newLabData); // Replace with your backend endpoint
            setLabs([...labs, response.data]);
        } catch (error) {
            console.error('Error adding lab:', error);
        }
    };

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
                <button style={{ marginRight: '10px' }} onClick={toggleDisplayGetAndModifyLabs}>Show GetAndModifyLabs</button>
                <button onClick={toggleDisplayAddLab}>Show AddLab</button>
            </div>

            {displayGetAndModifyLabs && (
                <GetAndModifyLabs />
            )}

            {displayAddLab && (
                <AddLab onLabAdded={addLab} />
            )}
        </div>
    );
};

export default LabList;