import { createContext } from 'react';

const AuthContext = createContext({
  loggedIn: false,
  logOut: () => {},
  logIn: () => {},
});

export default AuthContext;
