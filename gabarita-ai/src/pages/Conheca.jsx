import React from "react";

import folha from "../assets/folha.png";
import logo from "../assets/logo.png";
import estrela from "../assets/estrela.png";
import Conhecendo from "../components/Conhecendo";
import CardConheca from "../components/CardConheca";

const Conheca = () => {
  return (
    <div className="fundoconheca body  d-flex align-items-center vh-100 overflow-hidden">
      <div className="d-flex align-items-center flex-column">
        <img className="position-relative" src={folha} alt="" />

        <div className="position-absolute py-5 mt-3">
          <h1 className="tituloconheca px-5">Conheça nosso site</h1>
          <p className="body mt-5 px-5">
            Siga o passo a passo, monte seu perfil e inicie seu processo de
            estudos
          </p>

          <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-5 mt-5 mb-3">
            <div className="d-flex align-align-items-baseline justify-content-start">
              <img className="w-50 h-50" src={logo} alt="" />
            </div>
            <div className="d-flex align-items-end justify-content-end">
              <img
                className="w-75 h-75 d-flex justify-content-end"
                src={estrela}
                alt=""
              />
              <h4 className="fw-bold conteudo position-absolute rotate-diagonal">
                Gabarita aí
              </h4>
            </div>
          </div>

          <Conhecendo />
        </div>
      </div>
    </div>
  );
};

export default Conheca;
