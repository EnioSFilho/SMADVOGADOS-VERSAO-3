import React from 'react'
import {useState} from "react"
import emailjs from "@emailjs/browser"
import { Button } from 'react-bootstrap'

function FaleConosco() {

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


    }, (error) => {
       console.log("deu ruim", error);
    });

  }
  
  return (
   
<container className="fale-container">
  <div>
  <h1>Envie sua mensagem</h1>
  </div>
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
  <Button variant='outline-primary' type='submit'>Enviar Mensagem</Button>
   {/* <input className='button' type="submit" value="enviar"/> */}
   </div>


</form>
</container>
  
  )
}

export default FaleConosco
