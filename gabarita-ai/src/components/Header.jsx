import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import raposa from "../assets/raposa.png";

const Header = () => {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    if (userEmail) {
      setUsuario(userEmail.split("@")[0]);  // Define o usuário logado
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userEmail"); // Remove o usuário do localStorage
    setUsuario(null); // Atualiza o estado para refletir que o usuário não está logado
  };

  return (
    <header className="p-4 w-100 navbar justify-align-content-between align-items-center header">
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
      <div className="d-flex justify-content-end align-items-center gap-4 me-4">
        {usuario ? (
          <span className="d-flex align-items-center gap-2 me-0 me-md-5">
            <span className="d-none d-md-block">
              Olá, {usuario}!
            </span>
            <div className="dropdown">
              <div
                role="button"
                className="border-0"
                type="div"
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
          </span>
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
      </div>
    </header>
  );
};

export default Header;
