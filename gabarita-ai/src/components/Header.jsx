import React from 'react'
import { Link } from "react-router-dom";
import raposa from "../assets/raposa.png"

const Header = () => {

  // Pega o email do localStorage
  const userEmail = localStorage.getItem("userEmail");
  // Pega a primeira parte do email (antes do @)
  const userName = userEmail ? userEmail.split("@")[0] : null;
  
  return (
    <header className='p-4 w-100 navbar  justify-align-content-between align-items-center  header  '> 
    
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
        {userName ? (
          <>
            {/* Avatar do perfil */}
            <img
              src={`https://ui-avatars.com/api/?name=${userName}&background=2b87ae&color=fff`}
              alt={userName}
              className="rounded-circle"
              width="40"
              height="40"
            />
            <span className="fw-bold text-light">Olá, {userName}</span>
          </>
        ) : (
          <>
            <Link to="/cadastro" className="rounded-5 bgLogo p-2 text-decoration-none text-dark">Cadastro</Link>
            <Link to="/login" className="rounded-5 bgLogo p-2 text-decoration-none text-dark">Login</Link>
          </>
        )}
    </div>
    </header>

    
  )
}

export default Header
