import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Estudar from "./pages/Estudar";
import Planos from "./pages/Planos";
import Atualidades from "./pages/Atualidades";
import Desempenho from "./pages/Desempenho";
import Materias from "./pages/Materias";

import "./App.css";
import Home from "./pages/Home";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "./components/Header";
import "./scss/styles.scss";
import Dicionario from "./pages/Dicionario";
import Redacao from "./pages/Redacao";
import Significados from "./pages/Significados";
import Sinonimos from "./pages/Sinonimos";
import Conectivos from "./pages/Conectivos";
import Prepositivos from "./pages/Prepositivos";

import Escolha from "./pages/Escolha";
import Conheca from "./pages/Conheca";
import SaibaMais from "./pages/SaibaMais";
import Cronograma from "./pages/Cronograma";

const App = () => {
  return (
    <BrowserRouter>
      
      <main className="flex-grow-1 d-flex flex-column">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Dicionario" element={<Dicionario />} />
          <Route path="/Redacao" element={<Redacao />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/estudar" element={<Estudar />} />
          <Route path="/planos" element={<Planos />} />
          <Route path="/atualidades" element={<Atualidades />} />
          <Route path="/desempenho" element={<Desempenho />} />
          <Route path="/materias" element={<Materias />} />
          <Route path="/significados" element={<Significados />} />
          <Route path="/sinonimos" element={<Sinonimos />} />
          <Route path="/conectivos" element={<Conectivos />} />
          <Route path="/prepositivos" element={<Prepositivos />} />
          <Route path="/escolha" element={<Escolha />} />
          <Route path="/conhecanossosite" element={<Conheca />} />
          <Route path="/saibamais" element={<SaibaMais />} />
          <Route path="/cronograma" element={<Cronograma />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
