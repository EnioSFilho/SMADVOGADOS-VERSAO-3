import React, { useEffect, useState } from 'react';
import { ConstainerStyled } from './main.styled';
import { ButtonBlue } from '../buttons/Button.styled';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Main() {

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className='containerMain'>
      {showModal && (
        <div className="modal-overlay">
          <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Faça a Revisão da Vida Toda !</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p><p style={{color: "#2C7AD8", fontWeight: "bold"}}>Reveja sua Aposentadoria:</p> Descubra o serviço de Revisão da Vida Toda e verifique se o valor do seu benefício previdenciário está correto. Consulte nossos especialistas em direito previdenciário hoje mesmo!</p>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Fechar
              </Button>
              <Button href="https://wa.me/5511997238693" target='_blank' variant="primary">Entre em Contato</Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}

      <div className='containerInternalMain'>
        <div className='containerText'>
          <div>          
            <h1>Converse com nossos advogados on-line, para que possamos lhe auxiliar em sua aposentadoria ou benefício previdenciário.</h1>
          </div>
          <div>
            <p>Trabalhamos com profissionais especializados em direito previdenciário,<br></br>
              para que você tenha a melhor assessoria.</p>
          </div>

          <div>
            <ButtonBlue href="https://wa.me/5511997238693" target="_blank">Fale com um profissional</ButtonBlue>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;