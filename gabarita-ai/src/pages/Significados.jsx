import React, { useState } from "react";

const Significados = () => {
  const [search, setSearch] = useState("");
  const [recentWords, setRecentWords] = useState([
    "Efêmero",
    "Resiliente",
    "Serendipidade",
  ]);
  const popularWords = [
    "Pragmático",
    "Ambíguo",
    "Empatia",
    "Ubiquidade",
    "Objetivo",
    "Estético",
  ];

  const palavraDoDia = {
    palavra: "Perspicaz",
    definicao:
      "Pessoa que percebe as coisas com rapidez e clareza; sagaz, inteligente.",
  };

  const handleSearch = () => {
    if (search && !recentWords.includes(search)) {
      setRecentWords([search, ...recentWords.slice(0, 9)]);
    }
    setSearch("");
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="text-uppercase fw-bold display-5 text-primary">
          Significados
        </h1>
        <p className="text-muted fs-5">
          Descubra o que as palavras realmente querem dizer.
        </p>
      </div>

      {/* Palavra do Dia */}
      <div className="card bg-light shadow-sm p-4 mb-5">
        <h4 className="text-primary fw-bold">Palavra do Dia</h4>
        <h2 className="fw-bold">{palavraDoDia.palavra}</h2>
        <p className="text-muted">{palavraDoDia.definicao}</p>
      </div>

      {/* Campo de busca */}
      <div className="input-group mb-5">
        <input
          type="text"
          className="form-control form-control-lg rounded-start"
          placeholder="Digite uma palavra..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="btn btn-primary btn-lg px-4 rounded-end"
          onClick={handleSearch}
        >
          Buscar
        </button>
      </div>

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

      <h5 className="text-secondary mb-3">Palavras Mais Utilizadas</h5>
      <div className="d-flex flex-wrap gap-3">
        {popularWords.map((word, idx) => (
          <div
            key={idx}
            className="bg-primary text-white px-4 py-2 rounded-pill shadow-sm fw-semibold"
          >
            {word}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Significados;
