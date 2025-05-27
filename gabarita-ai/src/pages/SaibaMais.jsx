import React from 'react'

import logo from "../assets/logo.png";
import celular from "../assets/celular.png";

const SaibaMais = () => {
  return (
    <div className='bgsaibamais min-vh-100 text-light d-flex flex-column flex-md-row align-items-center justify-content-between overflow-hidden'>
      
      <div className='col-12 col-md-5 ms-md-5 p-5 text-center text-md-start'>
        <div className='d-flex justify-content-center justify-content-md-start gap-2 px-0 mb-4'>
          <img src={logo} alt='' height={50} width={50}/> 
          <p className='text-uppercase m-3 fst-italic font-open-sans-bold'>Gabarita ai</p>
        </div> 
        <h1 className='fw-bold py-4 py-md-5 px-0 w-100 w-md-75'>
          O conhecimento abre caminhos para o seu futuro.
        </h1>
        <h4 className='py-4 py-md-3 px-0 w-100 w-md-75'>
          Estude de forma inteligente todos os dias e conquiste sua aprovação!
        </h4>
        <button className='btnsaibamais rounded-5 py-3 px-5 text-uppercase border-0 text-light mt-3 botaosaibamais font-open-sans-bold w-75 w-md-50'>
          Saiba mais
        </button>
      </div>

      <div className='col-12 col-md-6 d-flex justify-content-center p-4'>
        <img src={celular} alt='' className='img-fluid' />
      </div>

    </div>
  )
}

export default SaibaMais
