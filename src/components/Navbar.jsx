import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, FormControl, Button, InputGroup } from 'react-bootstrap';
import React, { useState } from 'react';

const MyNavbar = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Navbar bg="primary" variant="dark" expand="md">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto justify-content-center">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Product</Nav.Link>
          <Nav.Link href="#">Cart</Nav.Link>
          <Nav.Link href="#">Checkout</Nav.Link>
        </Nav>
        <InputGroup className="mx-3">
          <FormControl
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button variant="outline-light" id="button-addon2" onClick={() => handleSearch(searchTerm)}>
            Search
          </Button>
        </InputGroup>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
