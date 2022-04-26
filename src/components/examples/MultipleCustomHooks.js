import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import './style.css'

export const MultipleCustomHooks = () => {
  const state = useFetch(`https://www.breakingbadapi.com/api/quotes/1`)
  console.log(state);
  return (
    <div>
      <h1>MultipleCustomHooks</h1>
    </div>
  )
}
