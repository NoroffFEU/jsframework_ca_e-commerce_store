import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';

function NavbarLogo() {
  return (
    <Navbar bg="dark" variant="dark" className="justify-content-center align-items-center">
      <Navbar.Brand>E-Commerce Store</Navbar.Brand>
    </Navbar>
  );
}

export default NavbarLogo;
