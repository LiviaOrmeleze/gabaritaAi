import React from 'react'

import folha from '../assets/folha.png'
import raposinha from '../assets/raposinha.png'
import estrela from '../assets/estrela.png'
import caixabranca from '../assets/caixabranca.png'
import caixabege from '../assets/caixabege.png'

const Conheca = () => {
  return (
    <div className='bgconheca h-100 w-100 d-flex'>
      
      <div className=''>
      <img className='img-fluid' src={folha} alt="" />
      <img className='w-25 h-25 translate-middle-y ' src={estrela} alt="" />
      <img className='w-25 h-25' src={raposinha} alt="" />
      </div>

      <div className='d-flex flex-column justify-content-center align-items-center w-50 h-100'>
        <img className='w-50 h-50'  src={caixabranca} alt="" />
        <img className='w-50 h-50' src={caixabege} alt="" />
        <img className='w-50 h-50' src={caixabege} alt="" />
        <img className='w-50 h-50' src={caixabranca} alt="" />
      </div>

    </div>
  )
}

export default Conheca
