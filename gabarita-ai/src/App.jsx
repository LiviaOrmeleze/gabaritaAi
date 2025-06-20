import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import PaginaPrincipal from "./pages/PaginaPrincipal";
import Planos from "./pages/Planos";
import Atualidades from "./pages/Atualidades";
import Desempenho from "./pages/Desempenho";
import Materias from "./pages/Materias";
import Disciplinas from "./pages/Disciplinas";

import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./scss/styles.scss";
import Dicionario from "./pages/Dicionario";
import Redacao from "./pages/Redacao";
import Significados from "./pages/Significados";
import Sinonimos from "./pages/Sinonimos";
import Conectivos from "./pages/Conectivos";
import Prepositivos from "./pages/Prepositivos";
import Conheca from "./pages/Conheca";
import Cronograma from "./pages/Cronograma";
import SimuladorECorrecao from "./pages/SimuladorECorrecao";


import Cartao from "./pages/Cartao";
import FinalizaPagamento from "./pages/FinalizaPagamento";
import Perfil from "./pages/Perfil";

const App = () => {
  return (
    <BrowserRouter>
      <main className="flex-grow-1 d-flex flex-column">
        <Routes>
          <Route path="/" element={<PaginaPrincipal />} />
          <Route path="/Dicionario" element={<Dicionario />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/planos" element={<Planos />} />
          <Route path="/atualidades" element={<Atualidades />} />
          <Route path="/desempenho" element={<Desempenho />} />
          <Route path="/materias" element={<Materias />} />
          <Route path="/significados" element={<Significados />} />
          <Route path="/sinonimos" element={<Sinonimos />} />
          <Route path="/conectivos" element={<Conectivos />} />
          <Route path="/prepositivos" element={<Prepositivos />} />
          <Route path="/conhecanossosite" element={<Conheca />} />
          <Route path="/disciplinas" element={<Disciplinas />} />
          <Route path="/cronograma" element={<Cronograma />} />
          <Route path="/redacao" element={<Redacao />} />
          <Route path="simuladorecorrecao" element={<SimuladorECorrecao />} />
          <Route path="/cartao" element={<Cartao />} />
          <Route path="/finalizar-pagamento" element={<FinalizaPagamento />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
