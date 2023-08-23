import React from 'react'


function Main2() {
  return (
    <>
      <div className='containerMain2'>
        <div className='containerCardsMain2'>
          <div className='textMain2'>
            <h3>Faça sua consulta previdenciária</h3>
            <br />
            <p>Se você pretende solicitar um benefício previdenciário, faça o contato conosco. Nossos profissionais irão prestar todos os esclarecimentos necessários, caso queira obter algum benefício, aposentadoria ou mesmo que o pedido já feito tenha sido negado. Seja você um trabalhador da iniciativa privada ou um servidor público, podemos esclarecer todas as suas dúvidas e daremos a orientação necessaria.
            </p>
          </div>

          <div>
            <img src="/static/images/consulta.jpg" alt="computador" id='photo' />
          </div>

        </div>

        <div className='containerCardsMain2'>


          <div>
            <img src="/static/images/planejamento.jpg" alt="computador" id='photo' />
          </div>
          <div className='textMain2'>
            <h3>Cuidamos de seu planejamento previdenciário</h3>
            <br />
            <p>Faremos o estudo de seu caso, para orientar você na obtenção da eficiência em sua aposentadoria: Analisaremos seus documentos, e iremos traçar todas as possibilidades para que o valor de seu benefício seja o correto e justo. Vamos lhe orientar com o planejamento das contribuições, qual a forma que haja mais vantagem e o momento preciso de fazer o pedido.

            </p>
          </div>

        </div>

        <div className='containerCardsMain2'>
          <div className='textMain2'>
            <h3>Cuidamos de seus benefícios previdenciários</h3>
            <br />
            <p><b style={{color: "#2C7AD8"}}>Aposentadoria para trabalhador da iniciativa privada</b> – Nossa equipe é especialista na legislação previdenciária. Mesmo com todas as mudanças que ocorrem e já ocorreram, cuidamos do seu caso com toda atenção e cuidado.</p>
            

             <p><b style={{color: "#2C7AD8"}}> Servidores do setor público</b>  – Seja você servidor público da União, Estados ou Municípios, somos especialistas em atender o seu caso. As regras são diferentes para todos os casos e consideradas complexas, no entanto estamos aptos a resolver o seu caso.
              </p>
          </div>

          <div>
            <img src="/static/images/beach.jpg" alt="computador" id='photo' />
          </div>

        </div>
      </div>

    </>
  )
}

export default Main2
