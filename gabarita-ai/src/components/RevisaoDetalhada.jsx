const RevisaoDetalhada = ({ subjectScores, subjectInfo, getLevel, questions, selectedAnswers }) => {
    return (
      <div className="mb-4" style={{ maxHeight: "500px", overflowY: "auto" }}>
        {Object.entries(subjectScores).map(([subjectKey, score]) => {
          const subjectData = subjectInfo[subjectKey]
          const subjectPercentage = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0
          const subjectLevel = getLevel(subjectPercentage)
  
          return (
            <div key={subjectKey} className="card mb-3">
              <div className="card-header">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <span className="me-2 fs-5 p-1 bg-light rounded">{subjectData.icon}</span>
                    <h6 className="mb-0">{subjectData.name}</h6>
                  </div>
                  <span className={`badge ${subjectLevel.color.replace("text-", "bg-")}`}>
                    {subjectLevel.level} ({subjectPercentage}%)
                  </span>
                </div>
              </div>
              <div className="card-body">
                {score.questions.map((question) => {
                  const questionIndex = questions.findIndex((q) => q.id === question.id)
                  const userAnswer = selectedAnswers[questionIndex]
                  const isCorrect = userAnswer === question.correctAnswer
                  const difficultyColors = {
                    easy: "success",
                    medium: "warning",
                    hard: "danger",
                  }
  
                  return (
                    <div key={question.id} className="d-flex align-items-start mb-3 p-2 bg-light rounded">
                      <div className="me-3 mt-1">
                        {isCorrect ? <span className="text-success">✓</span> : <span className="text-danger">✗</span>}
                      </div>
                      <div className="flex-grow-1">
                        <div className="d-flex justify-content-between">
                          <p className="mb-1 fw-medium">{question.question}</p>
                          <span className={`badge bg-${difficultyColors[question.difficulty]} ms-2`}>
                            {question.difficulty === "easy"
                              ? "Fácil"
                              : question.difficulty === "medium"
                                ? "Médio"
                                : "Difícil"}
                          </span>
                        </div>
                        <p className="mb-1 small text-success">
                          Resposta correta: {question.options[question.correctAnswer]}
                        </p>
                        {!isCorrect && userAnswer !== undefined && (
                          <p className="mb-0 small text-danger">Sua resposta: {question.options[userAnswer]}</p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    )
  }
  
  export default RevisaoDetalhada;
  