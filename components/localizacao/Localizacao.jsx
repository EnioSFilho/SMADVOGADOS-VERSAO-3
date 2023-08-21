import React from 'react'
import { Button } from 'react-bootstrap'
import { ConstainerStyled } from '../main/main.styled'

function Localizacao() {
  return (
    <>
      <div className='adjust'>
        <h1 style={{ textAlign: "center" }}>Localização</h1>
        <container className="container-localizacao">
          <div className='localizacao-mapa'>
            <iframe style={{ width: "80%", height: "200%" }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14636.291995518492!2d-46.62351021158759!3d-23.493880014324038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef6396643a5bf%3A0x11df006ea2de62e8!2sMaria%20Let%C3%ADcia%20B.%20Marques%20Advocacia!5e0!3m2!1spt-BR!2sbr!4v1668595192794!5m2!1spt-BR!2sbr" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div>
            <h4>Av. Leôncio de Magalhães, 1100 - Jardim São Paulo - São Paulo-SP - CEP: 02042-011</h4>
          </div>
          <div>
            <h5>Ao lado do metrô Jardim São Paulo</h5>
          </div>
          <div className='localizacao-button'>
            <Button variant='outline-primary' href='https://g.page/r/Cehi3qJuAN8REAI/review' target='_blanck'>Avalie Nosso Escritório</Button>
          </div>
        </container>
      </div>
    </>
  )
}

export default Localizacao