import React, { useState } from "react";

const Prepositivos = () => {
  const [search, setSearch] = useState("");
  const [recentWords, setRecentWords] = useState([
    "Apesar de",
    "Por causa de",
    "Em frente a",
  ]);
  const popularWords = [
    "A fim de",
    "Antes de",
    "Depois de",
    "Durante",
    "Entre",
    "Para com",
  ];

  const palavraDoDia = {
    palavra: "Mediante",
    definicao:
      "Indica meio ou instrumento pelo qual algo é realizado; por meio de.",
  };

  const handleSearch = () => {
    if (search.trim() !== "" && !recentWords.includes(search)) {
      setRecentWords((prevWords) => [search, ...prevWords.slice(0, 9)]);
    }
    setSearch("");
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="text-uppercase fw-bold display-5 text-dark">
          Prepositivos
        </h1>
        <p className="text-muted fs-5">
          Construa frases mais claras usando as preposições corretas.
        </p>
      </div>

      {/* Palavra do Dia */}
      <div className="card bg-light shadow-sm p-4 mb-5">
        <h4 className="text-dark fw-bold">Palavra do Dia</h4>
        <h2 className="fw-bold">{palavraDoDia.palavra}</h2>
        <p className="text-muted">{palavraDoDia.definicao}</p>
      </div>

      {/* Campo de busca */}
      <div className="input-group mb-5">
        <input
          type="text"
          className="form-control form-control-lg rounded-start"
          placeholder="Digite uma preposição ou locução..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="btn btn-dark btn-lg px-4 rounded-end"
          onClick={handleSearch}
        >
          Buscar
        </button>
      </div>

      {/* Buscas Recentes */}
      <h5 className="text-secondary mb-3">Buscas Recentes</h5>
      <div className="d-flex flex-wrap gap-2 mb-4">
        {recentWords.map((word, idx) => (
          <span
            key={idx}
            className="badge bg-light text-dark border px-3 py-2 rounded-pill shadow-sm"
          >
            {word}
          </span>
        ))}
      </div>

      {/* Palavras Mais Utilizadas */}
      <h5 className="text-secondary mb-3">Palavras Mais Utilizadas</h5>
      <div className="d-flex flex-wrap gap-3">
        {popularWords.map((word, idx) => (
          <div
            key={idx}
            className="bg-dark text-white px-4 py-2 rounded-pill shadow-sm fw-semibold"
          >
            {word}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prepositivos;
