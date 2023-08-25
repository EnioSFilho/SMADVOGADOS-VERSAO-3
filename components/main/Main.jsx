import React from 'react'
import { ConstainerStyled } from './main.styled'
import { ButtonBlue } from '../buttons/Button.styled'


function Main() {
  return (
    <div className='containerMain'>

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
  )
}

export default Main