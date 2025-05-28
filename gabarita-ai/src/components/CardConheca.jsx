import React from 'react'
import miniestrelinha from '../assets/miniestrelinha.png';

const CardConheca = (props) => {
  return (
    <div className='d-flex'>

      <img
      height={320} 
      width={320}
      src={props.imagem} 
      alt=''  
      className= 'position-relative img-fluid'
      />

      <div className='position-absolute px-5 p-5'>

      <div className='d-flex'>
      <div className='align-items-center justify-content-center d-flex flex-column'>
      <img 
      src={miniestrelinha}
      className='position-relative img-fluid'
      height={50} 
      width={70}
      />
      <h3 className='position-absolute '>{props.numero}</h3>
      </div>

      <p className='subtituloCards fw-bold fs-4 d-flex justify-content-center align-items-center ms-2 '>{props.subtitulo}</p>
      </div>
      <p className='text-center w-50 mt-2'>{props.texto}</p>

      </div>

    </div>
  )
}

export default CardConheca
