import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import validateUser from '../../ValidateUser';
import '../../UI/Buttons/MainPageButton.css'

const Login = () => {
  const [username, setUsername] = useState(''); // Change state variable name to 'username'
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await validateUser(username, password);

      if (response) {
        navigate('/admin/dashboard');
      } else {
        console.error('Authentication failed');
      }
    } catch (error) {
      console.error('Error during authentication:', error);
    }
  };

  const handleReturnToMainPage = () => {
    navigate('/');
  };

  return (<>
    <div className='main-container'>
      <h2>Login</h2>
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
        <button type="submit">Login</button>
      </form>
    </div>
    <div className='main-page-button-container'>
      <button onClick={handleReturnToMainPage}>Return to Main Page</button>
    </div>
  </>
  );
};

export default Login;