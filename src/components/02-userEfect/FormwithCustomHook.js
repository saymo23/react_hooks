import React, { useEffect, useState } from 'react'
import { useForm } from '../../hooks/useForm'
import './effects.css'

export const FormWithCustomHooks = () => {

  const [formState, handleInputChange] = useForm({
    name: '',
    email: '',
    password: ''
  })

  const { name, email, password } = formState

  //useEffect(() => {
  //  console.log('cambio');
  //
  //}, [email])
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formState);
  }

  return (
    <form onSubmit={ handleSubmit }>
      <h2>From With Custom Hook</h2>
      <div className="form-group">
        <input 
          type="text" 
          name='name' 
          placeholder='Tu nombre' 
          value={ name }
          autoComplete='off'
          onChange={ handleInputChange }
        />
      </div>
      <div className="form-group">
        <input 
          type="text" 
          name='email' 
          placeholder='Tu Email' 
          autoComplete='off'
          value={ email }
          onChange={ handleInputChange }
        />
      </div>
      <div className="form-group">
        <input 
          type="password" 
          name='password' 
          placeholder='****' 
          autoComplete='off'
          value={ password }
          onChange={ handleInputChange }
        />
      </div>
      {
        //name === '123' && <Message/>
      }
      <button type='submit' className='btn btn-primary'>
        Guardar
      </button>
    </form>
  )
}
