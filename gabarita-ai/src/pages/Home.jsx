import React from "react";
import pessoasHome from "../assets/home.jpg";
import banner from "../assets/banner.png";
import quadro from "../assets/quadro.png";

const Home = () => {
  return (
    <>
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
        Comece seu estudos <i class="bi bi-caret-right text-light"></i>
      </button>

      <div className="position-absolute end-0 m-3 mt-5" >
      <img
        className="object-fit "
        height={200}
        width={650}
        src={banner}
        alt=""
      />
      <p className="position-absolute top-50 start-50 translate-middle fw-bold fs-3">
      Gabarita.ai</p>
      <p className="position-absolute top-50 start-50 fs-4">
         a chave para a sua aprovação está aqui !</p>
      </div>

      <div className="">
      <img 
      className="object-fit end-0 "
      src={quadro} 
      alt=""
      height={200} 
      width={280}
      />
      <p> "Sabia que estudar por 25 minutos e fazer pausas curtas melhora a retenção de informações?"</p>
      </div>

    </>
  );
};

export default Home;
