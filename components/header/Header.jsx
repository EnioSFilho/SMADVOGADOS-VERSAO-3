import React, { useState } from 'react'
import Image from "next/image"
import emailjs from "@emailjs/browser"


import { Container, Navbar, Offcanvas, Nav, NavDropdown, Form, Button, Modal, FloatingLabel, InputGroup, FormLabel } from "react-bootstrap"

function Header() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")


  function sendEmail(event) {
    event.preventDefault()

    const templateParams = {
      from_name: name,
      email: email,
      message: message
    }

    emailjs.send('service_oc1teoh', 'template_clek55i', templateParams, 'xhhFuQY5XGpomRETE')
      .then((response) => {
        console.log("deu certo", response.status, response.text);
        setName("")
        setEmail("")
        setMessage("")
        handleClose()


      }, (error) => {
        console.log("deu ruim", error);
      });

  }

  return (

    <>
      {['md'].map((expand) => (
        <Navbar key={expand} bg="dark" variant='dark' expand={expand} className="no-margin" style={{ backgroundImage: `url('/static/images/bunner2.png')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat',position: 'fixed', width: '100%', top: 0, zIndex: 1 }}>
          <Container fluid>
            <Navbar.Brand href="#"><Image style={{ borderRadius: '10px' }} src="/static/images/logo.png" width="120" height="100" alt='Logo' /></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} style={{ color: 'black' }} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/" style={{ color: 'white' }}>Início</Nav.Link>
                  <Nav.Link href="/areas" style={{ color: 'white' }}>Áreas de Atuação</Nav.Link>
                 
                  <Nav.Link href="/tribunais" style={{ color: 'white' }}>Tribunais</Nav.Link>
                  <Nav.Link href="/localizacao" style={{ color: 'white' }}>Localização</Nav.Link>
                  <Button variant='primary' onClick={handleShow} >Fale Conosco</Button>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>


      ))}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Fale Conosco</Modal.Title>
        </Modal.Header>
        <Container>

          <Form onSubmit={sendEmail}>
            <FormLabel>Nome</FormLabel>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Digite seu nome"
                type="text"
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </InputGroup>

            <FormLabel>Email</FormLabel>
            <InputGroup className="mb-3">
              <Form.Control
               type="text"
               placeholder='Digite seu email'
               required
               onChange={(e) => setEmail(e.target.value)}
               value={email}
              />

            </InputGroup>



            <FormLabel>Mensagem</FormLabel>
            <InputGroup>
              <Form.Control 
              as="textarea"
              className='lg'
              placeholder='Digite sua mensagem'
             required
            onChange={(e) => setMessage(e.target.value)}
            value={message} style={{ height: '150px' }}/>
            
            </InputGroup>

            <div>
              <Button className='mt-5 mb-5' variant='outline-primary' type='submit' >Enviar</Button>
            </div>
          </Form>

         


        </Container>


      </Modal>

    </>
  )
}

export default Header
