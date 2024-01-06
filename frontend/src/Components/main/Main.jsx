import { Navigate, useLocation } from 'react-router-dom';

import useAuth from '../../hooks/useAuth.jsx';

const PrivateRoute = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();

  return (
    auth.loggedIn ? children : <Navigate to="/login" state={{ from: location }} />
  );
};

const Main = () => (
  <PrivateRoute>
    <h1>Chat Super</h1>
  </PrivateRoute>
);

export default Main;
