const validateUser = async (username, password) => {
  try {
      const headers = new Headers();
      headers.set("Content-Type", "application/json; charset=UTF-8");

      const response = await fetch('http://localhost:8080/api/auth/login', {
          method: 'POST',
          headers,
          body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
          const userData = await response.json();

          // Store userData in sessionStorage
          sessionStorage.setItem('userData', JSON.stringify(userData));

          return response.ok;
      } else {
          return null;
      }
  } catch (error) {
      console.error('Error during authentication:', error);
      return null;
  }
};

export default validateUser;