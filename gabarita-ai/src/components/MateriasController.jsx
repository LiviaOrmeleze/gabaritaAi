import { useState } from "react";
import { useNavigate } from "react-router"; 

export const useMateriasController = () => {
  const navigate = useNavigate();
  const [materiaSelecionada, setMateriaSelecionada] = useState(null);

  // Função para lidar com clique na matéria e redirecionar para seu formato de estudo
  const abrirMateria = (materia) => {
    console.log(`Matéria selecionada: ${materia.nome}`);
    setMateriaSelecionada(materia); // Salva a matéria selecionada
    navigate(`/materia/${materia.nome.toLowerCase()}`); // Redireciona para a página da matéria
  };

  return { materiaSelecionada, abrirMateria };
};
