import { useState } from "react";
import { useNavigate } from "react-router"; 

export const useMateriasController = () => {
  const navigate = useNavigate();
  const [materiaSelecionada, setMateriaSelecionada] = useState(null);

  // Função para lidar com clique na matéria e redirecionar para seu formato de estudo
  const abrirMateria = (materia) => {
    console.log(`Matéria selecionada: ${materia.nome}`);
    setMateriaSelecionada(materia); // Salva a matéria selecionada

    // Navega para a página específica da matéria
    navigate(`/materia/${materia.nome.toLowerCase()}`);
  };

  return { materiaSelecionada, abrirMateria };
};