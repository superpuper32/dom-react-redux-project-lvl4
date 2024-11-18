import { createContext } from 'react';

const AuthContext = createContext({
    logIn: '',
    loggedIn: '',
    logOut: () => {},
});

export default AuthContext;
