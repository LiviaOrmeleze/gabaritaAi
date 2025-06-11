import React from "react";
import livros from "../assets/livros1.png";
import logo from "../assets/raposa.png";
// import mulher from "../assets/mulher.png";
import ListaRedacao from "../components/ListaRedacao";

const Redacao = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center min-vh-100  ">
        <div></div>

        <div className="d-flex flex-column rounded-5 border border-black border-2  top-50 p-4 ms-5">
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
        </div>
      </div>
    </>
  );
};

export default Redacao;
