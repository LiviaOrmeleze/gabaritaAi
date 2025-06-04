import React from "react";

const TituloSecao = ({ titulo, imgSrc }) => {
  return (
    <div
      className="d-flex align-items-center gap-3 px-4 py-3 w-100 linha-com-imagem"
      style={{ backgroundColor: "rgba(0, 137, 123, 0.2)", borderRadius: "8px" }} // Adicionando a faixa verde translúcida
    >
      <img src={imgSrc} alt="Ícone" style={{ width: "50px" }} />
      <h3 className="fw-bold m-0">{titulo}</h3>
    </div>
  );
};

export default TituloSecao;