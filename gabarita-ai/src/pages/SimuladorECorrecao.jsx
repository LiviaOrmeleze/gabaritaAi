"use client";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";

const SimuladorECorrecao = () => {
  const [titulo, setTitulo] = useState("");
  const [redacao, setRedacao] = useState("");
  const [palavras, setPalavras] = useState(0);
  const [caracteres, setCaracteres] = useState(0);
  const [frases, setFrases] = useState(0);
  const [paragrafos, setParagrafos] = useState(0);
  const [mostrarEstatisticas, setMostrarEstatisticas] = useState(true);
  const [tamanhoFonte, setTamanhoFonte] = useState(18);
  const [mostrarConfirmacao, setMostrarConfirmacao] = useState(false);

  // Correção
  const [mostrarCorrecao, setMostrarCorrecao] = useState(false);
  const [corrigindo, setCorrigindo] = useState(false);
  const [resultadoCorrecao, setResultadoCorrecao] = useState(null);

  // Cronômetro
  const [tempo, setTempo] = useState(0);
  const [cronometroAtivo, setCronometroAtivo] = useState(false);

  const [temaRedacao] = useState(
    "A importância da educação digital no século XXI"
  );

  const navigate = useNavigate();

  const contarPalavras = (texto) => {
    return texto.trim() === "" ? 0 : texto.trim().split(/\s+/).length;
  };

  const formatarTempo = (segundos) => {
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const segs = segundos % 60;

    if (horas > 0) {
      return `${horas.toString().padStart(2, "0")}:${minutos
        .toString()
        .padStart(2, "0")}:${segs.toString().padStart(2, "0")}`;
    }
    return `${minutos.toString().padStart(2, "0")}:${segs
      .toString()
      .padStart(2, "0")}`;
  };

  // Cálculos de estatísticas
  useEffect(() => {
    const texto = redacao.trim();
    setCaracteres(redacao.length);

    const palavras = contarPalavras(redacao);
    setPalavras(palavras);

    const contarFrases =
      texto === ""
        ? 0
        : texto.split(/[.!?]+/).filter((f) => f.trim().length > 0).length;
    setFrases(contarFrases);

    const contarParagrafos =
      texto === ""
        ? 0
        : texto.split(/\n\s*\n/).filter((p) => p.trim().length > 0).length;
    setParagrafos(Math.max(contarParagrafos, texto.length > 0 ? 1 : 0));
  }, [redacao]);

  // Controle do cronômetro
  useEffect(() => {
    let intervalo = null;
    if (cronometroAtivo) {
      intervalo = setInterval(() => {
        setTempo((tempo) => tempo + 1);
      }, 1000);
    } else if (!cronometroAtivo && tempo !== 0) {
      clearInterval(intervalo);
    }
    return () => clearInterval(intervalo);
  }, [cronometroAtivo, tempo]);

  const iniciarCorrecao = () => {
    if (palavras < 50) {
      alert("Sua redação deve ter pelo menos 50 palavras para ser corrigida!");
      return;
    }

    setCorrigindo(true);
    setMostrarCorrecao(true);

    // Simular correção
    setTimeout(() => {
      const resultado = {
        notaGeral: Math.floor(Math.random() * 200) + 700,
        notaMaxima: 1000,
        pontosFortes: [
          "Estrutura dissertativa bem definida",
          "Argumentação consistente e relevante",
          "Proposta de intervenção detalhada",
          "Linguagem formal adequada",
        ],
        sugestoes: [
          "Varie mais o uso de conectivos para melhorar a coesão",
          "Inclua mais dados estatísticos para fortalecer argumentos",
          "Desenvolva melhor a contextualização histórica",
        ],
      };

      setResultadoCorrecao(resultado);
      setCorrigindo(false);
    }, 3000);
  };

  const limparTexto = () => {
    setMostrarConfirmacao(false);
    setRedacao("");
    setTitulo("");
  };

  return (
    <div
      className="min-vh-100 d-flex flex-column"
      style={{
        backgroundColor: "#fdf3dd",
        color: "#002147",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      {/* Header */}
      <div
        className="header d-flex justify-content-between align-items-center p-4"
        style={{
          backgroundColor: "#df6d14",
          borderBottom: "1px solid #000000",
        }}
      >
        <div className="d-flex align-items-center">
          <h4
            className="mb-0 me-3"
            style={{
              color: "white",
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontWeight: "bold",
            }}
          >
            Nova Redação
          </h4>
        </div>

        <div className="d-flex align-items-center gap-3">
          {/* Cronômetro */}
          <div className="d-flex align-items-center gap-2">
            <div
              className="px-3 py-2 rounded"
              style={{
                backgroundColor: "rgba(255,255,255,0.2)",
                color: "white",
                fontFamily: "monospace",
                fontSize: "1.1rem",
                fontWeight: "bold",
              }}
            >
              {formatarTempo(tempo)}
            </div>
            <button
              className="btn btn-sm"
              onClick={() => setCronometroAtivo(!cronometroAtivo)}
              style={{
                backgroundColor: cronometroAtivo
                  ? "#002147"
                  : "rgba(255,255,255,0.2)",
                color: "white",
                border: "none",
                padding: "0.5rem 1rem",
              }}
            >
              {cronometroAtivo ? "Pausar" : "Iniciar"}
            </button>
            <button
              className="btn btn-sm"
              onClick={() => {
                setTempo(0);
                setCronometroAtivo(false);
              }}
              style={{
                backgroundColor: "rgba(255,255,255,0.2)",
                color: "white",
                border: "none",
                padding: "0.5rem 1rem",
              }}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
      <div className="flex-grow-1 d-flex">
        {/* Main Content */}
        <div className="flex-grow-1 p-4">
          {/* Tema */}
          <div
            className="mb-3 p-3 rounded"
            style={{
              backgroundColor: "#002147",
              border: "1px solid #000000",
            }}
          >
            <h6 className="mb-2" style={{ color: "#df6d14" }}>
              Tema da Redação
            </h6>
            <p
              className="mb-0"
              style={{ color: "#e7d7c9", fontSize: "0.95rem" }}
            >
              {temaRedacao}
            </p>
          </div>

          {/* Título */}
          <div className="mb-4">
            <input
              type="text"
              className="form-control border-0 bg-transparent"
              placeholder="Título (opcional)"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              style={{
                color: "#002147",
                fontSize: "1.1rem",
                borderBottom: "2px solid #000000",
                borderRadius: "0",
                paddingLeft: "0",
                outline: "none",
              }}
            />
            {/* Apenas uma linha preta embaixo do título */}
            <div
              style={{
                borderBottom: "1px solid #000000",
                marginTop: "0.5rem",
              }}
            ></div>
          </div>

          {/* Linha divisória */}
          <hr
            style={{
              border: "none",
              borderTop: "1px solid #000000",
              margin: "1rem 0",
            }}
          />

          {/* Área de Redação */}
          <div className="position-relative flex-grow-1">
            <textarea
              className="form-control border-0 bg-transparent h-100"
              placeholder="Escreva sua redação aqui...

Lembre-se da estrutura:
• Introdução: Contextualize o tema e apresente sua tese
• Desenvolvimento: Desenvolva seus argumentos com exemplos
• Conclusão: Retome a tese e apresente proposta de intervenção"
              value={redacao}
              onChange={(e) => setRedacao(e.target.value)}
              style={{
                color: "#002147",
                fontSize: `${tamanhoFonte}px`,
                lineHeight: "1.6",
                fontFamily: "Georgia, serif",
                resize: "none",
                minHeight: "500px",
                paddingLeft: "0",
                outline: "none",
              }}
            />
          </div>

          {/* Modal de Confirmação */}
          {mostrarConfirmacao && (
            <div
              className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
              style={{ backgroundColor: "rgba(0,0,0,0.5)", zIndex: 1050 }}
            >
              <div
                className="p-4 rounded"
                style={{
                  backgroundColor: "#fdf3dd",
                  maxWidth: "400px",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
                }}
              >
                <h5 style={{ color: "#002147" }}>Confirmação</h5>
                <p style={{ color: "#002147" }}>
                  Tem certeza que deseja excluir todo o texto?
                </p>
                <div className="d-flex justify-content-end gap-2 mt-3">
                  <button
                    className="btn"
                    onClick={() => setMostrarConfirmacao(false)}
                    style={{
                      backgroundColor: "#e7d7c9",
                      color: "#002147",
                      border: "none",
                    }}
                  >
                    Cancelar
                  </button>
                  <button
                    className="btn"
                    onClick={limparTexto}
                    style={{
                      backgroundColor: "#df6d14",
                      color: "white",
                      border: "none",
                    }}
                  >
                    Confirmar
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Correção IA */}
          {mostrarCorrecao && (
            <div className="mt-4">
              <div
                className="card"
                style={{
                  backgroundColor: "#fdf3dd",
                  border: "2px solid #000000",
                }}
              >
                <div
                  className="card-header d-flex justify-content-between align-items-center"
                  style={{ backgroundColor: "#00897b", color: "white" }}
                >
                  <h6 className="mb-0">Correção Inteligente</h6>
                  <button
                    className="btn btn-sm"
                    onClick={() => setMostrarCorrecao(false)}
                    style={{
                      backgroundColor: "rgba(255,255,255,0.2)",
                      border: "none",
                      color: "white",
                    }}
                  >
                    ×
                  </button>
                </div>

                <div className="card-body">
                  {corrigindo && (
                    <div className="text-center py-4">
                      <div
                        className="spinner-border"
                        style={{ color: "#00897b" }}
                      >
                        <span className="visually-hidden">Analisando...</span>
                      </div>
                      <h6 className="mt-3" style={{ color: "#002147" }}>
                        Analisando sua redação...
                      </h6>
                      <p style={{ color: "#4e342e" }}>
                        IA avaliando gramática, estrutura e argumentação
                      </p>
                    </div>
                  )}

                  {resultadoCorrecao && !corrigindo && (
                    <div>
                      {/* Nota Geral */}
                      <div className="row mb-4">
                        <div className="col-md-4">
                          <div
                            className="text-center p-4 rounded"
                            style={{ backgroundColor: "#e7d7c9" }}
                          >
                            <div
                              className="display-4 fw-bold"
                              style={{ color: "#df6d14" }}
                            >
                              {resultadoCorrecao.notaGeral}
                            </div>
                            <div style={{ color: "#002147" }}>
                              de {resultadoCorrecao.notaMaxima} pontos
                            </div>
                            <div className="mt-2">
                              <div
                                className="progress"
                                style={{ backgroundColor: "#fdf3dd" }}
                              >
                                <div
                                  className="progress-bar"
                                  style={{
                                    width: `${
                                      (resultadoCorrecao.notaGeral /
                                        resultadoCorrecao.notaMaxima) *
                                      100
                                    }%`,
                                    backgroundColor: "#00897b",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-8">
                          <h6 style={{ color: "#df6d14" }}>Pontos Fortes:</h6>
                          <ul className="list-unstyled">
                            {Array.isArray(resultadoCorrecao?.pontosFortes) &&
                              resultadoCorrecao.pontosFortes.map(
                                (ponto, index) => (
                                  <li
                                    key={index}
                                    className="mb-1"
                                    style={{ color: "#002147" }}
                                  >
                                    <span style={{ color: "#00897b" }}>✓</span>{" "}
                                    {ponto}
                                  </li>
                                )
                              )}
                          </ul>
                        </div>
                      </div>

                      {/* Sugestões */}
                      <div>
                        <h6 style={{ color: "#df6d14" }}>
                          Sugestões de Melhoria
                        </h6>
                        <ul className="list-unstyled">
                          {resultadoCorrecao?.sugestoes &&
                            resultadoCorrecao.sugestoes.map(
                              (sugestao, index) => (
                                <li
                                  key={index}
                                  className="mb-2"
                                  style={{
                                    color: "#002147",
                                    fontSize: "0.9rem",
                                  }}
                                >
                                  <span style={{ color: "#00897b" }}>→</span>{" "}
                                  {sugestao}
                                </li>
                              )
                            )}
                        </ul>
                      </div>

                      <div className="d-flex gap-2 justify-content-center mt-3">
                        <button
                          className="btn"
                          onClick={iniciarCorrecao}
                          style={{
                            backgroundColor: "#00897b",
                            color: "white",
                            border: "none",
                          }}
                        >
                          Nova Correção
                        </button>
                        <button
                          className="btn"
                          onClick={() => window.print()}
                          style={{
                            backgroundColor: "#df6d14",
                            color: "white",
                            border: "none",
                          }}
                        >
                          Imprimir
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar Estatísticas */}
        <div
          className="p-4"
          style={{
            width: "350px",
            borderLeft: "2px solid #000000",
            backgroundColor: "#fdf3dd",
          }}
        >
          <div className="sticky-top">
            {/* Header Estatísticas */}
            <div
              className="d-flex justify-content-between align-items-center mb-3 cursor-pointer"
              onClick={() => setMostrarEstatisticas(!mostrarEstatisticas)}
            >
              <div className="d-flex align-items-center">
                <h6 className="mb-0" style={{ color: "#002147" }}>
                  Estatísticas
                </h6>
              </div>
              <span style={{ color: "#df6d14" }}>
                {mostrarEstatisticas ? "▲" : "▼"}
              </span>
            </div>

            {mostrarEstatisticas && (
              <div>
                {/* Estatísticas Básicas */}
                <div className="mb-4">
                  <div className="d-flex justify-content-between mb-2">
                    <span style={{ color: "#002147" }}>Caracteres:</span>
                    <span
                      style={{
                        color: caracteres === 0 ? "#df6d14" : "#00897b",
                      }}
                    >
                      {caracteres}
                    </span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span style={{ color: "#002147" }}>Palavras:</span>
                    <span
                      style={{ color: palavras === 0 ? "#df6d14" : "#00897b" }}
                    >
                      {palavras}
                    </span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span style={{ color: "#002147" }}>Frases:</span>
                    <span
                      style={{ color: frases === 0 ? "#df6d14" : "#00897b" }}
                    >
                      {frases}
                    </span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span style={{ color: "#002147" }}>Parágrafos:</span>
                    <span
                      style={{
                        color: paragrafos === 0 ? "#df6d14" : "#00897b",
                      }}
                    >
                      {paragrafos}
                    </span>
                  </div>
                </div>

                {/* Progresso */}
                <div className="mb-4">
                  <h6 style={{ color: "#df6d14" }}>Progresso</h6>
                  <div
                    className="progress mb-2"
                    style={{ backgroundColor: "#4e342e" }}
                  >
                    <div
                      className="progress-bar"
                      style={{
                        width: `${Math.min((caracteres / 2000) * 100, 100)}%`,
                        backgroundColor: "#00897b",
                      }}
                    ></div>
                  </div>
                  <small style={{ color: "#002147" }}>
                    Meta: 2000 caracteres
                  </small>
                </div>

                {/* Dicas */}
                <div
                  className="p-3 rounded mb-4"
                  style={{
                    backgroundColor: "#e7d7c9",
                    fontSize: "0.9rem",
                    lineHeight: "1.5",
                  }}
                >
                  <p style={{ color: "#002147", margin: "0 0 10px 0" }}>
                    Seu texto possui {caracteres} caractere
                    {caracteres !== 1 ? "s" : ""}.
                    {caracteres === 0 && " Considere escrever mais."}
                    {caracteres > 0 &&
                      caracteres < 1800 &&
                      " Desenvolva melhor seus argumentos."}
                    {caracteres >= 1800 &&
                      " Ótimo! Continue refinando sua argumentação."}
                  </p>
                  <p
                    style={{ color: "#df6d14", margin: 0, fontSize: "0.85rem" }}
                  >
                    Redações nota 1000 têm entre 1800-2800 caracteres com
                    argumentação sólida.
                  </p>
                </div>

                {/* Botão de Correção */}
                <div className="mb-4">
                  <button
                    className="btn w-100"
                    onClick={iniciarCorrecao}
                    disabled={palavras < 50 || corrigindo}
                    style={{
                      backgroundColor: "#00897b",
                      color: "white",
                      border: "none",
                    }}
                  >
                    {corrigindo ? "Corrigindo..." : "Corrigir com IA"}
                  </button>
                </div>

                {/* Toolbar */}
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-2">
                    <select
                      className="form-select form-select-sm"
                      value={tamanhoFonte}
                      onChange={(e) => setTamanhoFonte(Number(e.target.value))}
                      style={{
                        backgroundColor: "#e7d7c9",
                        border: "none",
                        color: "#002147",
                        width: "70px",
                      }}
                    >
                      <option value={14}>14</option>
                      <option value={16}>16</option>
                      <option value={18}>18</option>
                      <option value={20}>20</option>
                      <option value={22}>22</option>
                    </select>
                  </div>

                  <button
                    className="btn btn-sm p-2"
                    onClick={() => setMostrarConfirmacao(true)}
                    style={{
                      backgroundColor: "#e7d7c9",
                      border: "none",
                      color: "#df6d14",
                    }}
                  >
                    Limpar
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="d-flex justify-content-between align-items-center p-3"
        style={{
          borderTop: "2px solid #000000",
          backgroundColor: "#002147",
        }}
      >
        <button
          className="btn d-flex align-items-center"
          onClick={() => navigate("/redacao")} // Redireciona para a página Redação
          style={{
            backgroundColor: "transparent",
            border: "none",
            color: "#e7d7c9",
            padding: "0.5rem 1rem",
          }}
        >
          ← VOLTAR
        </button>

        <div className="d-flex align-items-center gap-3">
          <div className="d-flex align-items-center">
            {/* Conteúdo adicional do footer */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimuladorECorrecao;
