import React from 'react'
import Image from "next/image"
import {Container, Navbar, Offcanvas, Nav,NavDropdown,Form,Button} from "react-bootstrap"
 
function Header() {
  return (
    <>
    {[ 'md'].map((expand) => (
      <Navbar key={expand} bg="dark" variant='dark' expand={expand} className="mb-3">
        <Container fluid>
          <Navbar.Brand href="#"><Image style={{borderRadius:'10px'}} src="/static/images/logo.png" width="120" height="100" alt='Logo'/></Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/">Início</Nav.Link>
                <Nav.Link href="/areas">Áreas de Atuação</Nav.Link>               
                <Nav.Link href="#action2">Artigos</Nav.Link>               
                <Nav.Link href="#action2">Legislação</Nav.Link>               
                <Nav.Link href="#action2">Localização</Nav.Link>               
                <Nav.Link href="#action2">Fale Conosco</Nav.Link>               
              </Nav>             
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    ))}
  </>
  )
}

export default Header
