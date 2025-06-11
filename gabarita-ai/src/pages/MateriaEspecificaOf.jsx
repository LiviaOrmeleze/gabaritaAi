import React from "react";
import { useParams } from "react-router-dom";
import StudyContent from "../components/StudyContent";

const MateriaEspecificaOf = () => {
  const { nome } = useParams(); // Obtém o nome da matéria da URL

  console.log("Parâmetro nome:", nome); // Verifica o valor de nome

  return (
    <div className="container mb-5">
      <h3 className="mt-5 text-capitalize textocalendario titulo-materia">
        Matéria / {nome}
      </h3>
      <StudyContent subjectName={nome} />
    </div>
  );
};

export default MateriaEspecificaOf;
