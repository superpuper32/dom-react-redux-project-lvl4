import React, { useState, useMemo } from 'react';
import { RouterProvider } from 'react-router-dom';

import AuthContext from './contexts';

import router from './router';

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const logIn = useMemo(() => () => setLoggedIn(true), []);
  const logOut = useMemo(() => () => {
    localStorage.removeItem('userId');
    setLoggedIn(false);
  }, []);

  const valueProperties = useMemo(() => ({
    loggedIn, logIn, logOut,
  }), [loggedIn, logIn, logOut]);

  return (
    <AuthContext.Provider value={valueProperties}>
      {children}
    </AuthContext.Provider>
  );
};

const App = () => (
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);

export default App;
