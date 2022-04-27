import React, { useState } from 'react'
import { MultipleCustomHooks } from '../03-Examples/MultipleCustomHooks'
import './style.css'

export const RealExampleRef = () => {
  
  const [show, setShow] = useState(true)

  return (
    <>
      
      <h1>Real Example Ref</h1>
      <hr />

      <button className="btn btn-primary mt-2"
        onClick={() => {
          setShow( !show )
        }}
      >
        Show/Hide
      </button>
      <br /> <br />
      {show && <MultipleCustomHooks />}

      

    </>
  )
}
