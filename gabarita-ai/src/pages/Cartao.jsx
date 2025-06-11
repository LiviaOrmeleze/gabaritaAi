import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router"; // Para redirecionar para a página de finalização
import { useLocation } from "react-router"; // Para obter o plano enviado pela página de planos
import AdicionandoCartao from "../components/AdicinandoCartao";
import CartaoDeCredito from "../components/CartaoDeCredito"; // Importar o componente CartaoDeCredito
import "react-credit-cards-2/dist/lib/styles-compiled.css"; // Importando os estilos do react-credit-cards-2

const Cartao = () => {
  const location = useLocation();
  const { plano } = location.state || {}; // Obtém o plano enviado pela página de planos
  const [cartoes, setCartoes] = useState([]); // Estado para armazenar os cartões
  const [adicionandoCartao, setAdicionandoCartao] = useState(false); // Estado para controlar a exibição do formulário de adicionar cartão
  const [cartaoSelecionado, setCartaoSelecionado] = useState(null); // Estado para armazenar o cartão selecionado para exclusão ou uso
  const navigate = useNavigate(); // Para redirecionar para a página de finalização

  useEffect(() => {
    // Recuperar os cartões do localStorage ao montar o componente
    const storedCartoes = JSON.parse(localStorage.getItem("cartoes")) || [];
    setCartoes(storedCartoes);
  }, []);

  const handleAdicionarCartao = () => {
    setAdicionandoCartao(true); // Exibe o formulário para adicionar um novo cartão
  };

  const handleSalvarCartao = (novoCartao) => {
    // Adiciona o novo cartão à lista
    const updatedCartoes = [...cartoes, novoCartao];

    // Salva no localStorage
    localStorage.setItem("cartoes", JSON.stringify(updatedCartoes));

    // Atualiza o estado local
    setCartoes(updatedCartoes);

    // Fecha o formulário de adicionar cartão
    setAdicionandoCartao(false);
  };

  const handleExcluirCartao = () => {
    // Remove o cartão selecionado
    const updatedCartoes = cartoes.filter((_, index) => index !== cartaoSelecionado);

    // Salva a lista atualizada no localStorage
    localStorage.setItem("cartoes", JSON.stringify(updatedCartoes));

    // Atualiza o estado local
    setCartoes(updatedCartoes);

    // Reseta o cartão selecionado
    setCartaoSelecionado(null);
  };

  const handleUtilizarCartao = () => {
    const cartao = cartoes[cartaoSelecionado]; // Obtém o cartão selecionado
    navigate("/finalizar-pagamento", { state: { plano, cartao } }); // Passa o plano e o cartão para a página de finalização
  };

  const handleCancelarAdicionarCartao = () => {
    setAdicionandoCartao(false); // Fecha o formulário de adicionar cartão
  };

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between">
        <p className="fw-bold fs-1">Cartões</p>
        <p
          className="btn text-black fs-5"
          onClick={handleAdicionarCartao}
        >
          + adicionar cartão
        </p>
      </div>
       {/* Exibe o formulário de adicionar cartão ou a lista de cartões */}
       {adicionandoCartao ? (
        <AdicionandoCartao
          onSave={handleSalvarCartao}
          onCancel={handleCancelarAdicionarCartao}
        />
      ) : (
      
      <div className="container">
        {cartoes.length === 0 ? (
          <p>Nenhum cartão adicionado.</p>
        ) : (
          <div className="d-flex flex-wrap gap-3">
            {cartoes.map((cartao, index) => (
              <div
                key={index}
                onClick={() => setCartaoSelecionado(index)} // Define o cartão selecionado ao clicar
              >
                <CartaoDeCredito
                  numeroCartao={cartao.numero}
                  dataValidade={cartao.validade}
                  codigoSeguranca={cartao.codigoSeguranca}
                  nome={cartao.nome}
                />
              </div>
            ))}
          </div>
        )}
      </div>
      )}

      {/* Aba para excluir ou utilizar o cartão */}
      {cartaoSelecionado !== null && (
        <div
          className="position-fixed top-50 start-50 translate-middle bg-light p-4 rounded shadow"
          style={{ zIndex: 1050, width: "300px" }}
        >
          <h5 className="text-center">Opções do Cartão</h5>
          <p className="text-center">
            Número: **** **** **** {cartoes[cartaoSelecionado].numero.slice(-4)}
          </p>
          <div className="d-flex justify-content-around mt-4">
            <button
              className="btn btn-danger"
              onClick={handleExcluirCartao}
            >
              Excluir
            </button>
            <button
              className="btn btn-success"
              onClick={handleUtilizarCartao} // Utiliza o cartão selecionado
            >
              Utilizar
            </button>
          </div>
          <button
            className="btn btn-secondary w-100 mt-3"
            onClick={() => setCartaoSelecionado(null)} // Fecha a aba
          >
            Cancelar
          </button>
        </div>
      )}

    
    
    </div>
  );
};

export default Cartao;
