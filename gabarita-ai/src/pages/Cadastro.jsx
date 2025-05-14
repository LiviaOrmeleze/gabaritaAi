import "../App.css";
import { Link } from "react-router";

const Cadastro = () => {
  return (
    <div className="container-fluid d-flex login-container">
      <div className="left-side">
        <div className="circle-bg"></div>
        <div className="fox-content">
          <h1 className="project-title">GABARITA AI</h1>
          <img src="/raposa.png" alt="Raposa" className="fox-img" />
        </div>
      </div>

      <div className="right-side d-flex align-items-center justify-content-center">
        <div className="form-box">
          <h2 className="text-center text-light mb-4">CADASTRA.AI</h2>
          <form>
            <div className="mb-3">
              <label className="form-label text-light">Nome</label>
              <input type="text" className="form-control" placeholder="Digite seu nome" />
            </div>
            <div className="mb-3">
              <label className="form-label text-light">Email ou Telefone</label>
              <input type="text" className="form-control" placeholder="Digite seu email ou telefone" />
            </div>
            <div className="mb-3">
              <label className="form-label text-light">Senha</label>
              <input type="password" className="form-control" placeholder="Crie sua senha" />
            </div>
            <button type="submit" className="btn btn-warning w-100">CADASTRAR</button>
          </form>
          <p className="mt-3 text-center text-light">
            Já tem uma conta? <Link to="/" className="link-light">Entre aqui</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
