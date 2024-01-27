import axios from 'axios';

const validateUser = async (username, password) => {
  try {
    const response = await axios.post('http://localhost:8080/api/auth/login', { username, password });
    return response.status === 200;
  } catch (error) {
    return false;
  }
};

export default validateUser;