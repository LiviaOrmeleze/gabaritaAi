import React from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";

const imagens = [img1, img2, img3, img4, img5, img6];

const conteudos = [
  {
    titulo: "Redação Nota 1000",
    texto:
      "Aprenda a estruturar uma redação impecável, veja exemplos de textos nota máxima e entenda o que os corretores esperam de você no Enem e nos vestibulares.",
  },
  {
    titulo: "Simulados e Questões",
    texto:
      "Pratique com questões de provas anteriores do Enem e vestibulares de todo o Brasil. Os simulados ajudam a testar seus conhecimentos e identificar quais assuntos precisam de mais atenção.",
  },
  {
    titulo: "Material de Estudo",
    texto:
      "Tenha acesso a apostilas, resumos e mapas mentais organizados por matéria. Nosso conteúdo é feito para simplificar sua jornada de estudos e tornar o aprendizado mais eficiente.",
  },
  {
    titulo: "Aulas e Vídeos",
    texto:
      "Tenha explicações detalhadas sobre os temas mais cobrados nas provas. Com materiais didáticos e vídeos interativos, você pode revisar o conteúdo de forma dinâmica e sem complicação.",
  },
  {
    titulo: "Dicas de Estudo",
    texto:
      "Aprenda métodos comprovados para melhorar seu desempenho, como técnicas de memorização, organização do tempo e estratégias para lidar com a ansiedade na hora da prova.",
  },
  {
    titulo: "Planejamento de Estudos",
    texto:
      "Saiba como montar um cronograma de estudos personalizado, equilibrando todas as matérias e reservando tempo para revisões e descanso, para garantir constância nos resultados.",
  },
];

const Estudar = () => (
  <div
    className="container-fluid py-4 min-vh-100"
    style={{ backgroundColor: "#e7d7c9", fontFamily: "Poppins, sans-serif" }}
  >
    {/* TÍTULO PRINCIPAL */}
    <div className="text-center mb-4">
      <h1 className="fw-bold display-4" style={{ color: "#4e342e", fontSize: "2.8rem" }}>
        ESTUDE COM A GENTE!
      </h1>
      <p className="lead fs-4" style={{ color: "#4e342e", fontSize: "1.4rem" }}>
        Descubra os melhores conteúdos para se dar bem no vestibular!
      </p>
    </div>

    {/* CONTEÚDOS */}
    <div className="container">
      <div className="row g-4">
        {conteudos.map((item, i) => (
          <div className="col-lg-4 col-md-6 col-sm-12" key={i}>
            <div className="card shadow-lg h-100 text-center" style={{ borderRadius: "15px" }}>
              <div className="card-header text-white d-flex align-items-center justify-content-center" style={{ backgroundColor: "#df6d14" }}>
                <img
                  src={imagens[i]}
                  alt={item.titulo}
                  className="me-3"
                  style={{ width: "60px", height: "60px", objectFit: "contain" }}
                />
                <h4 className="fw-bold m-0 flex-grow-1" style={{ fontSize: "1.6rem" }}>{item.titulo}</h4>
              </div>
              <div className="card-body d-flex flex-column justify-content-center text-center">
                <p className="text-dark" style={{ color: "#4e342e", fontSize: "1.1rem" }}>{item.texto}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MENSAGEM FINAL */}
      <div className="text-center mt-5">
        <h4 className="fw-bold fs-3" style={{ color: "#4e342e", fontSize: "1.6rem" }}>
          Aproveite ao Máximo!
        </h4>
        <p 
          className="fs-6 mx-auto" 
          style={{ 
            maxWidth: "1000px", 
            color: "#4e342e", 
            fontSize: "0.9rem", 
            whiteSpace: "nowrap", 
            overflow: "hidden", 
            textOverflow: "ellipsis" 
          }}
        >
          Monitore seu progresso e melhore seu desempenho com resumos e atividades personalizadas. 
          Use os recursos disponíveis para otimizar seus estudos e alcançar melhores resultados.
        </p>
      </div>
    </div>
  </div>
);

export default Estudar;