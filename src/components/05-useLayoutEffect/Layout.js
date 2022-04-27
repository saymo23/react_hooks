import React, { useLayoutEffect, useRef } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import './style.css'

export const Layout = () => {
  
  const { counter, increment, random } = useCounter(1)

  const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

  const { quote } = !!data && data[0]

  const pTag = useRef();

  useLayoutEffect(() => {
    console.log('layout: ', pTag.current.getBoundingClientRect() );
  }, [quote])

  return (
    <div>
      <h1>Layout Effect</h1>
      
        <div>
          <blockquote className='blockquote text-right'>
            <p ref={ pTag } className="mb-3">
              {quote}
            </p>
          </blockquote>
          <button className='btn btn-primary' onClick={random}>
            Next
          </button>
        </div>
      
    </div>
  )
}
