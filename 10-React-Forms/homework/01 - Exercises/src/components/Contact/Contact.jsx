import React, { useState } from 'react'
import './Contact.modules.css'

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export default function Contact () {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    phone: 0,
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: 0,
    subject: '',
    message: ''
  });
  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
    setErrors(
      validate({
        ...inputs,
        [e.target.name]: e.target.value
      }));}
  const handleSubmit = (e) => {
    e.preventDefault();
    if(Object.entries(errors).length === 0){
      window.alert('Datos completos');
      setInputs({
        name: '',
        email: '',
        phone: 0,
        subject: '',
        message: ''
      });
      setErrors({
        name: '',
        email: '',
        phone: 0,
        subject: '',
        message: ''
      });
    } 
    else {
      window.alert('Debes corregir los errores')
    }
  }
  
  return ( 
    <form onSubmit={handleSubmit}>
      <label>Nombre:</label>
      <input 
        id='name'
        name='name' 
        placeholder='Escribe tu nombre...'
        type='text'
        value={inputs.name}
        onChange={handleChange}
        className={errors.name && 'warning'}
        />
      <p className='danger'>{errors.name}</p>
      <label>Correo Electrónico:</label>
      <input 
        name='email' 
        placeholder='Escribe tu email...'
        type='text'
        value={inputs.email}
        onChange={handleChange}
        className={errors.email && 'warning'}></input>
      <p className='danger'>{errors.email}</p>
      <label>Teléfono:</label>
      <input 
        name='phone' 
        placeholder='Escribe un teléfono...'
        type='number'
        value={inputs.phone}
        onChange={handleChange}
        className={errors.phone && 'warning'}></input>
      <p className='danger'>{errors.phone}</p>
      <label>Asunto:</label>
      <input 
        name='subject' 
        placeholder='Escribe el asunto...'
        type='text'
        value={inputs.subject}
        onChange={handleChange}
        className={errors.subject && 'warning'}></input>
      <p className='danger'>{errors.subject}</p>
      <label>Mensaje:</label>
      <input 
        name='message' 
        placeholder='Escribe te mensaje...'
        type='text'
        value={inputs.message}
        onChange={handleChange}
        className={errors.message && 'warning'}></input>
      <p className='danger'>{errors.message}</p>
      <button type='submit'>Enviar</button>
    </form>
    
    
)}

export function validate(inputs) {
  let errors = {};

  if(inputs.name === ''){
    errors.name= 'Se requiere un nombre'
  }
  if(!regexEmail.test(inputs.email)){
    errors.email= 'Debe ser un correo electrónico'
  }
  if(inputs.phone < 0){
    errors.phone= 'Sólo números positivos'
  }
  if(!inputs.subject){
    errors.subject= 'Se requiere un asunto'
  }
  if(!inputs.message) errors.message= 'Se requiere un mensaje';
  
  return (
    errors
  )
}
