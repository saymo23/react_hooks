import React, { useRef } from 'react'

export const FocusScreen = () => {

  const ref = useRef()

  const handleClick = () => {
    //document.querySelector('input').select()
    ref.current.select()
  }
  return (
    <div>
      <h1>FocusScreen</h1>
      <hr />

      <input 
      ref={ ref }
      type="text" className='form-control text-right' placeholder='Su nombre' />
      <button className='btn btn-info' onClick={handleClick} >
        Focus
      </button>
    </div>
  )
}
