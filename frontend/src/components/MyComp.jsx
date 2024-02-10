import React from 'react';
//import { Link, useHistory } from 'react-router-dom';

const MyComp = () => {
  //const history = useHistory();

  const handleLabLinkClick = async () => {
                               try {
                                   let headers = new Headers();
                                   headers.set('Authorization', 'Basic '  + btoa('admin' + ":" + 'admin'));
                                 const response = await fetch(`http://localhost:8080/taboratories`, {method:'GET',
                                 headers: headers,
                                 //credentials: 'user:passwd'
                                });
                                 const data = await response.json();
                                 setResponseData(data);
                               } catch (error) {
                                 console.error('Error fetching data:', error);
                               }
                             };

  return (
    <div>
      <p>Click the link to call the API:</p>
      <Link to="#" onClick={handleLabLinkClick}>
        Call API
      </Link>
    </div>
  );
};

export default MyComp;