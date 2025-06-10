import React from "react";
import pessoasHome from "../assets/home.jpg";
import banner from "../assets/banner.png";
import quadro from "../assets/quadro.png";

const HomeOfc = () => {
  return (
    <>
    <div className="position-absolute d-flex">

      <div className="d-flex mt-5">
        <img
          height={500}
          width={500}
          className="rounded-5 m-5  border border-2 border-dark"
          src={pessoasHome}
          alt=""
          />

        <div className="d-flex flex-column ">
          <div className="blocoVesti p-3 text-center fs-5 mb-3 ">
            Vestibular
          </div>
          <div className="blocoCon p-3 text-center  fs-5 mb-3">Concurso</div>
          <div className="blocoAtua p-3 text-center fs-5">Atualidades</div>
        </div>
      </div>

      <button className="w-25 rounded-5 p-2 btnCome text-light fs-5 position-fixed bottom-0 end-0 m-5">
        Comece seu estudos <i className="bi bi-caret-right text-light"></i>
      </button>

      <div className="d-flex flex-column " >
       {/* Banner com texto sobreposto */}
       <div className="position-relative  m-3 top-0 end-0" style={{ width: "600px", height: "200px" }}>
        <img
          className="img-fluid rounded-5 w-100 h-100 object-fit-cover"
          src={banner}
          alt="Banner"
        />
        {/* Texto sobre o banner */}
        <div className="position-absolute top-50 start-50 translate-middle text-center">
          <p className="fw-bold fs-3 m-0">Gabarita.ai</p>
          <p className="fs-4 m-0">A chave para a sua aprovação está aqui!</p>
        </div>
      </div>

      {/* Quadro com texto sobreposto */}
      <div className="position-relative  m-3 mt-5" style={{ width: "280px", height: "200px" }}>
        <img
          className="img-fluid"
          src={quadro}
          alt="Quadro"
          style={{ objectFit: "cover" }}
          />
        {/* Texto sobre o quadro */}
        <div className="position-absolute top-50 start-50 translate-middle text-center text-dark" style={{ width: "90%" }}>
          <p className="fs-5 ">
            "Sabia que estudar por 25 minutos e fazer pausas curtas melhora a
            retenção de informações?"
          </p>
        </div>
      </div>
      </div>
          </div>

    </>
  );
};

export default HomeOfc;
