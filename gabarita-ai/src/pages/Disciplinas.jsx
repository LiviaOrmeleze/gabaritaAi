"use client";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { questions, subjectInfo, levelDefinitions } from "../data/testData";

const Disciplinas = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(
    Array(questions.length).fill(undefined)
  );
  const [showResults, setShowResults] = useState(false);
  const [testStarted, setTestStarted] = useState(false);
  const [activeTab, setActiveTab] = useState("geral");
  const [showHistory, setShowHistory] = useState(false);
  // Removido o estado problemático por enquanto

  // Funções simples sem localStorage
  const handleAnswerSelect = (answerIndex) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setShowResults(false);
    setTestStarted(false);
    setActiveTab("geral");

    try {
      const emptyAnswers = [];
      for (let i = 0; i < questions.length; i++) {
        emptyAnswers.push(undefined);
      }
      setSelectedAnswers(emptyAnswers);
    } catch (error) {
      console.error("Erro ao resetar respostas:", error);
      setSelectedAnswers([]);
    }
  };

  const backToStart = () => {
    setShowResults(false);
    setTestStarted(false);
  };

  const calculateScoreBySubject = () => {
    const subjectScores = {};

    Object.keys(subjectInfo).forEach((subject) => {
      subjectScores[subject] = { correct: 0, total: 0, questions: [] };
    });

    questions.forEach((question, index) => {
      const subject = question.subject;
      subjectScores[subject].total++;
      subjectScores[subject].questions.push(question);

      if (selectedAnswers[index] === question.correctAnswer) {
        subjectScores[subject].correct++;
      }
    });

    return subjectScores;
  };

  const getLevel = (percentage) => {
    const level = levelDefinitions.find(
      (def) => percentage >= def.min && percentage <= def.max
    );
    return level || levelDefinitions[0];
  };

  const calculateOverallScore = () => {
    let score = 0;
    let answered = 0;

    questions.forEach((_, index) => {
      if (selectedAnswers[index] !== undefined) {
        answered++;
        if (selectedAnswers[index] === questions[index].correctAnswer) {
          score++;
        }
      }
    });

    return { score, answered };
  };

  const subjectQuestionCounts = Object.keys(subjectInfo).reduce(
    (acc, subject) => {
      acc[subject] = questions.filter((q) => q.subject === subject).length;
      return acc;
    },
    {}
  );

  // TELA INICIAL
  if (!testStarted) {
    return (
      <div
        className="min-vh-100 d-flex align-items-center justify-content-center p-4"
        style={{ backgroundColor: "#e7d7c9" }}
      >
        <div
          className="card shadow-lg"
          style={{ maxWidth: "800px", width: "100%" }}
        >
          <div className="card-header text-center bg-primary text-white">
            <div className="mb-3">
              <span className="display-4">📚</span>
            </div>
            <h1 className="card-title h2 mb-2">
              Teste de Nível - Ensino Médio
            </h1>
            <p className="mb-0">
              Avalie seus conhecimentos em todas as matérias do Ensino Médio
            </p>
          </div>
          <div className="card-body">
            {showHistory ? (
              <div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4>Resultados Anteriores</h4>
                  <button
                    onClick={() => setShowHistory(false)}
                    className="btn btn-outline-secondary"
                  >
                    Voltar
                  </button>
                </div>
                <div className="alert alert-info">
                  <p>Esta é uma versão simplificada.</p>
                  <p>
                    Para ver resultados anteriores, complete um teste primeiro!
                  </p>
                </div>
              </div>
            ) : (
              <>
                <div className="alert alert-info mb-4">
                  <h5 className="alert-heading">Instruções:</h5>
                  <ul className="mb-0 small">
                    <li>
                      O teste contém {questions.length} questões de 12 matérias
                      diferentes
                    </li>
                    <li>Cada questão tem apenas uma resposta correta</li>
                    <li>Você pode navegar entre as questões</li>
                    <li>
                      Ao final, você receberá seu nível geral e por matéria
                    </li>
                  </ul>
                </div>

                <div className="row g-3 mb-4">
                  {Object.entries(subjectInfo).map(([key, info]) => {
                    const count = subjectQuestionCounts[key] || 0;
                    return (
                      <div key={key} className="col-6 col-md-4 col-lg-3">
                        <div className="card h-100 text-center border-2">
                          <div className="card-body p-3">
                            <div className="fs-3 mb-2">{info.icon}</div>
                            <h6 className="card-title small mb-1">
                              {info.name}
                            </h6>
                            <small className="text-muted">
                              {count} questões
                            </small>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <button
                  onClick={() => setTestStarted(true)}
                  className="btn btn-primary btn-lg w-100 mb-3"
                >
                  Iniciar Teste
                </button>

                <button
                  onClick={() => setShowHistory(true)}
                  className="btn btn-outline-primary btn-lg w-100"
                >
                  Ver Resultados Anteriores
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  // TELA DE RESULTADOS
  if (showResults) {
    const subjectScores = calculateScoreBySubject();
    const { score, answered } = calculateOverallScore();
    const percentage = answered > 0 ? Math.round((score / answered) * 100) : 0;
    const { level, color, description } = getLevel(percentage);

    return (
      <div
        className="min-vh-100 d-flex align-items-center justify-content-center p-4"
        style={{ backgroundColor: "#e7d7c9" }}
      >
        <div
          className="card shadow-lg"
          style={{ maxWidth: "900px", width: "100%" }}
        >
          <div className="card-header text-center bg-success text-white">
            <div className="mb-3">
              <span className="display-4">🏆</span>
            </div>
            <h1 className="card-title h2">Resultado do Teste</h1>
            <button
              onClick={backToStart}
              className="btn btn-outline-light btn-sm position-absolute"
              style={{ top: "15px", left: "15px" }}
              title="Voltar ao início"
            >
              ← Voltar
            </button>
          </div>
          <div className="card-body">
            {/* Resultado Geral */}
            <div className="text-center bg-primary bg-opacity-10 p-4 rounded mb-4">
              <div className="display-1 fw-bold text-primary mb-2">
                {percentage}%
              </div>
              <div className={`h3 fw-bold ${color} mb-2`}>
                Nível Geral: {level}
              </div>
              <p className="text-muted">{description}</p>
              <div className="h5 text-dark">
                <span className="fw-bold">{score}</span> de {answered} questões
                corretas
              </div>
            </div>

            {/* Tabs para resultados por matéria */}
            <ul className="nav nav-tabs mb-3">
              <li className="nav-item">
                <button
                  className={`nav-link ${
                    activeTab === "geral" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("geral")}
                >
                  Desempenho por Matéria
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${
                    activeTab === "detalhes" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("detalhes")}
                >
                  Revisão Detalhada
                </button>
              </li>
            </ul>

            {/* Desempenho por Matéria */}
            {activeTab === "geral" && (
              <div className="row g-3 mb-4">
                {Object.entries(subjectScores).map(([subjectKey, score]) => {
                  const subjectData = subjectInfo[subjectKey];
                  const subjectPercentage =
                    score.total > 0
                      ? Math.round((score.correct / score.total) * 100)
                      : 0;
                  const subjectLevel = getLevel(subjectPercentage);

                  return (
                    <div key={subjectKey} className="col-md-6">
                      <div className="card h-100">
                        <div
                          className={`card-header bg-${subjectData.color} text-white p-2`}
                        >
                          <div className="d-flex align-items-center">
                            <span className="me-2">{subjectData.icon}</span>
                            <div>
                              <h6 className="mb-0">{subjectData.name}</h6>
                              <small className="opacity-75">
                                {subjectData.description}
                              </small>
                            </div>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="d-flex justify-content-between align-items-center mb-2">
                            <span className="h4 fw-bold">
                              {subjectPercentage}%
                            </span>
                            <span
                              className={`badge ${subjectLevel.color.replace(
                                "text-",
                                "bg-"
                              )}`}
                            >
                              {subjectLevel.level}
                            </span>
                          </div>
                          <div
                            className="progress mb-2"
                            style={{ height: "8px" }}
                          >
                            <div
                              className="progress-bar"
                              style={{ width: `${subjectPercentage}%` }}
                            ></div>
                          </div>
                          <div className="d-flex justify-content-between">
                            <small className="text-muted">
                              {score.correct}/{score.total} corretas
                            </small>
                            <button
                              onClick={() => setActiveTab("detalhes")}
                              className="btn btn-link btn-sm p-0"
                            >
                              Ver detalhes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Revisão Detalhada */}
            {activeTab === "detalhes" && (
              <div
                className="mb-4"
                style={{ maxHeight: "500px", overflowY: "auto" }}
              >
                {Object.entries(subjectScores).map(([subjectKey, score]) => {
                  const subjectData = subjectInfo[subjectKey];
                  const subjectPercentage =
                    score.total > 0
                      ? Math.round((score.correct / score.total) * 100)
                      : 0;
                  const subjectLevel = getLevel(subjectPercentage);

                  return (
                    <div key={subjectKey} className="card mb-3">
                      <div className="card-header">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <span className="me-2">{subjectData.icon}</span>
                            <h6 className="mb-0">{subjectData.name}</h6>
                          </div>
                          <span
                            className={`badge ${subjectLevel.color.replace(
                              "text-",
                              "bg-"
                            )}`}
                          >
                            {subjectLevel.level} ({subjectPercentage}%)
                          </span>
                        </div>
                      </div>
                      <div className="card-body">
                        {score.questions.map((question) => {
                          const questionIndex = questions.findIndex(
                            (q) => q.id === question.id
                          );
                          const userAnswer = selectedAnswers[questionIndex];
                          const isCorrect =
                            userAnswer === question.correctAnswer;
                          const difficultyColors = {
                            easy: "success",
                            medium: "warning",
                            hard: "danger",
                          };

                          return (
                            <div
                              key={question.id}
                              className="d-flex align-items-start mb-3 p-2 bg-light rounded"
                            >
                              <div className="me-3 mt-1">
                                {isCorrect ? (
                                  <span className="text-success">✓</span>
                                ) : (
                                  <span className="text-danger">✗</span>
                                )}
                              </div>
                              <div className="flex-grow-1">
                                <div className="d-flex justify-content-between">
                                  <p className="mb-1 fw-medium">
                                    {question.question}
                                  </p>
                                  <span
                                    className={`badge bg-${
                                      difficultyColors[question.difficulty]
                                    } ms-2`}
                                  >
                                    {question.difficulty === "easy"
                                      ? "Fácil"
                                      : question.difficulty === "medium"
                                      ? "Médio"
                                      : "Difícil"}
                                  </span>
                                </div>
                                <p className="mb-1 small text-success">
                                  Resposta correta:{" "}
                                  {question.options[question.correctAnswer]}
                                </p>
                                {!isCorrect && userAnswer !== undefined && (
                                  <p className="mb-0 small text-danger">
                                    Sua resposta: {question.options[userAnswer]}
                                  </p>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            <button
              onClick={resetTest}
              className="btn btn-primary btn-lg w-100"
            >
              Fazer Teste Novamente
            </button>
          </div>
        </div>
      </div>
    );
  }

  // TELA DE QUESTÕES
  const question = questions[currentQuestion];
  const subjectData = subjectInfo[question.subject];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const difficultyColors = {
    easy: "success",
    medium: "warning",
    hard: "danger",
  };

  const answeredCount = selectedAnswers.filter((a) => a !== undefined).length;

  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center p-4"
      style={{ backgroundColor: "#e7d7c9" }}
    >
      <div
        className="card shadow-lg"
        style={{ maxWidth: "700px", width: "100%" }}
      >
        <div className="card-header">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <small className="text-muted">
              Questão {currentQuestion + 1} de {questions.length}
            </small>
            <div className="d-flex align-items-center gap-2">
              <span
                className={`badge bg-${subjectData.color} d-flex align-items-center`}
              >
                <span className="me-1">{subjectData.icon}</span>
                {subjectData.name}
              </span>
              <span
                className={`badge bg-${difficultyColors[question.difficulty]}`}
              >
                {question.difficulty === "easy"
                  ? "Fácil"
                  : question.difficulty === "medium"
                  ? "Médio"
                  : "Difícil"}
              </span>
            </div>
          </div>
          <div className="progress mb-3" style={{ height: "8px" }}>
            <div
              className="progress-bar"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <h5 className="card-title">{question.question}</h5>
        </div>
        <div className="card-body">
          <div className="d-grid gap-3 mb-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`btn text-start p-3 ${
                  selectedAnswers[currentQuestion] === index
                    ? "btn-primary"
                    : "btn-outline-secondary"
                }`}
              >
                <div className="d-flex align-items-center">
                  <div
                    className={`me-3 rounded-circle border d-flex align-items-center justify-content-center ${
                      selectedAnswers[currentQuestion] === index
                        ? "bg-white text-primary border-white"
                        : "border-secondary"
                    }`}
                    style={{ width: "24px", height: "24px" }}
                  >
                    {selectedAnswers[currentQuestion] === index && (
                      <div
                        className="bg-primary rounded-circle"
                        style={{ width: "8px", height: "8px" }}
                      ></div>
                    )}
                  </div>
                  <span>{option}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <button
              className="btn btn-outline-secondary"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
            >
              Anterior
            </button>
            <small className="text-muted">
              {answeredCount}/{questions.length} respondidas
            </small>
            <button
              className="btn btn-primary"
              onClick={handleNext}
              disabled={selectedAnswers[currentQuestion] === undefined}
            >
              {currentQuestion === questions.length - 1
                ? "Finalizar"
                : "Próxima"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disciplinas;
