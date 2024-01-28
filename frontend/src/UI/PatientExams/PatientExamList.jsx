import React, { useState } from 'react';
import GetAndModifyPatientExams from './GetAndModifyPatientExams';
import AddPatientExam from './AddPatientExam';

const PatientExamList = () => {
    const [displayGetAndModifyPatientExams, setDisplayGetAndModifyPatientExams] = useState(true);
    const [displayAddPatientExams, setDisplayAddPatientExams] = useState(false);

    const toggleDisplayGetAndModifyPatientExams = () => {
        setDisplayGetAndModifyPatientExams(true);
        setDisplayAddPatientExams(false);
    };

    const toggleDisplayAddPatientExams = () => {
        setDisplayGetAndModifyPatientExams(false);
        setDisplayAddPatientExams(true);
    };

    return (
        <div className="main-container">
            <div style={{ marginBottom: '20px' }}>
                <button style={{ marginRight: '10px' }} onClick={toggleDisplayGetAndModifyPatientExams}>
                    Get or Edit Patient Exams
                </button>
                <button onClick={toggleDisplayAddPatientExams}>Add Patient Exam</button>
            </div>

            {displayGetAndModifyPatientExams && <GetAndModifyPatientExams />}

            {displayAddPatientExams && <AddPatientExam />}
        </div>
    );
};

export default PatientExamList;
