import React from 'react'

const CardConheca = (props) => {
  return (
    <div>
      <h5 className=''>{props.numero}</h5>
      <p className='subtituloCards fw-bold'>{props.subtitulo}</p>
      <p className='text-center'>{props.texto}</p>
      <img src={props.imagem}/>
    </div>
  )
}

export default CardConheca
