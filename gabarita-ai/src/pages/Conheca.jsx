import React from "react";

import folha from "../assets/folha.png";
import logo from "../assets/logo.png";
import estrela from "../assets/estrela.png";
import Conhecendo from "../components/Conhecendo";
import linhatorta from "../assets/linhatorta.png";

const Conheca = () => {
  return (
    <div className="fundoconheca body min-vh-100 d-flex align-items-center overflow-hidden">


     <div className="col-12 col-md-6 d-flex justify-content-center position-relative">
      <div className="d-flex align-items-center flex-column position-absolute">
        <img className="position-relative" src={folha} alt="" />
        <div className="position-absolute py-5 mt-3 ">
          <h1 className="tituloconheca px-5 ms-4 py-3">Conheça nosso site</h1>
          <img src={linhatorta} alt="" className="w-75 ms-5"/>
          <p className="body mt-2 px-5">
            Siga o passo a passo, monte seu perfil e inicie seu processo de
            estudos
          </p>
          <div className="d-flex justify-content-lg-around gap-5 mt-5 mb-3 divImagem ms-5">
            <div className="">
              <img className="w-25" src={logo} alt="" />
            </div>

            <div className="d-flex align-items-end w-50">
              <img className="w-100" src={estrela} alt="" />
            </div>
          </div>
        </div>
      </div>
     </div>


        <div className="col-12 col-md-6 d-flex justify-content-center">
        <Conhecendo />
        </div>



    </div>
  );
};

export default Conheca;
