import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css"; // Ícones do Bootstrap

import "../App.css";

const CardEvento = ({ category, imgSrc, title, summary, date }) => {
  return (
    <div
      className="border rounded p-3 card-evento text-white"
      style={{
        backgroundColor: "#00897b",
        height: "270px",
        width: "270px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "8px", // Adicionando espaço entre os cards
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
            height: "120px",
            objectFit: "cover",
          }}
        />
      )}

      {/* Categoria oval menor com botão de lembrete ao lado */}
      <div className="d-flex align-items-center justify-content-between w-100 px-2 mb-2">
        <div
          className="evento-badge badge-category fw-bold d-flex align-items-center"
          style={{
            backgroundColor: "#e7d7c9",
            borderRadius: "8px",
            padding: "1px 4px",
            fontSize: "0.6rem",
            border: "1px solid #4e342e",
            color: "#4e342e",
          }}
        >
          {category}
        </div>
        <button
          className="btn btn-light btn-sm"
          style={{
            borderRadius: "50%",
            padding: "5px 8px",
            fontSize: "0.9rem",
          }}
          title="Salvar como lembrete"
        >
          <i className="bi bi-plus-lg"></i>
        </button>
      </div>

      <div className="card-body text-center">
        <h6
          className="fw-bold"
          style={{ fontSize: "0.9rem", marginBottom: "5px" }}
        >
          {title}
        </h6>
        <p className="m-0" style={{ fontSize: "1rem" }}>
          {summary}
        </p>
        <small
          className="text-white d-block"
          style={{ fontSize: "0.9rem", marginTop: "8px" }}
        >
          {date}
        </small>

        {/* Informações extras do evento organizadas */}
        <div className="mt-3 text-sm">
          <p className="m-0" style={{ fontSize: "0.9rem" }}>
            <strong>Inscrições:</strong> De 1º a 3 de abril de 2025.
          </p>
          <p className="m-0" style={{ fontSize: "0.9rem" }}>
            UFG - Vestibular 2025/2
          </p>
          <p className="m-0" style={{ fontSize: "0.9rem" }}>
            Universidade Federal de Goiás
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardEvento;
