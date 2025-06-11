import React from "react";
import { useNavigate } from "react-router";

const ListaRedacao = (props) => {
    const navigate = useNavigate();
  
    const handleClick = () => {
      navigate(props.link); // Navega para a rota especificada
    };
  
    return (
      <div
        onClick={handleClick}
        className={`d-flex ${props.bgClass} align-items-center text-light gap-5 p-4`}
        style={{ cursor: "pointer" }} // Adiciona o cursor de clique
      >
        <div className="w-25 flex-shrink-0">
          <p className="fs-2 text-uppercase fw-bold mb-0 me-4">{props.title}</p>
        </div>
        <div className="flex-fill">
          <p className="fs-5 mb-0">{props.description}</p>
        </div>
      </div>
    );
  };
  
  export default ListaRedacao;