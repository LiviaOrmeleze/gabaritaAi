import React from 'react'

import logo from "../assets/logo.png";
import celular from "../assets/celular.png";

const SaibaMais = () => {
  return (
    <div className='bgsaibamais vh-100 text-light d-flex align-items-center justify-content-between vh-100 overflow-hidden' >
      
      <div className='col-6 ms-5 p-5'>
        <div className='d-flex gap-2 px-0'>
          <img src={logo} alt='' height={50} width={50}/> 
          <p className='text-uppercase m-3 fst-italic font-open-sans-bold'>Gabarita ai</p>
        </div> 
        <h1 className='fw-bold p-5 px-0 w-75'>
          O conhecimento abre caminhos para o seu futuro.
        </h1>
        <h4 className='p-4 px-0 w-75'>
          Estude de forma inteligente todos os dias e conquiste sua aprovação!
        </h4>
        <button className='btnsaibamais rounded-5 py-3 px-5 text-uppercase border-0 text-light p-5 px-0 botaosaibamais font-open-sans-bold w-50'>
          Saiba mais
        </button>
      </div>

      <div className='col-6 d-flex'>
        <img src={celular} alt='' />
      </div>

    </div>
  )
}

export default SaibaMais
