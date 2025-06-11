import React, { useState, useEffect } from "react";
import foxLogo from "../assets/raposa.png"; // Caminho correto da imagem da raposa
import Menu from "../components/Menu";
import { useNavigate } from "react-router-dom";

const planos = [
  {
    nome: "MENSAL",
    preco: "R$ 25,90/mês",
    beneficios: [
      "Cronograma personalizado para otimizar seus estudos",
      " Acompanhamento do seu desempenho para evolução constante",
      "Redação com IA, ajudando na escrita e aprimoramento",
    ],
  },
  {
    nome: "TRIMESTRAL",
    preco: "R$ 60,00 por 3 meses",
    beneficios: [
      "Cronograma personalizado para otimizar seus estudos",
      " Acompanhamento do seu desempenho para evolução constante",
      "Correção de três redações com IA para feedback detalhado",
      "Análise de progresso trimestral para insights sobre seu avanço",
    ],
  },
  {
    nome: "SEMESTRAL",
    preco: "R$ 110,50 por 6 meses",
    beneficios: [
      "Tudo do plano Trimestral, mais:",
      "Mentoria personalizada com dicas de estudo",
      "Simulados exclusivos para treinar antes das provas",
    ],
  },
  {
    nome: "ANUAL",
    preco: "R$ 220,60 por 12 meses",
    beneficios: [
      "O pacote completo para seu sucesso:",
      "Cronograma personalizado e ajustável para se adaptar à sua rotina",
      "Correção de dez redações com IA, garantindo aprendizado contínuo",
      "Mentoria personalizada, com suporte especializado",
      "Simulados exclusivos e desafios semanais para fortalecer seu preparo",
      "Acesso a materiais premium, garantindo o máximo desempenho",
    ],
  },
];

const Planos = () => {
  const [larguraFaixa, setLarguraFaixa] = useState("35%"); // Padrão para desktop
  const [nome, setNome] = useState(""); // Estado para o nome do plano
  const [preco, setPreco] = useState(""); // Estado para o preço do plano
  const [descricao, setDescricao] = useState(""); // Estado para a descrição do plano
  const [mensagem, setMensagem] = useState(""); // Estado para exibir mensagens de sucesso ou erro
  const navigate = useNavigate(); // Inicializa o useNavigate

  useEffect(() => {
    const ajustarLargura = () => {
      setLarguraFaixa(window.innerWidth <= 768 ? "65%" : "35%"); // Mobile: 65%, Desktop: 35%
    };

    ajustarLargura();
    window.addEventListener("resize", ajustarLargura);
    return () => window.removeEventListener("resize", ajustarLargura);
  }, []);

  const handleIrParaCartoes = (plano) => {
    navigate("/cartao", { state: { plano } }); // Passa o plano selecionado para a página de cartões
  };

  const handleCriarPlano = async () => {
    const url = "https://gabaritaai.somee.com/api/Planos";
    const token =
      "CfDJ8PGj194bt6tBj4nZjwkIggLFKPmkieUB4BeTk9AbHuB_w5qPZ5e1DVJt-ARlbxZu7oOO25c9hMQnOsqf4KdhBbWJVrAoKzYxnEz2sOhFHXhfYPtxDDb-SqPybH05P872onMPo5fOSdLgo93ePqdXkIFn1vxBGZuZnAhw3F9YkaVofFgQx8Oh34LTxrY3rk9bKmI-E7kRGHjVjsOnJFashbkgdQWTt2xfQynlqHyut7HHttxlVe_pPNjlJ5ozTHHyqczY6ZmOu_GYaEjK7EWMbal4YmkEZBOmLbu7-5WSp0s3GLwgD3ADsgffnFljQs6P2xrQIVGygDjO8wBFgeP1uC0gEaAlgYme7omnzsd-8XYwVB84kYukc0T6kBsANIRfqQGHiN_3GaTcBcZGqXpJ0YPkbTjOS-OMkBQuCvuQFUQ1ncBw_-eKdVU862KYqDS3prKI94VaDyXVrDsz08NBKrSe9gj9Hd3iY9M3Ivef9pyrlJQYFrLdLhNxhDtU45zWJwvzT36SzHmeiTRIGiyp4Z6BS2IVElk0-TwoXibsmNTKwk14ahrVWn-Kl_eX3tPPAopemdANVr9vapDRAA3mWxXYPbG7SQAhWW6E4CGFn3DtzFmT8b5XzeleYmMN39h1gy39Z83B6IEmq95b6ah2zqRa0oHARHdJp1aOO8z3FeppjbGSsyFxpaYEMmAluW79TQ";

    const plano = {
      nome,
      preco: parseFloat(preco),
      descricao,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(plano),
      });

      if (response.ok) {
        setMensagem("Plano criado com sucesso!");
        setNome("");
        setPreco("");
        setDescricao("");
      } else {
        const errorData = await response.json();
        setMensagem(
          `Erro ao criar plano: ${errorData.message || "Erro desconhecido"}`
        );
      }
    } catch (error) {
      console.error("Erro ao conectar ao servidor:", error);
    }
  };

  return (
    <div>
      <Menu />
      <div
        className="container-fluid py-5 min-vh-100 d-flex flex-column align-items-center"
        style={{
          backgroundColor: "#002147",
          fontFamily: "'Roboto Mono', monospace",
        }}
      >
        {/* FAIXA LARANJA RESPONSIVA */}
        <div
          style={{
            width: larguraFaixa,
            height: "50px",
            backgroundColor: "#df6d14",
            position: "absolute",
            left: "0",
            top: "80px",
            border: "4px solid #fff",
            borderRadius: "8px",
          }}
        >
          <div
            style={{
              width: "65px",
              height: "65px",
              backgroundColor: "#fff",
              borderRadius: "50%",
              border: "3px solid #fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              left: "5px",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <img
              src={foxLogo}
              alt="Raposa"
              style={{ width: "55px", height: "55px", objectFit: "contain" }}
            />
          </div>
          <h1
            className="fw-bold"
            style={{
              color: "#fff",
              fontSize: "2.4rem",
              fontFamily: "'Roboto Mono', monospace",
              position: "absolute",
              left: "80px",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            PREMIUM
          </h1>
        </div>

        {/* Formulário para criar plano */}
        <div className="card p-4 mt-5" style={{ width: "100%", maxWidth: "500px" }}>
          <h3 className="text-center mb-4">Criar Novo Plano</h3>
          <div className="mb-3">
            <label htmlFor="nome" className="form-label">
              Nome do Plano
            </label>
            <input
              type="text"
              className="form-control"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="preco" className="form-label">
              Preço
            </label>
            <input
              type="number"
              className="form-control"
              id="preco"
              value={preco}
              onChange={(e) => setPreco(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="descricao" className="form-label">
              Descrição
            </label>
            <textarea
              className="form-control"
              id="descricao"
              rows="3"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            ></textarea>
          </div>
          <button className="btn btn-primary w-100" onClick={handleCriarPlano}>
            Criar Plano
          </button>
          {mensagem && <p className="mt-3 text-center">{mensagem}</p>}
        </div>

        {/* CARDS CORRETAMENTE ALINHADOS */}
        <div className="container mt-5" style={{ paddingTop: "140px" }}>
          <div className="row g-4 justify-content-center">
            {planos.slice(0, 3).map((plano, i) => (
              <div
                className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center"
                key={i}
              >
                <div
                  className="card shadow-sm text-start px-3 py-2"
                  style={{
                    borderRadius: "12px",
                    backgroundColor: "#e7d7c9",
                    width: "80%",
                    padding: "15px",
                  }}
                >
                  <h4
                    className="fw-bold text-center"
                    style={{
                      color: "#00897b",
                      fontSize: "1.6rem",
                      fontFamily: "'Playfair Display', serif",
                    }}
                  >
                    {plano.nome}
                  </h4>
                  <h5
                    className="fw-light text-center"
                    style={{ color: "#4e342e", fontSize: "0.9rem" }}
                  >
                    {plano.preco}
                  </h5>
                  <hr
                    style={{
                      border: "1px solid #df6d14",
                      width: "100%",
                      margin: "6px auto",
                    }}
                  />
                  <ul className="list-unstyled text-center">
                    {plano.beneficios.map((beneficio, index) => (
                      <li
                        key={index}
                        style={{
                          color: "#4e342e",
                          fontSize: "1rem",
                          fontWeight: "500",
                        }}
                      >
                        {beneficio}
                      </li>
                    ))}
                  </ul>
                  <div className="text-center">
                    <button
                      className="btn fw-bold mt-3 px-3 py-2"
                      style={{
                        backgroundColor: "#302b2b",
                        color: "#fff",
                        borderRadius: "8px",
                      }}
                      onClick={() => handleIrParaCartoes(plano)} // Passa o plano selecionado
                    >
                      EXPERIMENTE
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ÚLTIMO CARD CENTRALIZADO ABAIXO */}
          <div className="row justify-content-center mt-4">
            {planos.slice(3).map((plano, i) => (
              <div
                className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center"
                key={i}
              >
                <div
                  className="card shadow-sm text-start px-3 py-2"
                  style={{
                    borderRadius: "12px",
                    backgroundColor: "#e7d7c9",
                    width: "80%",
                    padding: "15px",
                  }}
                >
                  <h4
                    className="fw-bold text-center"
                    style={{
                      color: "#00897b",
                      fontSize: "1.6rem",
                      fontFamily: "'Playfair Display', serif",
                    }}
                  >
                    {plano.nome}
                  </h4>
                  <h5
                    className="fw-light text-center"
                    style={{ color: "#4e342e", fontSize: "0.9rem" }}
                  >
                    {plano.preco}
                  </h5>
                  <hr
                    style={{
                      border: "1px solid #df6d14",
                      width: "100%",
                      margin: "6px auto",
                    }}
                  />
                  <ul className="list-unstyled text-center">
                    {plano.beneficios.map((beneficio, index) => (
                      <li
                        key={index}
                        style={{
                          color: "#4e342e",
                          fontSize: "1rem",
                          fontWeight: "500",
                        }}
                      >
                        {beneficio}
                      </li>
                    ))}
                  </ul>
                  <div className="text-center">
                    <button
                      className="btn fw-bold mt-3 px-3 py-2"
                      style={{
                        backgroundColor: "#302b2b",
                        color: "#fff",
                        borderRadius: "8px",
                      }}
                      onClick={() => handleIrParaCartoes(plano)} // Passa o plano selecionado
                    >
                      EXPERIMENTE
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planos;
