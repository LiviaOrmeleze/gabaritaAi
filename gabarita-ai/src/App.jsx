import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';  
import "bootstrap/dist/js/bootstrap.min.js";

import Escolha from "./pages/Escolha";
import Conheca from "./pages/Conheca";
import SaibaMais from "./pages/SaibaMais";
import Cronograma from "./pages/Cronograma";

const App = () => {

  return (
    <BrowserRouter>
      <main className="flex-grow-1 d-flex flex-column">
      <Routes>
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