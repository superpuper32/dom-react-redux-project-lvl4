import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import useAuth from '../../hooks/useAuth.jsx';

const Main = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (!auth.loggedIn) {
      return navigate('/login');
    }
  }, [auth, navigate]);

  return (
    <h1>Chat Super</h1>
  );
};

export default Main;
