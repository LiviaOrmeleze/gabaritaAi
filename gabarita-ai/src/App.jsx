import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100 m-0 p-0">
      <BrowserRouter>
        <main className="flex-grow-1 d-flex flex-column">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
