import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Button, Container, Navbar } from 'react-bootstrap';

import useAuth from '../hooks/useAuth.tsx';

const AuthButton = () => {
  const { logOut, loggedIn } = useAuth();

  return (
    loggedIn
      ? <Button onClick={() => logOut()}>Выйти</Button>
      : null
  );
};

const Root: React.FunctionComponent = () => (
  <div className="h-100 bg-light">
    <div className="h-100">
      <div className="d-flex flex-column h-100">
        <Navbar className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
          <Container>
            <Navbar.Brand>
              <Link to="/" className="navbar-brand">Chat</Link>
            </Navbar.Brand>

            <AuthButton />
          </Container>
        </Navbar>

        <Outlet />
      </div>
    </div>
  </div>
);

export default Root;