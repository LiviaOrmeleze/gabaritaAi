import React, { useState } from "react";

const Conectivos = () => {
  const [search, setSearch] = useState("");
  const [recentWords, setRecentWords] = useState([
    "Além disso",
    "Entretanto",
    "Portanto",
  ]);

  const popularWords = [
    "Assim",
    "Logo",
    "Contudo",
    "Por fim",
    "Todavia",
    "Ademais",
  ];

  const handleSearch = () => {
    if (search.trim() !== "" && !recentWords.includes(search)) {
      setRecentWords((prevWords) => [search, ...prevWords.slice(0, 9)]);
    }
    setSearch("");
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="text-uppercase fw-bold display-5 text-warning">
          Conectivos
        </h1>
        <p className="text-muted fs-5">
          Torne seus textos mais coesos e fluidos com conectivos ideais.
        </p>
      </div>

      {/* Campo de busca */}
      <div className="input-group mb-5">
        <input
          type="text"
          className="form-control form-control-lg rounded-start"
          placeholder="Digite um conectivo..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="btn btn-warning btn-lg px-4 rounded-end text-white"
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
            className="bg-warning text-white px-4 py-2 rounded-pill shadow-sm fw-semibold"
          >
            {word}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Conectivos;
