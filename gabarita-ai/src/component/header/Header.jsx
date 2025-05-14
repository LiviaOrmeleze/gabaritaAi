import React from 'react'

const Header = (props) => {
  return (
    <header className='w-100 navbar justify-align-content-end align-items-center header'> 
    <div className="d-flex m-2 align-items-center rounded-5 bgLogo"> 
      <img className='object-fit-cover'
      width={50}
      height={50}
      src={props.logo} alt="" />
      <p className='align-items-center m-1 fw-bold justify-content-end logoFonte '>Gabarita.Ai</p>
    </div>
    <div className="d-flex justify-content-end align-items-center gap-2 logoFonte">
      <button className="rounded-5 bgLogo me-2">Cadastro</button>
      <button className=" rounded-5 bgLogo me-5">Login</button>
    </div>
    </header>
  )
}

export default Header
