
import React from 'react'
import { useParams } from "react-router-dom";
import MatematicaStudy from '../components/MatematicaStudy';

const MateriaEspecificaOf = (props) => {
    const { nome } = useParams(); // Obtém o nome da matéria da URL

    return (
      <div className="container">
        <h3 className="mt-5 text-capitalize textocalendario titulo-materia">   Matéria / {nome}</h3>
      <MatematicaStudy />   
      </div>
      
  )
}

export default MateriaEspecificaOf

