import React from "react";
import logo from "../assets/Raposa.png";
import mulher from "../assets/mulher.png";

const Redacao = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center min-vh-100  ">
      

        <div className="d-flex flex-column rounded-5 border border-black border-2  top-50 p-4 ms-5 infDiRe">
          <div className="d-flex  justify-content-start  p-3 mb-4">
            <img src={logo} alt="" height={50} width={50} />
            <p className="text-uppercase m-3 fst-italic font-open-sans-bold fonteGaba">
              Gabarita ai
            </p>
          </div>

          <p
            className="fs-3 fw-bold fonteGaba text-uppercase text-dark"
            style={{ letterSpacing: "5px" }}
          >
            Redação
          </p>
          <p className="fs-4">
            Aqui, você pode treinar redações nos formatos exigidos por
            vestibulares como ENEM, Fuvest e Vunesp. Escolha o modelo desejado e
            aprimore sua escrita com recursos personalizados!
          </p>
          <div className="d-flex justify-content-center align-items-center">
            <img
              className="img-fluid"
              src={mulher}
              alt="Mulher escrevendo"
              width={200}
              height={200}
            />
          </div>
        </div>

        <div className="lista ms-auto">

          <div className="d-flex bgSig  align-items-center text-light gap-4 p-4 ">

          <div className="w-25 flex-shrink-0">
            <p className="fs-2 text-uppercase fw-bold  mb-0 me-4">
              Estrutura
            </p>
            </div>

            <div className="flex-fill">
            <p className="fs-5 mb-0">
            Veja o modelo ideal de redação para cada vestibular e aprenda a organizá-la corretamente.
            </p>
            </div>

          </div>

          <div className="d-flex bgSin  align-items-center text-light gap-4 p-4">

          <div className="w-25 flex-shrink-0">
            <p className="fs-2 text-uppercase fw-bold mb-0 me-4">
             Temas
            </p>
            </div>

            <div className="flex-fill"> 
            <p className="fs-5 mb-0">
              Encontre sugestões de temas baseados em provas anteriores e questões atuais.
            </p>
          </div>

          </div>

          <div className="d-flex bgCo align-items-center  text-light gap-4 p-4">

          <div className="w-25 flex-shrink-0">
            <p className=" fs-2 text-uppercase fw-bold mb-0 me-4">
              Minhas redações
            </p>
            </div>

            <div className="flex-fill">
            <p className="fs-5 mb-0">
            Acesse, edite e acompanhe sua evolução em todas as redações já feitas.
            </p>
            </div>

          </div>

          <div className="d-flex bgPre align-items-center  text-light gap-4 p-4">

          <div className="w-25 flex-shrink-0">
            <p className="fs-2 text-uppercase fw-bold mb-0 me-4">
              Simulação/ corretor 
            </p>
          </div>

          <div className="flex-fill">
            <p className="fs-5 mb-0">
            Faça sua redação com tempo cronometrado e envie para correção e receba feedback detalhado sobre seu desempenho.
            </p>
            </div>


          </div>

          <div className="d-flex bgSig  text-light gap-4 p-4 align-items-center">

          <div className="w-25 flex-shrink-0">
            <p className="fs-2 text-uppercase fw-bold mb-0 me-4">
              Repertório
            </p>
          </div>

          <div className="flex-fill">
            <p className="fs-5 mb-0">
            Envie sua redação para correção e receba feedback detalhado sobre seu desempenho.             
            </p>
          </div>


          </div>


        </div>
      </div>
    </>
  );
};

export default Redacao;
