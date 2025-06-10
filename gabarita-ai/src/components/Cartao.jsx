import React, { useEffect, useState } from "react";
import AdicionandoCartao from "./AdicinandoCartao";
import CartaoDeCredito from "./CartaoDeCredito"; // Importar o componente CartaoDeCredito
import "react-credit-cards-2/dist/lib/styles-compiled.css"; // Importando os estilos do react-credit-cards-2

const Cartao = () => {
  const [cartoes, setCartoes] = useState([]);
  const [adicionandoCartao, setAdicionandoCartao] = useState(false);

  useEffect(() => {
    // Recuperar os cartões do localStorage apenas uma vez ao montar o componente
    const storedCartoes = JSON.parse(localStorage.getItem("cartoes")) || [];
    setCartoes(storedCartoes);
  }, []); // O array vazio [] garante que o useEffect seja executado apenas uma vez

  console.log(JSON.parse(localStorage.getItem("cartoes")));

  const handleAdicionarCartao = () => {
    setAdicionandoCartao(true);
  };

  const handleSalvarCartao = (novoCartao) => {
    // Adicionar o novo cartão à lista
    const updatedCartoes = [...cartoes, novoCartao];

    // Salvar no localStorage
    localStorage.setItem("cartoes", JSON.stringify(updatedCartoes));

    // Atualizar o estado local
    setCartoes(updatedCartoes);

    // Voltar para a lista de cartões
    setAdicionandoCartao(false);
  };

  return (
    <div className="d-flex container flex-column gap-3">
      {adicionandoCartao ? (
        // Exibir o formulário para adicionar cartão
        <AdicionandoCartao onSalvarCartao={handleSalvarCartao} />
      ) : (
        // Exibir a lista de cartões
        <div>
          <div className="row">
            <h4 className="col-5">Cartões</h4>
            <p
              className="btn btn-secondary col"
              onClick={handleAdicionarCartao}
            >
              + adicionar cartão
            </p>
          </div>
          <div className="container">
            {cartoes.length === 0 ? (
              <p>Nenhum cartão adicionado.</p>
            ) : (
              <div className="d-flex flex-wrap gap-3">
                {cartoes.map((cartao, index) => (
                  <CartaoDeCredito
                    key={index}
                    numeroCartao={cartao.numero}
                    dataValidade={cartao.validade}
                    codigoSeguranca={cartao.codigoSeguranca}
                    nome={cartao.nome}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cartao;
