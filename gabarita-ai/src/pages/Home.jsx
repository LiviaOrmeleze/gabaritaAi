import React from "react";
import pessoasHome from "../assets/home.jpg";
import banner from "../assets/banner.png";

const Home = () => {
  return (
    <>
      <div className="d-flex ">
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

      <img 
      className="object-fit position-absolute end-0 m-3 "
      height={200}
      width={650}
      src={banner}
      alt="" />
      <p></p>
    </>
  );
};

export default Home;
