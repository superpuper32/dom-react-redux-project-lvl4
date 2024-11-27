import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import useAuth from '../../hooks/useAuth.tsx';

const Main: React.FunctionComponent = (): React.JSX.Element => {
  const auth = useAuth();
  const location = useLocation();

  return (
    auth.loggedIn ? <h1>Main Page</h1> : <Navigate to="/login" state={{ from: location }} />
  );
};

export default Main;
