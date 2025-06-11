// import { useState } from "react";
import { useNavigate } from "react-router-dom"; 

export const useMateriasController = () => {
  const navigate = useNavigate();

  const abrirMateria = (materia) => {
    console.log("Abrindo matéria:", materia.nome); // Verifica o nome da matéria
    navigate(`/materia/${materia.nome.toLowerCase()}`); // Redireciona para a página da matéria
  };

  return { abrirMateria };
};
