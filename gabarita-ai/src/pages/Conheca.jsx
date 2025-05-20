import React from 'react'

import folha from '../assets/folha.png'
import logo from '../assets/logo.png'
import estrela from '../assets/estrela.png'
import caixabranca from '../assets/caixabranca.png'
import caixabege from '../assets/caixabege.png'

const Conheca = () => {
  return (
    <div className='body'>
      
      <div className='col-6 d-flex align-items-center flex-column'>
      <img className='position-relative' src={folha} alt="" />
      <div className='position-absolute'>
      <h1 className='tituloconheca'>Conheça nosso site</h1>
      <p className='body'>Siga o passo a passo, monte seu perfil e inicie seu processo de estudos</p>
      <img className='w-25 h-25' src={logo} alt="" />
      </div>
{/* 
      <div className="col-lg-6 position-relative d-flex justify-content-center align-items-center mb-4 mb-lg-0">
          <img src={folha} alt="folha" className="img-fluid" />
          <div className="position-absolute text-center" style={{ maxWidth: '80%', top: '20%' }}>
            <h1 className="fw-bold mb-3" style={{ fontFamily: 'Haading Now 71' }}>
              Conheça nosso site
            </h1>
            <p className="mb-3">Siga o passo a passo, monte seu perfil e inicie seu processo de estudos</p>
            <img src={logo} alt="raposinha" className="img-fluid" style={{ maxWidth: '100px' }} />
          </div> */}


      <div className='d-flex align-items-center justify-content-center'>
      <img className='w-50 h-50 d-flex position-relative' src={estrela} alt="" />
      <h4 className='fw-bold conteudo position-absolute rotate-diagonal'>Gabarita aí</h4>
      </div>
        
 

      </div>

      <div className='d-flex flex-column w-50 h-100'>

        <img className='w-50 h-50'  src={caixabranca} alt="" />
        <img className='w-50 h-50' src={caixabege} alt="" />
        <img className='w-50 h-50' src={caixabege} alt="" />
        <img className='w-50 h-50' src={caixabranca} alt="" />
      // </div>

</div>
  )
}

export default Conheca
