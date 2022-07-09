import { logDOM } from '@testing-library/react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from "../CartWidget/CartWidget";
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import './navBar.css';

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
      <Container className="container-fluid">
        <NavLink to='/' >
          <img
            src="https://i.ibb.co/3RxqFqR/logo.png"
            height="60"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to='/categoria/amargo' className={({ isActive }) => isActive ? 'nav-item nav-link active' : 'nav-item nav-link'}>Amargo</NavLink>
            <NavLink to='/categoria/blanco' className={({ isActive }) => isActive ? 'nav-item nav-link active' : 'nav-item nav-link'} >Blanco</NavLink>
            <NavLink to='/categoria/conleche' className={({ isActive }) => isActive ? 'nav-item nav-link active' : 'nav-item nav-link'} >con Leche</NavLink>
            <NavLink to='/categoria/rellenos' className={({ isActive }) => isActive ? 'nav-item nav-link active' : 'nav-item nav-link'}>Rellenos</NavLink>
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

          </Nav>
        </Navbar.Collapse>
        <Link to='/cart' >
          <CartWidget />
        </Link  >

      </Container>
    </Navbar>
  );
}
export default NavBar