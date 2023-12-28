import React from 'react'
import real from './cards.module.css'

const Card = ({
    hover,
    name = 'error',
    imgUrl,
    desc ='error',
    backgroundColor,
    buttonColor,
    button = 'error'}) => {


  return (
    <div style ={{background:backgroundColor}}  className={`${real.card}`}>
        <img className={real.img} src={imgUrl} />
        <h1 className={real.h1}>{name}</h1>
        <p className={real.p}>{desc}</p>
        <button style={{color:buttonColor}}  className={`${real.button}   ${real[hover]}`}>{button} </button>
    </div>
  )
}

export default Card