
// essa é uma copia do header, implementar em outra oportunidade

import React, { useState } from 'react'
import Image from "next/image"
import emailjs from "@emailjs/browser"

import { Container, Navbar, Offcanvas, Nav, NavDropdown, Form, Button, Modal, FloatingLabel } from "react-bootstrap"

function Modal() {

  
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
 

  function sendEmail() {
   
   

  const templateParams = {
    from_name: name,
    email: email,
    message: message
  }
 
 
  emailjs.sendForm('service_oc1teoh', 'template_clek55i', templateParams, 'xhhFuQY5XGpomRETE')
      .then((result) => {
          alert(result.text);
      }, (error) => {
          alert(error.text);
      });
 }

  
  return (


    <>
      {['md'].map((expand) => (
        <Navbar key={expand} bg="dark" variant='dark' expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#"><Image style={{ borderRadius: '10px' }} src="/static/images/logo.png" width="120" height="100" alt='Logo' /></Navbar.Brand>
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
                  <Nav.Link href="/artigos">Artigos</Nav.Link>
                  <Nav.Link href="/tribunais">Tribunais</Nav.Link>
                  <Nav.Link href="/localizacao">Localização</Nav.Link>
                  <Button variant='outline-primary' onClick={handleShow}>Fale Conosco</Button>
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
        <Container >

          <form className='form' onSubmit={sendEmail}>

            <div>
              <label className='label'>Nome</label>
            </div>
            <input
              className='input'
              type="text"
              placeholder='Digite seu nome'
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
            />

            <div>
              <label className='label'>Email</label>
            </div>
            <input
              className='input'
              type="text"
              placeholder='Digite seu email'
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
             
            />
            <div>
              <label className='label'>Nome</label>
            </div>
            <textarea 
            className='text-area'
            rows="7"
             cols="61"
             name='mensagem'
             placeholder='Digite sua mensagem'
             required
            onChange={(e) => setMessage(e.target.value)}
            value={message}/>
            
            <div>
               <Button className='mt-5 mb-5' variant='outline-primary' type='submit' >Enviar</Button>
            </div>


          </form>


         
        </Container>


      </Modal>

    </>
  )
}

export default Modal
