import React from 'react'

const CardConheca = (props) => {
  return (
            <div className='col-6 d-flex'>
      
              <img height={300} width={300} src={props.imagem} alt="" className='position-relative' />
              <div className='position-absolute col-3 p-md-5 text-center'>
              <h5>{props.subtitulo}</h5>
              <p>{props.texto}</p>
              </div>
      
             </div>
  )
}

export default CardConheca
