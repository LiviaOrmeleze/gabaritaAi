"use client";
import ResultadoGeral from "./ResultadoGeral";
import DesempenhoPorMateria from "./DesempenhoPorMateria";
import RevisaoDetalhada from "./RevisaoDetalhada";

const TelaResultados = ({
  selectedAnswers,
  questions,
  subjectInfo,
  levelDefinitions,
  activeTab,
  setActiveTab,
  onResetTest,
  onBackToStart,
}) => {
  const calculateScoreBySubject = () => {
    const subjectScores = {};

    // Inicializar contadores para cada matéria
    Object.keys(subjectInfo).forEach((subject) => {
      subjectScores[subject] = { correct: 0, total: 0, questions: [] };
    });

    // Calcular pontuações por matéria
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
            <img
              src="/raposa.png"
              alt="Raposa"
              className="img-fluid"
              style={{ width: "100px", height: "100px" }}
            />
          </div>
          <h1 className="card-title h2">Resultado do Teste</h1>
          <button
            onClick={onBackToStart}
            className="btn btn-outline-light btn-sm position-absolute"
            style={{ top: "15px", left: "15px" }}
            title="Voltar ao início"
          >
            ← Voltar
          </button>
        </div>
        <div className="card-body">
          <ResultadoGeral
            percentage={percentage}
            level={level}
            color={color}
            description={description}
            score={score}
            answered={answered}
          />

          {/* Tabs para resultados por matéria */}
          <ul className="nav nav-tabs mb-3">
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "geral" ? "active" : ""}`}
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

          {activeTab === "geral" && (
            <DesempenhoPorMateria
              subjectScores={subjectScores}
              subjectInfo={subjectInfo}
              getLevel={getLevel}
              setActiveTab={setActiveTab}
            />
          )}

          {activeTab === "detalhes" && (
            <RevisaoDetalhada
              subjectScores={subjectScores}
              subjectInfo={subjectInfo}
              getLevel={getLevel}
              questions={questions}
              selectedAnswers={selectedAnswers}
            />
          )}

          <button
            onClick={onResetTest}
            className="btn btn-primary btn-lg w-100"
          >
            Fazer Teste Novamente
          </button>
        </div>
      </div>
    </div>
  );
};

export default TelaResultados;
