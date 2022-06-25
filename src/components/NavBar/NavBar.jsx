import { logDOM } from '@testing-library/react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from "../CartWidget/CartWidget";

import './navBar.css';

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
      <Container className="container-fluid">
        <Navbar.Brand href="#home">
          <img
            src="https://i.ibb.co/3RxqFqR/logo.png"
            height="60"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Amargo</Nav.Link>
            <Nav.Link href="#pricing">Blanco</Nav.Link>
            <Nav.Link href="#pricing">con Leche</Nav.Link>
            <Nav.Link href="#pricing">Rellenos</Nav.Link>
            <NavDropdown title="Marcas" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Milka</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Cadbury
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Kinder</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Lindt</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Aguila</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">Arcor</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7">Nestle</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.8">
                Otras
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className='d-flex justify-content-end'>
            <Nav.Link href="#deets">como comprar</Nav.Link>
            <Nav.Link eventKey={2} href="#memes" className="px-4">
              FAQ
            </Nav.Link>
            <CartWidget />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar