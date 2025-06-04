import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Estudar from "./pages/Estudar";
import Planos from "./pages/Planos";
import Atualidades from "./pages/Atualidades";
import Desempenho from "./pages/Desempenho";
import Materias from "./pages/Materias";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/estudar" element={<Estudar />} />
          <Route path="/planos" element={<Planos />} />
          <Route path="/atualidades" element={<Atualidades />} />
          <Route path="/desempenho" element={<Desempenho />} />
          <Route path="/materias" element={<Materias />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
