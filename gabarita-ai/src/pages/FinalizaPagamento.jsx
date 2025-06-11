import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";

const FinalizaPagamento = () => {
  const location = useLocation();
  const { plano, cartao } = location.state || {}; // Obtém os dados do plano e do cartão
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const navigate = useNavigate(); // Para redirecionar após o pagamento

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode enviar os dados para o backend ou processar o pagamento
    alert("Pagamento finalizado com sucesso!");
    navigate("/planos"); 
  };

  return (
    <div className="container py-5" style={{ fontFamily: "'Roboto Mono', monospace" }}>
      <h1 className="text-center mb-4 fs-1 fonteBg">Finalizar Pagamento</h1>
      <div className="row">
        {/* Coluna esquerda: Formulário */}
        <div className="col-md-6">
          <div
            className="p-4 rounded-5 shadow bg-marinho"
           
          >
            <h3 className="text-center mb-4">Informações Pessoais</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">E-mail</label>
                <input
                  type="email"
                  placeholder="Digite seu e-mail"
                  className="form-control rounded-4" 
                  id="email"
                  value={localStorage.getItem("userEmail") || ""}
                  readOnly
                  style={{ backgroundColor: "#f5f5f5", color: "#000" }}
                />
              </div>
              <div className="mb-3 ">
                <label htmlFor="nome" className="form-label">Nome</label>
                <input
                  type="text"
                  placeholder="Digite seu nome completo"
                  className="form-control rounded-4" 
                  id="nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                  style={{ backgroundColor: "#f5f5f5", color: "#000" }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="cpf" className="form-label">CPF</label>
                <input
                  type="text"
                  placeholder="Digite seu CPF"
                  className="form-control rounded-4"  
                  id="cpf"
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                  required
                  style={{ backgroundColor: "#f5f5f5", color: "#000" }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="telefone" className="form-label">Telefone</label>
                <input
                  type="text"
                  placeholder="Digite seu telefone"
                  className="form-control rounded-4" 
                  id="telefone"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  required
                  style={{ backgroundColor: "#f5f5f5", color: "#000" }}
                />
              </div>
              <button
                type="submit "
                className="btn w-100 mt-2 btnSig fw-bold py-2 mt-3 rounded-4 "
               
                 
              >
                Finalizar Pagamento
              </button>
            </form>
          </div>
        </div>

        {/* Coluna direita: Informações do plano e cartão */}
        <div className="col-md-6">
          <div
            className="p-4 rounded shadow"
            style={{
              backgroundColor: "#f5f5f5",
              border: "1px solid #df6d14",
            }}
          >
            {/* Informações do plano */}
            {plano && (
              <div className="mb-4">
                <h3 className="text-center" style={{ color: "#002147" }}>Plano Selecionado</h3>
                <p><strong>Nome:</strong> {plano.nome}</p>
                <p><strong>Preço:</strong> {plano.preco}</p>
                <ul>
                  {plano.beneficios.map((beneficio, index) => (
                    <li key={index}>{beneficio}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Informações do cartão */}
            {cartao && (
              <div className="mt-4">
                <h3 className="text-center" style={{ color: "#002147" }}>Cartão Selecionado</h3>
                <p><strong>Número:</strong> **** **** **** {cartao.numero.slice(-4)}</p>
                <p><strong>Nome no Cartão:</strong> {cartao.nome}</p>
                <p><strong>Validade:</strong> {cartao.validade}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalizaPagamento;
