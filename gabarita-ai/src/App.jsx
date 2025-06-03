import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';  
import "bootstrap/dist/js/bootstrap.min.js";

import Escolha from "./pages/Escolha";
import Conheca from "./pages/Conheca";
import SaibaMais from "./pages/SaibaMais";

import MesView from "./components/MesView";
import SemanaView from "./components/SemanaView";
import DiaView from "./components/DiaView";
import { useState } from "react";
import HeaderCalendario from "./components/HeaderCalendario";
import { eventosEstudo } from "./data/eventos"


const App = () => {
  const [visualizacao, setVisualizacao] = useState("mes")
  const [mesAtual, setMesAtual] = useState("Junho")

  const handleChangeView = (view) => {
    setVisualizacao(view)
  }

  const handlePrevious = () => {
    // Lógica para navegar para o mês/semana/dia anterior
    console.log("Anterior")
  }

  const handleNext = () => {
    // Lógica para navegar para o próximo mês/semana/dia
    console.log("Próximo")
  }

  return (
    <div className="d-flex flex-column min-vh-100 m-0 p-0">
      <BrowserRouter>

      <main className="flex-grow-1 d-flex flex-column">
      <Routes>
        <Route path="/escolha" element={<Escolha/>} />
        <Route path="/conhecanossosite" element={<Conheca/>} />
        <Route path="/saibamais" element={<SaibaMais/>} />
      </Routes>
      </main>
      
      <div className="calendario-container">

      <HeaderCalendario
        mesAtual={mesAtual}
        onChangeView={handleChangeView}
        visualizacaoAtual={visualizacao}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />

      {visualizacao === "mes" && <MesView eventos={eventosEstudo} />}
      {visualizacao === "semana" && <SemanaView eventos={eventosEstudo} />}
      {visualizacao === "dia" && <DiaView eventos={eventosEstudo} />}
    </div>
      </BrowserRouter>

    </div>
  )
}

export default App


