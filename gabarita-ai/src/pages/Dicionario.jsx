import React from "react";
import livros from "../assets/livros.png";
import logo from "../assets/Raposa.png";
const Dicionario = () => {
  return (
    <>
      <div className="d-flex flex-column rounded-5 border border-black border-2 position-absolute top-50 p-4 ms-5"
      >
        <div className="d-flex justify-content-center justify-content-md-start  p-3 mb-4">
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
    </>
  );
};

export default Dicionario;
