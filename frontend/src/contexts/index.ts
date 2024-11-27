import { createContext } from 'react';

export type TLoginResponse = {
    token: string;
    username: string;
}

export type TAuthContextType = {
    loggedIn: boolean,
    logIn: (authData: TLoginResponse) => void,
    logOut: () => void,
};

const AuthContext = createContext<TAuthContextType>({
    logIn: () => {},
    loggedIn: false,
    logOut: () => {},
});

export default AuthContext;
