"use client";

const TelaInicial = ({
  onStartTest,
  questions,
  subjectInfo,
  levelDefinitions,
}) => {
  // Agrupar questões por matéria para a tela inicial
  const subjectQuestionCounts = Object.keys(subjectInfo).reduce(
    (acc, subject) => {
      acc[subject] = questions.filter((q) => q.subject === subject).length;
      return acc;
    },
    {}
  );

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
            <img
              src="/raposa.png"
              alt="Raposa"
              className="img-fluid"
              style={{ width: "80px", height: "80px" }}
            />
          </div>
          <h1 className="card-title h2 mb-2">Teste de Nível - Ensino Médio</h1>
          <p className="mb-0">
            Avalie seus conhecimentos em todas as matérias do Ensino Médio
          </p>
        </div>
        <div className="card-body">
          <div className="alert alert-info mb-4">
            <h5 className="alert-heading">Instruções:</h5>
            <ul className="mb-0 small">
              <li>
                O teste contém {questions.length} questões de 12 matérias
                diferentes
              </li>
              <li>Cada questão tem apenas uma resposta correta</li>
              <li>Você pode navegar entre as questões</li>
              <li>Ao final, você receberá seu nível geral e por matéria</li>
              <li>
                Os níveis são: Iniciante, Básico, Intermediário Inicial,
                Intermediário, Intermediário Avançado, Avançado e Especialista
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
                      <div
                        className="fs-1 mb-2 text-center p-2 bg-light rounded-circle mx-auto"
                        style={{
                          width: "60px",
                          height: "60px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {info.icon}
                      </div>
                      <h6 className="card-title small mb-1">{info.name}</h6>
                      <small className="text-muted">{count} questões</small>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="alert alert-warning">
            <h6 className="alert-heading">Sistema de Níveis:</h6>
            <div className="row">
              {levelDefinitions.map((level) => (
                <div key={level.level} className="col-md-6 mb-1">
                  <small>
                    <span className={`fw-bold ${level.color}`}>●</span>{" "}
                    {level.level} ({level.min}-{level.max}%)
                  </small>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={onStartTest}
            className="btn btn-primary btn-lg w-100"
          >
            Iniciar Teste
          </button>
        </div>
      </div>
    </div>
  );
};

export default TelaInicial;
