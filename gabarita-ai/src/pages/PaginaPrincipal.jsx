import React from 'react'
import HomeOfc from '../components/HomeOfc'
import EscolhaOf from '../components/EscolhaOf'
import EstudarOfc from '../components/EstudarOfc'
import SaibaMaisOfc from '../components/SaibaMaisOfc'

const PaginaPrincipal = () => {
  return (
    <div className='flex-column'>
        <HomeOfc />
      <EscolhaOf />
        <EstudarOfc />
        <SaibaMaisOfc />
    </div>
  )
}

export default PaginaPrincipal