import React, { useState } from "react";
import HeaderCalendario from "../components/HeaderCalendario";
import MesView from "../components/MesView";
import SemanaView from "../components/SemanaView";
import DiaView from "../components/DiaView";
import { eventosEstudo } from "../data/eventos";


import logo from "../assets/logo.png";

const Cronograma = () => {
  const [visualizacao, setVisualizacao] = useState("mes");
  const [mesAtual, setMesAtual] = useState("Junho");

  const handleChangeView = (view) => {
    setVisualizacao(view);
  };

  const handlePrevious = () => {
    console.log("Anterior");
  };

  const handleNext = () => {
    console.log("Próximo");
  };

  return (
    <div className="fundocalendario py-5">

      <div className="px-5 ms-5">
              <div className='d-flex justify-content-center justify-content-md-start gap-2 px-0 mb-4'>
                <img src={logo} alt='' height={50} width={50}/> 
                <p className='text-uppercase m-2 fst-italic font-open-sans-bold logocalendario mt-3'>Gabarita ai</p>
              </div> 

           
          <p className="fs-4 text-uppercase titulocronograma">Cronograma</p>

      <HeaderCalendario
        mesAtual={mesAtual}
        onChangeView={handleChangeView}
        visualizacaoAtual={visualizacao}
        onPrevious={handlePrevious}
        onNext={handleNext}
        />
        </div>
    <div className="container calendario-container py-4 textocalendario min-vh-100 rounded-5">
      {visualizacao === "mes" && <MesView eventos={eventosEstudo} />}
      {visualizacao === "semana" && <SemanaView eventos={eventosEstudo} />}
      {visualizacao === "dia" && <DiaView eventos={eventosEstudo} />}
    </div>
        </div>
  );
};

export default Cronograma;