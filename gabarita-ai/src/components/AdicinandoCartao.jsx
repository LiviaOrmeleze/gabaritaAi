import React, { useState } from "react";

import CartaoDeCredito from "./CartaoDeCredito"; // Importar o componente CartaoDeCredito
import "react-credit-cards-2/dist/lib/styles-compiled.css"; // Importando os estilos do react-credit-cards-2

const AdicionandoCartao = () => {
  const [numCartao, setNumCartao] = useState("");
  const [dataValidade, setDataValidade] = useState("");
  const [codigoSeguranca, setCodigoSeguranca] = useState("");
  const [nome, setNome] = useState("");
  const [focused, setFocused] = useState("");

  const handleAdicionandoCartao = () => {
    const cartoesExistentes = JSON.parse(localStorage.getItem("cartoes")) || [];
    const novoCartao = {
      numero: numCartao,
      validade: dataValidade,
      codigoSeguranca: codigoSeguranca,
      nome: nome,
    };
    cartoesExistentes.push(novoCartao);
    localStorage.setItem("cartoes", JSON.stringify(cartoesExistentes));
  };

  return (
    <div className="">
      <h4>Adicionar Cartão</h4>
      <div className="p-4 rounded-3 itensPerfil d-flex gap-5 w-100 justify-content-center">
        <form className="me-md-5">
          <div className="mb-3">
            <label htmlFor="numeroCartao" className="form-label">
              Número do Cartão
            </label>
            <input
              value={numCartao}
              onChange={(e) => setNumCartao(e.target.value)}
              onFocus={() => setFocused("")}
              type="text"
              className="form-control"
              id="numeroCartao"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="nomeCartao" className="form-label">
              Nome impresso no Cartão
            </label>
            <input
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              onFocus={() => setFocused("")}
              type="text"
              className="form-control"
              id="nomeCartao"
            />
          </div>
          <div className="row">
            <div className="mb-3 col-6">
              <label htmlFor="validade" className="form-label">
                Validade
              </label>
              <input
                value={dataValidade}
                onChange={(e) => setDataValidade(e.target.value)}
                onFocus={() => setFocused("")}
                type="text"
                className="form-control"
                id="validade"
              />
            </div>
            <div className="mb-3 col">
              <label htmlFor="codigoDeSegurança" className="form-label">
                Código de segurança
              </label>
              <input
                maxLength={3}
                value={codigoSeguranca}
                onChange={(e) => setCodigoSeguranca(e.target.value)}
                onFocus={() => setFocused("cvc")}
                type="text"
                className="form-control"
                id="codigoDeSegurança"
              />
            </div>
          </div>
          <button
            className="btn btn-secondary"
            onClick={handleAdicionandoCartao}
          >
            Adicionar Cartão
          </button>
        </form>
        <div className="d-flex justify-content-center align-items-center ms-md-5">
          <CartaoDeCredito
            numeroCartao={numCartao}
            dataValidade={dataValidade}
            codigoSeguranca={codigoSeguranca}
            nome={nome}
            focus={focused}
          />
        </div>
      </div>
    </div>
  );
};

export default AdicionandoCartao;
