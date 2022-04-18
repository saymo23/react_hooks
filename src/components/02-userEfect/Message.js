import React, { useEffect } from 'react'

export const Message = () => {
  useEffect(() => {
    console.log('Montado 🌮');

    const mousemove =  (e) => {
      //const coords = x + ':' + y
      //console.log(coords);
      console.log(':D')
    }
    
    window.addEventListener('mousemove', mousemove)
  
    return () => {
      console.log('DesMontado 🌮');
      window.removeEventListener('mousemove', mousemove)
    }
  }, [])
  
  return (
    <div>Eres Pro!</div>
  )
}
