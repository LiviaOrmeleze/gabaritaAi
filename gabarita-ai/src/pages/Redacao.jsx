import React from "react";
import livros from "../assets/livros1.png";
import logo from "../assets/raposa.png";
// import mulher from "../assets/mulher.png";
import ListaRedacao from "../components/ListaRedacao";

import NewHeader from "../components/NewHeader";
import mulher from "../assets/mulherescrevendo.png";

const Redacao = () => {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100  ">
      <div></div>

      <div className="d-flex flex-column rounded-5 border border-black border-2  top-50 p-4 ms-5">
        <div className="d-flex  justify-content-start  p-3 mb-4">
          <img src={logo} alt="" height={50} width={50} />
          <p className="text-uppercase m-3 fst-italic font-open-sans-bold fonteGaba">
            Gabarita ai
          </p>
        </div>
        <NewHeader />
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            minHeight: "80vh", // Altura mínima para centralizar o conteúdo
          }}
        >
          <div className="d-flex flex-column rounded-5 border border-black border-2  top-50 p-4 ms-5 infDiRe">
            <p
              className="fs-3 fw-bold fonteGaba text-uppercase text-dark"
              style={{ letterSpacing: "5px" }}
            >
              Dicionário
            </p>
            <p className="fs-4">Tire suas dúvidas e aumente seu repertório!</p>
            <div className="d-flex justify-content-center align-items-center">
              {/* Corrigido: Apenas um src e alt por tag <img> */}
              <img
                className="img-fluid"
                src={livros}
                alt="Livros"
                width={200}
                height={200}
              />
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
            <ListaRedacao
              description="Veja o modelo ideal de redação para cada vestibular e aprenda a organizá-la corretamente."
              title={<h4>Estrutura</h4>}
              bgClass="bgSig"
              link="/estrutura"
            />
            <ListaRedacao
              description="Encontre sugestões de temas baseados em provas anteriores e questões atuais."
              title={<h4>Temas</h4>}
              bgClass="bgSin"
              link="/temas"
            />
            <ListaRedacao
              description="Acesse, edite e acompanhe sua evolução em todas as redações já feitas."
              title={<h4>Minhas Redações</h4>}
              bgClass="bgCo"
              link="/minhasredacoes"
            />
            <ListaRedacao
              description="Faça sua redação com tempo cronometrado e envie para correção e receba feedback detalhado sobre seu desempenho."
              title={<h4>Simulador e Corretor</h4>}
              bgClass="bgPre"
              link="/simuladorecorrecao"
            />
            <ListaRedacao
              description="Envie sua redação para correção e receba feedback detalhado sobre seu desempenho."
              title={<h4>Repertório</h4>}
              bgClass="bgPre"
              link="/repertorio"
            />
            <div className="d-flex bgSig  align-items-center text-light gap-4 p-4 ">
              <div className="w-25 flex-shrink-0">
                <p className="fs-2 text-uppercase fw-bold  mb-0 me-4">
                  Estrutura
                </p>
              </div>

              <div className="flex-fill">
                <p className="fs-5 mb-0">
                  Veja o modelo ideal de redação para cada vestibular e aprenda a
                  organizá-la corretamente.
                </p>
              </div>
            </div>

            <div className="d-flex bgSin  align-items-center text-light gap-4 p-4">
              <div className="w-25 flex-shrink-0">
                <p className="fs-2 text-uppercase fw-bold mb-0 me-4">Temas</p>
              </div>

              <div className="flex-fill">
                <p className="fs-5 mb-0">
                  Encontre sugestões de temas baseados em provas anteriores e
                  questões atuais.
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
                  Acesse, edite e acompanhe sua evolução em todas as redações já
                  feitas.
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
                  Faça sua redação com tempo cronometrado e envie para correção e
                  receba feedback detalhado sobre seu desempenho.
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
                  Envie sua redação para correção e receba feedback detalhado
                  sobre seu desempenho.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Redacao;
