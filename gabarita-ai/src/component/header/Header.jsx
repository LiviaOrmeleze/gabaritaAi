import React from 'react'
import raposa from "../../assets/raposa.png"

const Header = () => {
  return (
    <header className='w-100 navbar d-flex justify-content-between align-items-center header fixed-top '> 
    <div className="d-flex align-items-center ms-4 bgLogo rounded-5 "> 
    <img 
    className='object-fit ms-2'
    height={25}
    width={25}
    src={raposa} 
    alt="" />
      <p className=' m-2 fw-bold  logoFonte '>Gabarita.Ai</p>
    </div>
    <div className="d-flex justify-content-end align-items-center gap-4 me-4">
      <button className="rounded-5 bgLogo p-2">Cadastro</button>
      <button className=" rounded-5 bgLogo p-2">Login</button>
    </div>
    </header>

    
  )
}

export default Header
