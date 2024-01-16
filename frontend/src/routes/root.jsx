import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import { Button, Navbar } from 'react-bootstrap';

import useAuth from '../hooks/useAuth';

const AuthButton = () => {
  const auth = useAuth();

  return (
    auth.loggedIn
      ? <Button onClick={auth.logOut}>Выйти</Button>
      : null
  );
};

const Root = () => (
  <div className="h-100 bg-light">
    <div className="h-100">
      <div className="d-flex flex-column h-100">
        <Navbar className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
          <Container>
            <Navbar.Brand>
              <Link to="/" className="navbar-brand">Super Chat</Link>
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
