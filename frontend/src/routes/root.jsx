import React from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';

const Root = () => (
  <div className="h-100 bg-light">
    <div className="h-100">
      <div className="d-flex flex-column h-100">
        <Navbar className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
          <Container>
            <Navbar.Brand href="/">Super Chat</Navbar.Brand>
          </Container>
        </Navbar>
        <div className="container-fluid h-100">
          <Outlet />
        </div>
      </div>
    </div>
  </div>
);

export default Root;
