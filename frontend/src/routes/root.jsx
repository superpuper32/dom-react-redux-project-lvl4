import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
import { Button, Navbar } from 'react-bootstrap';

import useAuth from '../hooks';

const AuthButton = () => {
  const auth = useAuth();
  const location = useLocation();

  return (
    auth.loggedIn
      ? <Button onClick={auth.logOut}>Log out</Button>
      : <Button as={Link} to="/login" state={{ from: location }}>Log in</Button>
  );
};

const Root = () => (
  <div className="h-100 bg-light">
    <div className="h-100">
      <div className="d-flex flex-column h-100">
        <Navbar className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
          <Container>
            <Navbar.Brand href="/">Super Chat</Navbar.Brand>
          </Container>

          <AuthButton />
        </Navbar>
        <div className="container-fluid h-100">
          <Outlet />
        </div>
      </div>
    </div>
  </div>
);

export default Root;
