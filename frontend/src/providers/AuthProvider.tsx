import { useState, useMemo, ReactNode } from 'react';

import AuthContext, { TLoginResponse } from '../contexts';

interface IAuthProps {
  children?: ReactNode;
}

const AuthProvider = ({ children }: IAuthProps) => {
  const [loggedIn, setLoggedIn] = useState(() => !!localStorage.getItem('userId'));

  const valueProperties = useMemo(() => {
    const logIn = (authData: TLoginResponse) => {
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