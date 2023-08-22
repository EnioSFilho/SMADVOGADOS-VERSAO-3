import React from 'react'
import { FaYoutube, FaInstagramSquare, FaLinkedin, FaFacebookSquare, FaWhatsappSquare } from "react-icons/fa";
import  Evento1 from './bntYou';
import Evento2 from './bntInsta';
import Evento3 from './btnLink';
import Evento4 from './btnFace';
import Evento5 from './btnWhats';


function Footer() {


  return (

    <>
    

      <container>
        <div className='footer-icons'>
          <a id="you"onMouseOver={Evento1}   href=""><FaYoutube style={{ fontSize: "50px", color: "#2C7AD8" }} /></a>
          <a id="insta"onMouseOver={Evento2} href=""><FaInstagramSquare style={{ fontSize: "50px", color: "#2C7AD8" }} /></a>
          <a id='link' onMouseOver={Evento3}  href="https://www.linkedin.com/in/maria-let%C3%ADcia-bomfim-marques-782178104/" target='_blank'> <FaLinkedin style={{ fontSize: "50px", color: "#2C7AD8" }} /></a>
          <a  id='face' onMouseOver={Evento4} href="https://www.facebook.com/MariaBomfimAdvogada" target='_blank' ><FaFacebookSquare style={{ fontSize: "50px", color: "#2C7AD8" }} /></a>
          <a id='whats' onMouseOver={Evento5}  href="https://wa.me/5511997238693" target="_blank"> <FaWhatsappSquare style={{ fontSize: "50px", color: "#2C7AD8" }} /></a>
        </div>
        <div className='footer-footer'>
          <h4>ACESSO RÁPIDO</h4>
        </div>
        <container className="footer-acesso-rapido">
          <div>
            <p>ÍNICIO</p>
            <a href=''>Home</a>
          </div>
          <div className='footer-atuacao'>
            <p>ÁREAS DE ATUAÇÃO</p>
            <a href=''>Direito Previdenciário</a>
            <a href=''>Direito Civil</a>
          </div>
         
          <div>
            <p>TRIBUNAIS</p>
          </div>
          <div>
            <p>LOCALIZAÇÃO</p>
          </div>
          <div>
            <p>FALE CONOSCO</p>
          </div>

        </container>
        <container className="footer-final">
          <div className='footer-telefones'>
            <p>Telefones:</p>
            <p>(11) 99723-8693</p>
            <p>(11) 3533-2949</p>
          </div>

          <div className='footer-desenvolvedor'>
            <a href='https://www.smadvogados.adv.br/enio.html' target="_black">© 2023 Desenvolvedor</a>
          </div>

          <div className='footer-email'>
            <p>Email:</p>
          <a href="mailto:leticia@smadvogados.adv.br">leticia@smadvogados.adv.br</a>
          </div>

        </container>


      </container>

    </>
  )
}

export default Footer
