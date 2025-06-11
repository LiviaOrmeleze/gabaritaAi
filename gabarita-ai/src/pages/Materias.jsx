import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { useMateriasController } from "../components/MateriasController";

// Importação das imagens
import raposa from "../assets/raposa.png";
import biologia from "../assets/biologia.png";
import fisica from "../assets/fisica.png";
import quimica from "../assets/quimica.png";
import historia from "../assets/historia.png";
import geografia from "../assets/geografia.png";
import filosofia from "../assets/filosofia.png";
import sociologia from "../assets/sociologia.png";
import portugues from "../assets/portugues.png";
import literatura from "../assets/literatura.png";
import artes from "../assets/artes.png";
import ingles from "../assets/ingles.png";
import espanhol from "../assets/espanhol.png";
import matematica from "../assets/matematica.png";
import livros from "../assets/livros.png"; // Imagem de livros

const Materias = () => {
  const { abrirMateria } = useMateriasController(); // Usando o controller

  const materias = {
    Matemática: [{ nome: "Matemática", imagem: matematica }],
    "Ciências da Natureza": [
      { nome: "Biologia", imagem: biologia },
      { nome: "Física", imagem: fisica },
      { nome: "Química", imagem: quimica },
    ],
    "Ciências Humanas": [
      { nome: "História", imagem: historia },
      { nome: "Geografia", imagem: geografia },
      { nome: "Filosofia", imagem: filosofia },
      { nome: "Sociologia", imagem: sociologia },
    ],
    Linguagens: [
      { nome: "Português", imagem: portugues },
      { nome: "Literatura", imagem: literatura },
      { nome: "Artes", imagem: artes },
      { nome: "Inglês", imagem: ingles },
      { nome: "Espanhol", imagem: espanhol },
    ],
  };

  return (
    <>
      {/* Topo */}
      <div className="topo-container">
        <img src={raposa} alt="Raposa" className="raposa" />
        <h1 className="titulo-logo">GABARITA AI</h1>
      </div>

      <div className="container">
        {/* Faixa Laranja Responsiva */}
        <div className="faixa-container">
          <div className="faixa-laranja">
            <span>
              Confira o conteúdo de apoio, exercícios e temas abordados em cada
              disciplina.
            </span>
            <img src={livros} alt="Livros" className="imagem-livros" />
          </div>
        </div>

        {/* Seções de matérias */}
        {Object.entries(materias).map(([titulo, lista]) => (
          <div key={titulo} className="materia-container">
            <h2 className="titulo-materia">{titulo}</h2>
            <div className="materia-grid">
              {lista.map((materia, index) => (
                <button
                  key={index}
                  className="materia-btn"
                  onClick={() => abrirMateria(materia)} // Redireciona para a página da matéria
                >
                  <img
                    src={materia.imagem}
                    alt={materia.nome}
                    className="materia-img"
                  />
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Materias;
