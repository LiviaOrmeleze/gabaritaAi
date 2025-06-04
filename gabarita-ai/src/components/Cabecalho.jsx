import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import LogoAtualidades from "../assets/Atualidades.png";
import Atualidades2 from "../assets/Atualidades2.png";

const Cabecalho = () => {
  return (
    <header
      className="d-flex flex-wrap align-items-center justify-content-between p-3"
      style={{ backgroundColor: "#df6d14" }}
    >
      <img
        src={LogoAtualidades}
        alt="Logo"
        className="img-fluid"
        style={{ height: "160px" }}
      />
      <img
        src={Atualidades2}
        alt="Ilustração"
        className="img-fluid"
        style={{ width: "200px" }}
      />
    </header>
  );
};

export default Cabecalho;
