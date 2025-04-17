import React from 'react'

function Hero({heroName}) {
    if(heroName==='Joker'){
        throw new Error('Not a hero !') // This wiil directly show in browser so we need to handle it gracefully .
    }
  return (
    <div>{heroName}</div>
  )
}

export default Hero