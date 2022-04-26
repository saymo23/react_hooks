import { useState } from 'react'

export const useCounter = (initialState = 110) => {

  const [counter, setCounter] = useState(initialState)

  //Para el usefetch del componente de las Quote 
  const increment = () => {
    setCounter((counter) + 1)
  }

  // const increment = (factor = 1) => {
  //   setState((state) + factor)
  // }

  // const decrement = (factor = 1) => {
  //   setState((state) - factor)
  // }

  const reset = () => setCounter(initialState)

  return{
    counter,
    increment,
    reset
  }
}
