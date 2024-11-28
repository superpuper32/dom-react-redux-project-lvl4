import React, { useState, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import axios from 'axios';

import useAuth from '../../hooks/useAuth.tsx';
import routes from '../../utils/routes.ts';
import getAuthHeader from '../../utils/utils.ts';

interface IProps {
  children: React.JSX.Element;
}

const PrivateMain: React.FC<IProps> = ({ children }): React.JSX.Element => {
  const auth = useAuth();
  const location = useLocation();

  return (
    auth.loggedIn ? children : <Navigate to="/login" state={{ from: location }} />
  );
};

const Main: React.FC = (): React.JSX.Element => {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    const fetchCahnnels = async () => {
      const response = await axios.get(routes.channels(), {
        headers: getAuthHeader()
      });

      setChannels(response.data);
    }

    fetchCahnnels();
  },[]);


  return (
    <PrivateMain>
      <>
        <h1>Main Page</h1>
        {channels && channels.map(({ id, name }) => (
          <li key={id}>{name}</li> 
        ))}
      </>
    </PrivateMain>
  )
}

export default Main;
