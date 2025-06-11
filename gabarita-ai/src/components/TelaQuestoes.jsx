"use client";

const TelaQuestoes = ({
  currentQuestion,
  questions,
  selectedAnswers,
  subjectInfo,
  onAnswerSelect,
  onNext,
  onPrevious,
}) => {
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
                <span className="me-1 fs-6">{subjectData.icon}</span>
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
                onClick={() => onAnswerSelect(index)}
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
              onClick={onPrevious}
              disabled={currentQuestion === 0}
            >
              Anterior
            </button>
            <small className="text-muted">
              {answeredCount}/{questions.length} respondidas
            </small>
            <button
              className="btn btn-primary"
              onClick={onNext}
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

export default TelaQuestoes;
