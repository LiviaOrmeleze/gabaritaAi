import React, { useState } from "react";
import Cartao from "../components/Cartao";

const Pagamento = () => {
  const [cartoes, setCartoes] = useState([]); // Estado para armazenar os cartões
  const [novoCartao, setNovoCartao] = useState({
    numero: "",
    nome: "",
    validade: "",
    cvv: "",
  }); // Estado para o formulário de novo cartão

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNovoCartao({ ...novoCartao, [name]: value });
  };

  const adicionarCartao = (e) => {
    e.preventDefault();
    setCartoes([...cartoes, novoCartao]); // Adiciona o novo cartão à lista
    setNovoCartao({ numero: "", nome: "", validade: "", cvv: "" }); // Reseta o formulário
  };

  return (
    <div
      className="container py-5"
      style={{
        fontFamily: "'Roboto Mono', monospace",
      }}
    >
      <h1 className="text-center mb-4">Pagamento</h1>

      {/* Lista de cartões */}
      <div className="mb-5">
        <h3 className="mb-3">Seus Cartões</h3>
        {cartoes.length > 0 ? (
          <div className="row">
            {cartoes.map((cartao, index) => (
              <div className="col-md-4 mb-3" key={index}>
                <Cartao
                  numero={cartao.numero}
                  nome={cartao.nome}
                  validade={cartao.validade}
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-muted">Nenhum cartão cadastrado.</p>
        )}
      </div>

      {/* Formulário para adicionar novo cartão */}
      <div className="border p-4 rounded">
        <h3 className="mb-3">Adicionar Novo Cartão</h3>
        <form onSubmit={adicionarCartao}>
          <div className="mb-3">
            <label htmlFor="numero" className="form-label">
              Número do Cartão
            </label>
            <input
              type="text"
              className="form-control"
              id="numero"
              name="numero"
              value={novoCartao.numero}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="nome" className="form-label">
              Nome no Cartão
            </label>
            <input
              type="text"
              className="form-control"
              id="nome"
              name="nome"
              value={novoCartao.nome}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="validade" className="form-label">
                Validade
              </label>
              <input
                type="text"
                className="form-control"
                id="validade"
                name="validade"
                placeholder="MM/AA"
                value={novoCartao.validade}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="cvv" className="form-label">
                CVV
              </label>
              <input
                type="text"
                className="form-control"
                id="cvv"
                name="cvv"
                value={novoCartao.cvv}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Adicionar Cartão
          </button>
        </form>
      </div>
    </div>
  );
};

export default Pagamento;
