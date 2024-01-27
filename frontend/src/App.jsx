import { Navigate } from 'react-router-dom';
import './App.css';
import './ValidateUser.js'
import validateUser from './ValidateUser.js';
import NavigationBar from './UI/NavigationBar.jsx';

const App = () => {
  //handle validating user
  const isUserValid = validateUser("", "");
  return isUserValid ? (<>
    <NavigationBar />
    <h1>Hello</h1>
  </>
  ) : (
    <Navigate to={"/login"} />
  );
};

export default App;
