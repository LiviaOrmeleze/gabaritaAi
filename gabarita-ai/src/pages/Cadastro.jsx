import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import raposa from "../assets/raposa.png"; // Certifique-se de que o caminho está correto

const Cadastro = () => {
  const [email, setEmail] = useState(""); // Estado para armazenar o e-mail
  const [password, setPassword] = useState(""); // Estado para armazenar a senha
  const navigate = useNavigate();

  const cadastro = async (e) => {
    e.preventDefault(); // Evita o reload da página
    const userData = {
      email,
      password,
    };
    try {
      const response = await fetch(
        "https://gabaritaai.somee.com/Users/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            accept: "*/*",
          },
          body: JSON.stringify(userData),
        }
      );

      if (response.ok) {
        // Salva o email no localStorage
        localStorage.setItem("userEmail", email);
        // Redireciona para a Home
        navigate("/");
      } else {
        const errorData = await response.json();
        alert(`Erro ao cadastrar: ${errorData.message || "Erro desconhecido"}`);
      }
    } catch (error) {
      alert(`Erro ao conectar ao servidor: ${error.message}`);
    }
  };

  return (
    <div
      className="d-flex vh-100"
      style={{ backgroundColor: "#0D1B2A", fontFamily: "'Nunito', sans-serif" }}
    >
      {/* Lado esquerdo - Raposa e fundo oval */}
      <div
        className="d-flex flex-column align-items-center justify-content-center position-relative"
        style={{ width: "50%", textAlign: "center" }}
      >
        {/* Forma oval aprimorada - altura total */}
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "90%",
            height: "100vh",
            backgroundColor: "#009688",
            borderTopRightRadius: "65% 100%",
            borderBottomRightRadius: "65% 100%",
            zIndex: 0,
          }}
        ></div>

        {/* Texto ajustado sem sombra, menor e centralizado */}
        <h1
          className="fw-bold position-relative"
          style={{
            fontSize: "2.5rem",
            zIndex: 1,
            backgroundImage: "linear-gradient(to right, #FF5722, #FF9800)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            position: "relative",
            top: "20px",
          }}
        >
          CADASTRA.AI
        </h1>

        {/* Raposa maior e centralizada */}
        <img
          src={raposa}
          alt="Mascote de Raposa"
          className="img-fluid mt-4 position-relative"
          style={{
            maxWidth: "480px",
            maxHeight: "480px",
            zIndex: 1,
            position: "relative",
            top: "30px",
          }}
        />
      </div>

      {/* Lado direito - Formulário */}
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ width: "50%", padding: "40px" }}
      >
        <div
          className="rounded p-4 w-100"
          style={{
            backgroundColor: "rgba(0, 191, 166, 0.15)",
            borderRadius: "20px",
            maxWidth: "450px",
          }}
        >
          <h2
            className="fw-bold text-start"
            style={{
              color: "#00BFA6",
              fontSize: "2.2rem",
              fontFamily: "'Nunito', sans-serif",
              borderRadius: "15px",
            }}
          >
            CADASTRA.AI
          </h2>

          <form onSubmit={cadastro}>
            {/* Campo Email */}
            <div className="mb-3">
              <label
                htmlFor="contato"
                className="form-label"
                style={{
                  color: "#00BFA6",
                  fontFamily: "'Nunito', sans-serif",
                  borderRadius: "10px",
                }}
              >
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="contato"
                value={email}
                placeholder="Digite seu e-mail"
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  borderRadius: "12px",
                  fontFamily: "'Nunito', sans-serif",
                  color: "#ffffff",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  border: "1px solid #00BFA6",
                }}
                required
              />
            </div>

            {/* Campo Senha */}
            <div className="mb-3">
              <label
                htmlFor="senha"
                className="form-label"
                style={{
                  color: "#00BFA6",
                  fontFamily: "'Nunito', sans-serif",
                  borderRadius: "10px",
                }}
              >
                Senha
              </label>
              <input
                type="password"
                className="form-control"
                id="senha"
                value={password}
                placeholder="Digite sua senha"
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  borderRadius: "12px",
                  fontFamily: "'Nunito', sans-serif",
                  color: "#ffffff",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  border: "1px solid #00BFA6",
                }}
                required
              />
            </div>

            <button
              type="submit"
              className="btn w-100 fw-bold"
              style={{
                backgroundColor: "#009688",
                color: "#ffffff",
                borderRadius: "15px",
                fontFamily: "'Nunito', sans-serif",
                border: "none",
                padding: "12px",
                marginTop: "20px",
              }}
            >
              CADASTRAR
            </button>
          </form>

          <p
            className="text-center mt-3 text-light"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Já tem uma conta?{" "}
            <Link
              to="/login"
              className="text-info fw-bold text-decoration-none"
            >
              Faça login aqui
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
