import React, { useEffect, useState } from 'react'
import './effects.css'
import { Message } from './Message'

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    name: '',
    email: ''
  })

  const { name, email } = formState

  //! esto se ejecuta cuando carga el componente?
  //? Si y no, se dispara siempre es haya un cambio en el state, por eso se dispara al inicio del componente, porque el state cambia en el momento justo que carga el componente
  useEffect(() => {//! Los useEffect son como los
    //console.log('Primer useEffect');
  }, []) //! Por eso se debe poner aqui una lista de dependencia
  
  useEffect(() => {
    //console.log('Segundo useEffect');
  }, [formState.name])

  const handleInputChange = ( { target } ) => {
    setFormState({
      ...formState,
      [target.name]: target.value
    })
  }

  return (
    <div>
      <h2>useEffect</h2>
      <div className="form-group">
        <input 
          type="text" 
          name='name' 
          placeholder='Tu nombre' 
          value={ name }
          autoComplete='off'
          onChange={ handleInputChange }
        />
        <input 
          type="text" 
          name='email' 
          placeholder='Tu Email' 
          value={ email }
          autoComplete='off'
          onChange={ handleInputChange }
        />
      </div>
      {
        name === '123' && <Message/>
      }
    </div>
  )
}
