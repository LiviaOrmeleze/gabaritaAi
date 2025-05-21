import React from 'react'

import folha from '../assets/folha.png'
import logo from '../assets/logo.png'
import estrela from '../assets/estrela.png'

const Conheca = () => {
  return (
    <div className='fundoconheca body  d-flex align-items-center justify-content-between vh-100 overflow-hidden'>
      
      <div className='col-6 d-flex align-items-center flex-column'>

      <img className='position-relative' src={folha} alt="" />

      <div className='position-absolute m-5 p-5 '>
      <h1 className='tituloconheca'>Conheça nosso site</h1> 
      <p className='body mt-5'>Siga o passo a passo, monte seu perfil e inicie seu processo de estudos</p>
      <img className='w-25 h-25' src={logo} alt="" />


      <div className='d-flex align-items-center justify-content-center position-absolute'>
      <img className='w-50 h-50 d-flex position-relative ms-2' src={estrela} alt="" />
      <h4 className='fw-bold conteudo position-absolute rotate-diagonal'>Gabarita aí</h4>
      </div>
      </div>

      </div>

     {/* <div className='col-6 d-flex'>

        <img height={300} width={300} src={caixabranca} alt="" className='position-relative' />
        <div className='position-absolute col-3 p-md-5 text-center'>
        <h5>Teste seu nível </h5>
        <p>Para avaliar suas habilidades nas principais disciplinas e identificar os tópicos que precisam de mais atenção. Aqui, você terá uma visão clara do seu desempenho!</p>
        </div>

       </div> */} 

</div>
  )
}

export default Conheca
