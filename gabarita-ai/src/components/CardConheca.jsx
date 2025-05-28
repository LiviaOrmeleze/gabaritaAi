import React from 'react'

const CardConheca = (props) => {
  return (
    <div>
      <img src={props.imagem} alt='' />

      <div className=''>

      <div className='d-flex gap-4'>
      <h5 className=''>{props.numero}</h5>
      <p className='subtituloCards fw-bold '>{props.subtitulo}</p>
      </div>
      <p className='text-center '>{props.texto}</p>

      </div>
    </div>
  )
}

export default CardConheca
