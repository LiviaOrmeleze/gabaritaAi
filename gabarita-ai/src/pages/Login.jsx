import "../App.css";
import { Link } from "react-router";

const Login = () => {
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
          <h2 className="text-center mb-4 text-light">ENTRA.AI</h2>
          <form>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Nome" />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Email ou telefone" />
            </div>
            <div className="mb-3">
              <input type="password" className="form-control" placeholder="Senha" />
            </div>
            <button className="btn btn-warning w-100">ENTRAR</button>
          </form>
          <p className="mt-3 text-center text-light">
            Ainda não tem conta? <Link to="/cadastro" className="text-info">Cadastre-se aqui</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
