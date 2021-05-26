import React                from "react";
import Link                 from "next/link";
import {Nav, Navbar}        from "react-bootstrap";



export default function Header () {
  return (
    <div>
      <Navbar variant="light" expand="lg" className='navContainer' >

        <Navbar.Brand>
          <Link href="/">
            <img src='/DisolLogo.png' id='LogoHeader' alt="Logo"/>
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="Navbar-items"/>
        <Navbar.Collapse id="Navbar-items">
          <Nav className="mr-auto">
            <Link href="/">
              <a className='iconItemHeader' >
                <Nav.Item> Inicio </Nav.Item>
              </a>
            </Link>
            <Link href="/nosotros">
              <a className='iconItemHeader' >
                <Nav.Item> Nosotros </Nav.Item>
              </a>
            </Link>
            <Link href="/disolapp">
              <a className='iconItemHeader' >
                <Nav.Item> Disol App </Nav.Item>
              </a>
            </Link>
            <Link href="/nuestrostutores">
              <a className='iconItemHeader' >
                <Nav.Item> Nuestros Tutores </Nav.Item>
              </a>
            </Link>
            <Link href="/#clasesgrupales">
              <a className='iconItemHeader' >
                <Nav.Item> Clases grupales </Nav.Item>
              </a>
            </Link>
            <Link href="/contacto">
              <a className='iconItemHeader' >
                <Nav.Item> Contacto </Nav.Item>
              </a>
            </Link>
          </Nav>
        </Navbar.Collapse>

      </Navbar>
    </div>
  )
};