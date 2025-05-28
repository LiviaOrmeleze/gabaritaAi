import React from "react";
import livros from "../assets/livros.png";
import logo from "../assets/Raposa.png";
const Dicionario = () => {
  return (
    <>
    <div className="d-flex justify-content-center align-items-center min-vh-100  ">

      <div> 
        
      </div>

      <div className="d-flex flex-column rounded-5 border border-black border-2  top-50 p-4 ms-5"
      >
        <div className="d-flex  justify-content-start  p-3 mb-4">
          <img src={logo} alt="" height={50} width={50} />
          <p className="text-uppercase m-3 fst-italic font-open-sans-bold fonteGaba">
            Gabarita ai
          </p>
        </div>

        <p className="fs-3 fw-bold fonteGaba text-uppercase text-dark"
        style={{ letterSpacing: '5px' }}>
          Dicionário
        </p>
        <p className="fs-4">Tire suas dúvidas e aumente seu repertório!</p>
        <div className="d-flex justify-content-center align-items-center">
          <img className="img-fluid" src={livros} alt="Livros" width={200} height={200} />
        </div>
      </div>

      <div className="listaDicio ms-auto">

        <div className="d-flex bgSig  text-light gap-4 p-4 ">
        <p className="fs-2 text-uppercase fw-bold align-content-center">Significados</p>
        <p className="fs-5"> Exibe definições detalhadas das palavras pesquisadas.</p>
        </div>

        <div className="d-flex bgSin   text-light gap-4 p-4">
        <p className="fs-2 text-uppercase fw-bold align-content-center">Sinônimos</p>
        <p className="fs-5"> Lista palavras com significados semelhantes para ampliar o vocabulário.</p>
        </div>

        <div className="d-flex bgCo   text-light gap-4 p-4">
          <p className=" fs-2 text-uppercase fw-bold align-content-center">Conectivos</p>
          <p className="fs-5">Mostra palavras e expressões que ajudam na coesão e fluidez dos textos.</p>
        </div>

        <div className="d-flex bgPre   text-light gap-4 p-4">
          <p className="fs-2 text-uppercase fw-bold align-content-center">Prepositivos</p>
          <p className="fs-5">Apresenta termos úteis para introduzir, argumentar e concluir ideias.</p>
          </div>
        
      </div>
          </div>
    </>
  );
};

export default Dicionario;
