import React from 'react'
import { Card, Button, } from "react-bootstrap"
import Image from "next/image"
import { ConstainerStyled } from '../main/main.styled'


function Tribunais() {
  return (
    <>
    <div className='adjust'>
    <div className='tribunais-title'>
    <h1>Tribunais</h1>
    </div>
    
    <container className="tribunais-container1">
        <div>
        <Card style={{ width: '18rem', height: "400px" }}>
        <Card.Img src="/static/images/stf.jpeg" width="100" height="100" alt="STF"/>
      <Card.Body>
        <Card.Title>Supremo Tribunal Federal</Card.Title>
        <Card.Text>
        O Supremo Tribunal Federal (STF) é a mais alta corte de justiça no sistema judiciário brasileiro, desempenhando um papel fundamental na interpretação da Constituição.
        </Card.Text>
        <Button variant="outline-primary" href='https://portal.stf.jus.br/' target='_black'>Acesse o Site</Button>
      </Card.Body>
    </Card>
        </div>

        <div>
        <Card style={{ width: '18rem', height: "400px" }}>
        <Card.Img src="/static/images/stj.jpeg" width="100" height="100" alt="Stj"/>
      <Card.Body>
        <Card.Title>Superior Tribunal de Justiça</Card.Title>
        <Card.Text>
        Criado pela Constituição Federal de 1988, o Superior Tribunal de Justiça (STJ) é a corte responsável por uniformizar a interpretação da lei federal em todo o Brasil.
        </Card.Text>
        <Button variant="outline-primary" href='https://www.stj.jus.br/sites/portalp/Inicio' target='_black'>Acesse o Site</Button>
      </Card.Body>
    </Card>

        </div>
        <div>
        <Card style={{ width: '18rem', height: "400px" }}>
        <Card.Img src="/static/images/trf3.jpeg" width="100" height="100" alt="TRF"/>
      <Card.Body>
        <Card.Title>Tribunal Regional Federal 3</Card.Title>
        <Card.Text>
        O Tribunal Regional Federal   é um órgão de segunda instância do Poder Judiciário brasileiro, com jurisdição sobre os estados de São Paulo e Mato Grosso do Sul.
        </Card.Text>
        <Button variant="outline-primary" href='https://www.trf3.jus.br/' target='_black'>Acesse o Site</Button>
      </Card.Body>
    </Card>

        </div>
        <div>
        <Card style={{ width: '18rem', height: "400px" }}>
        <Card.Img src="/static/images/tjsp.jpeg" width="100" height="100" alt="tjsp"/>
      <Card.Body>
        <Card.Title>Tribunal de Justiça</Card.Title>
        <Card.Text>
        O Tribunal de Justiça, é o órgão de segunda instância do Judiciário. Ele exerce um papel fundamental na revisão das decisões proferidas pelos juízes de direito e tribunais de primeira instância
        </Card.Text>
        <Button variant="outline-primary" href='https://portal.tjsp.jus.br/' target='_black'>Acesse o Site</Button>
      </Card.Body>
    </Card>
    
        </div>
        </container>

    <container className="tribunais-container2">
   


       

       

    </container>

    </div>

    </>
  )
}

export default Tribunais