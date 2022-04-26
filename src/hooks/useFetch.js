import React, { useEffect, useState } from 'react'

export const useFetch = ( url ) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null
  })

  useEffect(() => {

    setState({
      data: null,
      loading: false,
      error: false
    })

    fetch(url)
    .then( resp => resp.json() )
    .then( data => {
      setTimeout(() => {
        setState({
          loading: false,
          error: null,
          data
        })
      }, 700);
      
    })
  }, [ url ])

  return state

}
