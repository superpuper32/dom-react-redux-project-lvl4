import { useState, useMemo } from 'react';

import AuthContext from '../contexts';

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(() => !!localStorage.getItem('userId'));

  const valueProperties = useMemo(() => {
    const logIn = (authData) => {
      localStorage.setItem('userId', JSON.stringify(authData));
      setLoggedIn(true);
    };

    const logOut = () => {
      localStorage.removeItem('userId');
      setLoggedIn(false);
    };

    return { loggedIn, logIn, logOut };
  }, [loggedIn]);

  return (
    <AuthContext.Provider value={valueProperties}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
