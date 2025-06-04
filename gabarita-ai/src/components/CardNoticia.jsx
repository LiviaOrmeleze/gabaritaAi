import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css"; // Importando os ícones

import "../App.css";

// Função para calcular o tempo de publicação
const calcularTempoPublicacao = (data) => {
  const dataPublicacao = new Date(Date.parse(data));
  const dataAtual = new Date();

  if (isNaN(dataPublicacao)) return "Data inválida"; // Proteção contra erros

  const diferencaDias = Math.floor(
    (dataAtual - dataPublicacao) / (1000 * 60 * 60 * 24)
  );

  if (diferencaDias === 0) return "Publicado hoje";
  if (diferencaDias === 1) return "Publicado ontem";
  return `Publicado há ${diferencaDias} dias`;
};

// Componente de Notícia
const CardNoticia = ({ category, imgSrc, title, summary, date, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="border rounded p-3 card-noticia text-decoration-none"
      style={{
        minHeight: "220px",
        backgroundColor: "#ffffff", // Fundo branco
        display: "block",
        color: "inherit",
        cursor: "pointer",
        transition: "0.3s ease-in-out",
      }}
    >
      {imgSrc && (
        <img
          src={imgSrc}
          className="card-img-top"
          alt={title}
          style={{
            borderRadius: "8px",
            width: "100%",
            height: "180px" /* Reduzindo a altura da imagem */,
            objectFit: "cover",
            marginBottom: "12px" /* Adicionando espaçamento abaixo da imagem */,
          }}
        />
      )}

      {/* Categoria oval menor com espaçamento ajustado */}
      <div
        className="d-flex align-items-center justify-content-center mb-2"
        style={{ gap: "170px" }}
      >
        <div
          className="noticia-badge badge-category text-dark fw-bold d-flex align-items-center"
          style={{
            backgroundColor: "#e7d7c9", // Cor de fundo ajustada
            borderRadius: "8px",
            padding: "1px 5px",
            fontSize: "0.75rem",
            border: "1px solid #4e342e",
          }}
        >
          {category}
        </div>
        <div className="d-flex align-items-center text-muted">
          <i className="bi bi-clock"></i>{" "}
          {/* Ícone de relógio do Bootstrap Icons */}
          <span className="ms-1">{calcularTempoPublicacao(date)}</span>
        </div>
      </div>

      <div className="card-body text-center">
        <h6>{title}</h6> {/* Segundo título normal */}
        <p>{summary}</p>
        <small className="text-muted">{date}</small> {/* Data abaixo */}
      </div>
    </a>
  );
};

export default CardNoticia;
