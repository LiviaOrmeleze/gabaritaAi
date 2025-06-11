import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import quadrado from "../assets/quadrado.png"; // Certifique-se de que o caminho da imagem está correto

import { Chart } from "react-google-charts";
import NewHeader from "../components/NewHeader";

function Desempenho() {
  const materias = [
    {
      nome: "Matemática",
      media: 7.8,
      porcentagem: "78%",
      melhora: "↑ 20% desde o início",
    },
    {
      nome: "Português",
      media: 8.5,
      porcentagem: "85%",
      melhora: "↑ 15% desde o início",
    },
    {
      nome: "História",
      media: 6.9,
      porcentagem: "69%",
      melhora: "↑ 10% desde o início",
    },
    {
      nome: "Química",
      media: 7.3,
      porcentagem: "73%",
      melhora: "↑ 18% desde o início",
    },
  ];

  const data = [
    ["Matéria", "Média"],
    ...materias.map((mat) => [mat.nome, mat.media]),
  ];

  const options = {
    title: "Desempenho por Matéria",
    hAxis: { title: "Matéria" },
    vAxis: { title: "Média" },
    legend: "none",
    colors: ["#76A7FA"],
  };

  return (
    <div
      className="fundo-principal p-4"
      style={{ backgroundColor: "#e7d7c9", minHeight: "100vh" }}
    >
      <NewHeader/>
      <h1
        className="titulo-principal pb-4"
        style={{ fontFamily: "Open Sans", fontWeight: "bold" }}
      >
        SEU DESEMPENHO
      </h1>

      <h3
        className="titulo-secundario fw-bold"
        
      >
        EVOLUÇÃO DO DESEMPENHO
      </h3>

      <p
        className="descricao"
        style={{ fontFamily: "Open Sans", fontWeight: "bold" }}
      >
        Acompanhe seu progresso nas principais matérias
      </p>

      <div className="d-flex flex-wrap gap-4 mb-5 justify-content-center">
        {materias.map((mat, index) => (
          <div
            key={index}
            className="card-desempenho position-relative"
            style={{ width: "300px", height: "200px", padding: "15px" }}
          >
            <img
              src={quadrado}
              alt="Fundo do card"
              className="img-fluid position-absolute top-0 start-0 w-100 h-100"
            />
            <div className="conteudo-card position-relative text-dark text-center d-flex flex-column align-items-start">
              <div
                className="nome-materia fw-bold mb-2"
                style={{ fontFamily: "Open Sans", fontWeight: "bold" }}
              >
                {mat.nome}
              </div>
              <div
                className="fw-semibold mb-2"
                style={{ fontFamily: "Open Sans", fontWeight: "bold" }}
              >
                Média atual
              </div>
              <div
                className="fs-3 fw-bold mb-3"
                style={{ fontFamily: "Open Sans", fontWeight: "bold" }}
              >
                {mat.porcentagem}
              </div>
              <div
                className="melhora"
                style={{
                  fontFamily: "Open Sans",
                  fontWeight: "bold",
                  color: "orange",
                  marginTop: "8px",
                }}
              >
                {mat.melhora}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grafico-placeholder">
        {/* Aqui vai o gráfico real depois */}
        Gráfico de desempenho (em construção)
        <Chart
          chartType="LineChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
      </div>
    </div>
  );
}

export default Desempenho;
