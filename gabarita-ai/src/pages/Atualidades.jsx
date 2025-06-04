import React from "react";
import Cabecalho from "../components/Cabecalho";
import TituloSecao from "../components/TituloSecao";
import CardEvento from "../components/CardEvento";
import CardNoticia from "../components/CardNoticia";
import Rodape from "../components/Rodape";

import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Folha from "../assets/folha.png";
import Mulher from "../assets/Mulher.png";
import Vacina from "../assets/vacina.png";
import Onibus from "../assets/periferia.jpg";
import Cronograma from "../assets/cronograma.png";

const Atualidades = () => {
  const noticias = [
    {
      category: "ENEM",
      imgSrc: Mulher,
      title: "Novo Edital do ENEM",
      summary: "Confira as novidades do exame deste ano.",
      date: "27/05/2025",
      link: "https://www.gov.br/inep/pt-br/assuntos/noticias/enem/edital-do-enem-2025-publicado", // Link para a matéria
    },
    {
      category: "CIÊNCIA",
      imgSrc: Vacina,
      title: "Descoberta Científica",
      summary: "Avanço revolucionário em física.",
      date: "25/05/2025",
      link: "https://www.nexojornal.com.br/externo/2025/04/04/ciencia-descoberta-cientifica-energia-escura", // Link para a matéria
    },
    {
      category: "REPERTÓRIO",
      imgSrc: Onibus,
      title: "Educação na Periferia",
      summary: "Existe acesso à educação nas periferias?",
      date: "24/05/2025",
      link: "https://blog.institutoalicerceedu.org.br/existe-acesso-a-educacao-nas-periferias/", // Link para a matéria
    },
  ];

  const eventos = [
    {
      category: "UFG",
      title: "Inscrições até 10/06/2025",
      summary: "Mais detalhes sobre o vestibular.",
      date: "10/06/2025",
    },
    {
      category: "UEG",
      title: "Chamada de lista em 15/06/2025",
      summary: "Última fase do processo seletivo.",
      date: "15/06/2025",
    },
    {
      category: "UDESC",
      title: "Pré-matrícula em 20/06/2025",
      summary: "Atenção para os prazos!",
      date: "20/06/2025",
    },
    {
      category: "USP",
      title: "Provas em 30/06/2025",
      summary: "Prepare-se para a fase decisiva!",
      date: "30/06/2025",
    },
  ];

  return (
    <div
      className="w-100 min-vh-100 fundo-principal"
      style={{ backgroundColor: "#e7d7c9" }} // Alterando o fundo da página
    >
      <Cabecalho />

      {/* Título com faixa verde translúcida */}
      <TituloSecao titulo="Notícias e Atualidades" imgSrc={Folha} />

      <div className="container my-4">
        <div className="row g-3 justify-content-center" style={{ gap: "20px" }}>
          {noticias.map((noticia, idx) => (
            <div className="col-auto d-flex justify-content-center" key={idx}>
              <CardNoticia {...noticia} />
            </div>
          ))}
        </div>
      </div>

      {/* Título com faixa verde translúcida */}
      <TituloSecao titulo="Próximos Eventos" imgSrc={Cronograma} />

      <div className="container my-4">
        <div className="row g-3 justify-content-center" style={{ gap: "20px" }}>
          {eventos.map((evento, idx) => (
            <div className="col-auto d-flex justify-content-center" key={idx}>
              <CardEvento {...evento} />
            </div>
          ))}
        </div>
      </div>

      <Rodape />
    </div>
  );
};

export default Atualidades;
