import { createContext } from 'react';

export type LoginResponse = {
    token: string;
    username: string;
}

export type AuthContextType = {
    loggedIn: boolean,
    logIn: (authData: LoginResponse) => void,
    logOut: () => void,
};

const AuthContext = createContext<AuthContextType>({
    logIn: () => {},
    loggedIn: false,
    logOut: () => {},
});

export default AuthContext;
