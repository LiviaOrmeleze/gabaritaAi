import React from "react";
import { Link } from "react-router";

const Menu = () => {
  return (
    <>
      <div className="d-flex justify-content-end align-items-center gap-4 me-4">
        {/* Ícone de menu */}
        <div className="dropdown"> 
          <i
            className="bi bi-list fs-2 text-secondary"
            role="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          ></i>
          <ul
            className="dropdown-menu dropdown-menu-dark dropdown-menu-end"
            aria-labelledby="dropdownMenuButton"
          >
            <li>
              <Link to="/" className="dropdown-item">
                <i class="bi bi-house"></i> Página Inicial
              </Link>
            </li>
            <li>
              <Link to="/materias" className="dropdown-item">
                <i class="bi bi-book"></i> Materias
              </Link>
            </li>
            <li>
              <Link to="/dicionario" className="dropdown-item">
                <i class="bi bi-alphabet"></i> Dicionário
              </Link>
            </li>
            <li>
              <Link to="/redacao" className="dropdown-item">
                <i class="bi bi-card-text"></i> Redação
              </Link>
            </li>
            <li>
              <Link to="/planos" className="dropdown-item">
                <i class="bi bi-card-checklist"></i> Planos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Menu;
