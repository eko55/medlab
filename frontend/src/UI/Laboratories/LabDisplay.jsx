import React from 'react';

const LabTable = ({ labs, onEdit, onRemove }) => (
    <table className="lab-table">
        <thead style={{ backgroundColor: "#f2f2f2" }}>
            <tr>
                <th className="tableHeader">Id</th>
                <th className="tableHeader">Name</th>
                <th className="tableHeader">Address</th>
                <th className="tableHeader">Email</th>
                <th className="tableHeader">Phone</th>
                <th className="tableHeader">Hospital Name</th>
                <th className="tableHeader">Actions</th>
            </tr>
        </thead>
        <tbody>
            {labs.map((item, index) => (
                <tr key={index} className="tableRow">
                    <td className="tableCell">{item.id}</td>
                    <td className="tableCell">{item.name}</td>
                    <td className="tableCell">{item.address}</td>
                    <td className="tableCell">{item.email}</td>
                    <td className="tableCell">{item.phone}</td>
                    <td className="tableCell">{item.hospitalName}</td>
                    <td className="tableCell">
                        <button onClick={() => onEdit(item)}>Edit</button>
                        <button onClick={() => onRemove(item.id)}>Remove</button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
);

const LabList = ({ labs, onEdit, onRemove }) => (
    <div className="lab-list">
        {labs.map((lab, index) => (
            <div key={index} className="lab-list-item">
                <div><strong>ID:</strong> {lab.id}</div>
                <div><strong>Name:</strong> {lab.name}</div>
                <div><strong>Address:</strong> {lab.address}</div>
                <div><strong>Email:</strong> {lab.email}</div>
                <div><strong>Phone:</strong> {lab.phone}</div>
                <div><strong>Hospital Name:</strong> {lab.hospitalName}</div>
                <div>
                    <button onClick={() => onEdit(lab)}>Edit</button>
                    <button onClick={() => onRemove(lab.id)}>Remove</button>
                </div>
            </div>
        ))}
    </div>
);

const LabDisplay = ({ labs, isSmallScreen, onEdit, onRemove }) => (
    <>
        {labs.length > 0 && (
            isSmallScreen ? <LabList labs={labs} onEdit={onEdit} onRemove={onRemove} /> : <LabTable labs={labs} onEdit={onEdit} onRemove={onRemove} />
        )}
    </>
);

export default LabDisplay;
