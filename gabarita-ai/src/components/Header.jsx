import React, { useState } from "react";
import { Link } from "react-router";
import raposa from "../assets/raposa.png";
import Menu from "./Menu";

const Header = () => {
  const [usuario, setUsuario] = useState(
    localStorage.getItem("userEmail")?.split("@")[0] || null
  );

  const handleLogout = () => {
    localStorage.removeItem("userEmail"); // Remove o usuário do localStorage
    setUsuario(null); // Atualiza o estado para refletir que o usuário não está logado
  };

  return (
    <header className="p-4 w-100 navbar justify-content-between align-items-center header">
      {/* Logo */}
      <div className="d-flex align-items-center ms-4 bgLogo rounded-5">
        <img
          className="object-fit ms-2"
          height={25}
          width={25}
          src={raposa}
          alt=""
        />
        <p className="m-2 fw-bold logoFonte">Gabarita.Ai</p>
      </div>

      {/* Perfil */}
      <div className="d-flex gap-5">
        {usuario ? (
          <div className="d-flex align-items-center gap-2">
            <span className="d-none d-md-block text-light">
              Olá, {usuario}!
            </span>
            <div className="dropdown">
              <div
                role="button"
                className="border-0"
                id="dropdownPerfil"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={`https://ui-avatars.com/api/?name=${usuario}&background=2b87ae&color=fff`}
                  alt={usuario}
                  className="rounded-circle"
                  width="40"
                  height="40"
                />
              </div>
              <ul
                className="dropdown-menu dropdown-menu-dark dropdown-menu-end"
                aria-labelledby="dropdownPerfil"
              >
                <li>
                  <Link to="/perfil" className="dropdown-item">
                    Perfil
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="dropdown-item"
                    style={{ border: "none", background: "none" }}
                  >
                    Sair
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <>
            <Link
              to="/cadastro"
              className="rounded-5 bgLogo p-2 text-decoration-none text-dark"
            >
              Cadastro
            </Link>
            <Link
              to="/login"
              className="rounded-5 bgLogo p-2 text-decoration-none text-dark"
            >
              Login
            </Link>
          </>
        )}
        {/* Menu e Perfil */}
        <Menu />
      </div>
    </header>
  );
};

export default Header;
