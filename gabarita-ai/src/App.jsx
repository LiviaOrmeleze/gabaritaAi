import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';  
import "bootstrap/dist/js/bootstrap.min.js";

import Escolha from "./pages/Escolha";
import Conheca from "./pages/Conheca";

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100 m-0 p-0">
      <BrowserRouter>

      <main className="flex-grow-1 d-flex flex-column">
      <Routes>
        <Route path="/escolha" element={<Escolha/>} />
        <Route path="/conhecanossosite" element={<Conheca/>} />
      </Routes>
      </main>

      
      </BrowserRouter>
    </div>
  )
}

export default App
