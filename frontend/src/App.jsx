import { Navigate } from 'react-router-dom';
import './App.css';
import './ValidateUser.js'
import validateUser from './ValidateUser.js';

const App = () => {
  //handle validating user
  const isUserValid = validateUser("", "");
  return isUserValid ? (
    <div>
      <div>
        <div>
        </div>
      </div>
    </div>
  ) : (
    <Navigate to={"/login"} />
  );
};

export default App;
