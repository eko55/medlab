import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import validateUser from '../../ValidateUser';
import '../../UI/Buttons/MainPageButton.css';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('0'); // Default role to '0'
    const navigate = useNavigate();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleRoleChange = (e) => {
        setRole(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await createUserOnBackend();
            console.log("Response:", response);
            if (response.status === 201) {
                const userData = {
                    username,
                    role,
                };
                sessionStorage.setItem('userData', JSON.stringify(userData));
                navigate('/admin');
            } else {
                console.error('User registration failed');
            }
        } catch (error) {
            console.error('Error during user registration:', error);
        }
    };

    const createUserOnBackend = async () => {
        try {
            const response = await fetch('http://localhost:8080/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password,
                    role,
                }),
            });

            return response;
        } catch (error) {
            throw new Error('Error creating user on backend:', error);
        }
    };

    const handleReturnToMainPage = () => {
        navigate('/');
    };

    return (
        <>
            <div className='main-container'>
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Username:
                        <input type="text" value={username} onChange={handleUsernameChange} required />
                    </label>
                    <br />
                    <label>
                        Password:
                        <input type="password" value={password} onChange={handlePasswordChange} required />
                    </label>
                    <br />
                    <label>
                        Role:
                        <select value={role} onChange={handleRoleChange}>
                            <option value="0">Patient</option>
                            <option value="1">Employee</option>
                        </select>
                    </label>
                    <br />
                    <button type="submit">Sign Up</button>
                </form>
            </div>
            <div className='main-page-button-container'>
                <button onClick={handleReturnToMainPage}>Return to Main Page</button>
            </div>
        </>
    );
};

export default SignUp;
