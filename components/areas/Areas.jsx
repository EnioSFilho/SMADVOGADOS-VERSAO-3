import React from 'react'

import { ButtonBlue, ButtonBlueArea } from '../buttons/Button.styled'


function MainAreas() {
  return (
    <div className='containerMainAreas2'>

      <div className='containerInternalMain'>

        <div className='containerText'>
          <div>
            <h1>Converse com nossos advogados on-line, para que possamos lhe auxiliar em sua causa civil. Atuamos em todos os âmbitos da área.</h1>
          </div>
          <div>
            <p>Trabalhamos com profissionais especializados em direito civil,<br></br>
              para que você tenha a melhor assessoria.</p>
          </div>

          <div>
            <ButtonBlueArea href="https://wa.me/5511997238693" target="_blank">Fale com um profissional</ButtonBlueArea>
            
          </div>
        </div>



      </div>


    </div>
  )
}

export default MainAreas