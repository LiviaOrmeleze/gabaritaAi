import React, { useState, useEffect } from "react";
import foxLogo from "../assets/raposa.png"; // Caminho correto da imagem da raposa

const planos = [
  {
    nome: "MENSAL",
    preco: "R$ 25,90/mês",
    beneficios: [
      "Cronograma personalizado",
      "Seu desempenho",
      "Redação com IA",
    ],
  },
  {
    nome: "TRIMESTRAL",
    preco: "R$ 60,00 por 3 meses",
    beneficios: [
      "Cronograma personalizado",
      "Seu desempenho",
      "Correção de três redações com IA",
      "Acesso a análise de progresso trimestral",
    ],
  },
  {
    nome: "SEMESTRAL",
    preco: "R$ 110,50 por 6 meses",
    beneficios: [
      "Cronograma personalizado",
      "Seu desempenho",
      "Redação com IA",
      "Mentoria personalizada com dicas de estudo",
      "Simulados exclusivos",
    ],
  },
  {
    nome: "ANUAL",
    preco: "R$ 220,60 por 12 meses",
    beneficios: [
      "Cronograma personalizado e ajustável",
      "Seu desempenho detalhado",
      "Correção de dez redações por IA",
      "Mentoria personalizada",
      "Simulados exclusivos e desafios semanais",
      "Acesso a materiais premium",
    ],
  },
];

const Planos = () => {
  const [larguraFaixa, setLarguraFaixa] = useState("35%"); // Padrão para desktop

  useEffect(() => {
    const ajustarLargura = () => {
      setLarguraFaixa(window.innerWidth <= 768 ? "65%" : "35%"); // Mobile: 65%, Desktop: 35%
    };

    ajustarLargura();
    window.addEventListener("resize", ajustarLargura);
    return () => window.removeEventListener("resize", ajustarLargura);
  }, []);

  return (
    <div
      className="container-fluid py-5 min-vh-100 d-flex flex-column align-items-center"
      style={{
        backgroundColor: "#002147",
        fontFamily: "'Roboto Mono', monospace",
      }}
    >
      {/* FAIXA LARANJA RESPONSIVA */}
      <div
        style={{
          width: larguraFaixa,
          height: "50px",
          backgroundColor: "#df6d14",
          position: "absolute",
          left: "0",
          top: "80px",
          border: "4px solid #fff",
          borderRadius: "8px",
        }}
      >
        <div
          style={{
            width: "65px",
            height: "65px",
            backgroundColor: "#fff",
            borderRadius: "50%",
            border: "3px solid #fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            left: "5px",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <img
            src={foxLogo}
            alt="Raposa"
            style={{ width: "55px", height: "55px", objectFit: "contain" }}
          />
        </div>
        <h1
          className="fw-bold"
          style={{
            color: "#fff",
            fontSize: "2.4rem",
            fontFamily: "'Roboto Mono', monospace",
            position: "absolute",
            left: "80px",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          PREMIUM
        </h1>
      </div>

      {/* CARDS CORRETAMENTE ALINHADOS */}
      <div className="container mt-5" style={{ paddingTop: "140px" }}>
        <div className="row g-4 justify-content-center">
          {planos.slice(0, 3).map((plano, i) => (
            <div
              className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center"
              key={i}
            >
              <div
                className="card shadow-sm text-start px-3 py-2"
                style={{
                  borderRadius: "12px",
                  backgroundColor: "#e7d7c9",
                  width: "80%",
                  padding: "15px",
                }}
              >
                <h4
                  className="fw-bold text-center"
                  style={{
                    color: "#00897b",
                    fontSize: "1.6rem",
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  {plano.nome}
                </h4>
                <h5
                  className="fw-light text-center"
                  style={{ color: "#4e342e", fontSize: "0.9rem" }}
                >
                  {plano.preco}
                </h5>
                <hr
                  style={{
                    border: "1px solid #df6d14",
                    width: "100%",
                    margin: "6px auto",
                  }}
                />
                <ul className="list-unstyled text-center">
                  {plano.beneficios.map((beneficio, index) => (
                    <li
                      key={index}
                      style={{
                        color: "#4e342e",
                        fontSize: "1rem",
                        fontWeight: "500",
                      }}
                    >
                      {beneficio}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <button
                    className="btn fw-bold mt-3 px-3 py-2"
                    style={{
                      backgroundColor: "#302b2b",
                      color: "#fff",
                      borderRadius: "8px",
                    }}
                  >
                    EXPERIMENTE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ÚLTIMO CARD CENTRALIZADO ABAIXO */}
        <div className="row justify-content-center mt-4">
          {planos.slice(3).map((plano, i) => (
            <div
              className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center"
              key={i}
            >
              <div
                className="card shadow-sm text-start px-3 py-2"
                style={{
                  borderRadius: "12px",
                  backgroundColor: "#e7d7c9",
                  width: "80%",
                  padding: "15px",
                }}
              >
                <h4
                  className="fw-bold text-center"
                  style={{
                    color: "#00897b",
                    fontSize: "1.6rem",
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  {plano.nome}
                </h4>
                <h5
                  className="fw-light text-center"
                  style={{ color: "#4e342e", fontSize: "0.9rem" }}
                >
                  {plano.preco}
                </h5>
                <hr
                  style={{
                    border: "1px solid #df6d14",
                    width: "100%",
                    margin: "6px auto",
                  }}
                />
                <ul className="list-unstyled text-center">
                  {plano.beneficios.map((beneficio, index) => (
                    <li
                      key={index}
                      style={{
                        color: "#4e342e",
                        fontSize: "1rem",
                        fontWeight: "500",
                      }}
                    >
                      {beneficio}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <button
                    className="btn fw-bold mt-3 px-3 py-2"
                    style={{
                      backgroundColor: "#302b2b",
                      color: "#fff",
                      borderRadius: "8px",
                    }}
                  >
                    EXPERIMENTE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Planos;
