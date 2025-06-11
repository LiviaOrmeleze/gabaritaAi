import { useEffect, useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom"; // Importa o useNavigate para redirecionamento
import Cartao from "./Cartao";

const Perfil = () => {
  const [mostrarPerfil, setMostrarPerfil] = useState(true);
  const [mostrarCartao, setMostrarCartao] = useState(false);
  const [editando, setEditando] = useState(false); // Estado para alternar entre exibição e edição
  const [userData, setUserData] = useState({
    nome: "",
    email: "",
    cpf: "",
    telefone: "",
  }); // Estado para armazenar os dados do usuário

  const navigate = useNavigate(); // Inicializa o useNavigate

  const handleVoltar = () => {
    navigate("/"); // Redireciona para a página inicial
  };

  useEffect(() => {
    // Simula a recuperação dos dados do cadastro (exemplo: localStorage)
    const nome = localStorage.getItem("userNome") || "Usuário Teste";
    const email = localStorage.getItem("userEmail") || "usuario@email.com";
    const cpf = localStorage.getItem("userCpf") || "123.456.789-00";
    const telefone = localStorage.getItem("userTelefone") || "(11) 98765-4321";

    setUserData({ nome, email, cpf, telefone });
  }, []);

  const handleMostrarCadastro = () => {
    setMostrarPerfil(true);
    setMostrarCartao(false);
  };

  const handleMostrarCartao = () => {
    setMostrarCartao(true);
    setMostrarPerfil(false);
  };

  const handleEditar = () => {
    setEditando(true); // Ativa o modo de edição
  };

  const handleSalvar = () => {
    // Salva os dados no localStorage
    localStorage.setItem("userNome", userData.nome);
    localStorage.setItem("userEmail", userData.email);
    localStorage.setItem("userCpf", userData.cpf);
    localStorage.setItem("userTelefone", userData.telefone);

    setEditando(false); // Sai do modo de edição
    alert("Dados atualizados com sucesso!");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="">
      {/* Botão de voltar */}
      <button
        className="btn  d-flex align-items-center gap-2 p-2 "
        onClick={handleVoltar} // Chama a função de redirecionamento
    
      >
        <i className="bi bi-arrow-left-short fs-4"></i> {/* Ícone de seta */}
        Voltar
      </button>

      <button
        className="d-flex d-md-none btn"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasScrolling"
        aria-controls="offcanvasScrolling"
      >
        <i className="bi bi-list text-light fs-4"></i>
      </button>

      <div
        className="offcanvas offcanvas-start offCanvas"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabIndex="-1"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasScrollingLabel"></h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <button
          id="btnOffCanvas"
          className="rounded-4 p-2 btn text-start m-4 fundoconhe border border-2 border-primary" // Adicionada borda azul
          onClick={handleMostrarCadastro}
        >
          <p className="fw-bold m-0 ">Perfil</p>
          <p className="m-0">ver e alterar seus dados</p>
        </button>

        <button
          id="btnOffCanvas"
          className="rounded-4 p-2 btn text-start border border-2 border-secondary m-4" // Adicionada borda cinza
          onClick={handleMostrarCartao}
        >
          <p className="fw-bold m-0">Cartões</p>
          <p className="m-0">ver seus cartões cadastrados</p>
        </button>
      </div>
       
      {/* Parte dektop */}
      <div className="d-flex container mt-4 align-items-start gap-4 ">
        {/* Coluna de Botões */}
        <div className="btnPerfil d-flex flex-column gap-3">
          <button
            className="itensPerfil rounded-4 p-2 btn text-start d-none d-md-block border border-2 border-secondary" // Adicionada borda verde
            onClick={handleMostrarCadastro}
          >
            <p className="fw-bold m-0">Perfil</p>
            <p className="m-0">ver e alterar seus dados</p>
          </button>

          <button
            className="itensPerfil rounded-4 p-2 btn text-start d-none d-md-block border border-2 border-secondary" // Adicionada borda vermelha
            onClick={handleMostrarCartao}
          >
            <p className="fw-bold m-0">Cartões</p>
            <p className="m-0">ver seus cartões cadastrados</p>
          </button>
        </div>

        {/* Renderiza o componente Cadastro ao lado */}
        <div className="w-100">
        {mostrarPerfil && (
          <div className="col-12">
            <div
              className="p-4 rounded shadow"
              style={{
                backgroundColor: "#002147",
                color: "#fff",
                border: "1px solid #df6d14",
              }}
            >
              <h3 className="text-center">Dados do Perfil</h3>
              {editando ? (
                <form>
                  <div className="mb-3">
                    <label htmlFor="nome" className="form-label">Nome</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nome"
                      name="nome"
                      value={userData.nome}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">E-mail</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={userData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="cpf" className="form-label">CPF</label>
                    <input
                      type="text"
                      className="form-control"
                      id="cpf"
                      name="cpf"
                      value={userData.cpf}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="telefone" className="form-label">Telefone</label>
                    <input
                      type="text"
                      className="form-control"
                      id="telefone"
                      name="telefone"
                      value={userData.telefone}
                      onChange={handleChange}
                    />
                  </div>
                  <button
                    type="button"
                    className="btn btn-success w-100"
                    onClick={handleSalvar}
                  >
                    Salvar
                  </button>
                </form>
              ) : (
                <div>
                  <p><strong>Nome:</strong> {userData.nome}</p>
                  <p><strong>E-mail:</strong> {userData.email}</p>
                  <p><strong>CPF:</strong> {userData.cpf}</p>
                  <p><strong>Telefone:</strong> {userData.telefone}</p>
                  <div className="d-flex justify-content-end">
                  <button
                    className="btn btnSig w-25 "
                    onClick={handleEditar}
                    >
                    Editar Perfil
                  </button>
                      </div>
                </div>
              )}
            </div>
          </div>
        )}
          {mostrarCartao && <Cartao />}
        </div>
      </div>
    </div>
  );
};

export default Perfil;
