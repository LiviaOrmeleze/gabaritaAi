import React from "react";
import livros from "../assets/livros1.png";

import ListaDicionario from "../components/ListaDicionario";

import NewHeader from "../components/NewHeader";

const Dicionario = () => {
  return (
    <>
      {/* Topo */}
      <NewHeader />
      <div
        className="d-flex justify-content-center align-items-center  "
        style={{
          minHeight: "80vh", // Altura mínima para centralizar o conteúdo
        }}
      >
        <div></div>

        <div className="d-flex flex-column rounded-5 border border-black border-2 p-5 top-50 p-4 ms-5">
          <p
            className="fs-3 fw-bold fonteGaba text-uppercase text-dark"
            style={{ letterSpacing: "5px" }}
          >
            Dicionário
          </p>
          <p className="fs-4">Tire suas dúvidas e aumente seu repertório!</p>
          <div className="d-flex justify-content-center align-items-center">
            <img
              className="img-fluid"
              src={livros}
              alt="Livros"
              width={200}
              height={200}
            />
          </div>
        </div>

        <div className="lista ms-auto">
          <ListaDicionario
            title="Significados"
            description="Exibe definições detalhadas das palavras pesquisadas."
            bgClass="bgSig"
            link="/significados"
          />
          <ListaDicionario
            title="Sinônimos"
            description="Lista palavras com significados semelhantes para ampliar o vocabulário."
            bgClass="bgSin"
            link="/sinonimos"
          />
          <ListaDicionario
            title="Conectivos"
            description="Mostra palavras e expressões que ajudam na coesão e fluidez dos textos."
            bgClass="bgCo"
            link="/conectivos"
          />
          <ListaDicionario
            title="Prepositivos"
            description="Apresenta termos úteis para introduzir, argumentar e concluir ideias."
            bgClass="bgPre"
            link="/prepositivos"
          />
        </div>
      </div>
    </>
  );
};

export default Dicionario;
