"use client"

const DesempenhoPorMateria = ({ subjectScores, subjectInfo, getLevel, setActiveTab }) => {
  return (
    <div className="row g-3 mb-4">
      {Object.entries(subjectScores).map(([subjectKey, score]) => {
        const subjectData = subjectInfo[subjectKey]
        const subjectPercentage = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0
        const subjectLevel = getLevel(subjectPercentage)

        return (
          <div key={subjectKey} className="col-md-6">
            <div className="card h-100">
              <div className={`card-header bg-${subjectData.color} text-white p-2`}>
                <div className="d-flex align-items-center">
                  <span className="me-2 fs-4 p-1 bg-light rounded">{subjectData.icon}</span>
                  <div>
                    <h6 className="mb-0">{subjectData.name}</h6>
                    <small className="opacity-75">{subjectData.description}</small>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="h4 fw-bold">{subjectPercentage}%</span>
                  <span className={`badge ${subjectLevel.color.replace("text-", "bg-")}`}>{subjectLevel.level}</span>
                </div>
                <div className="progress mb-2" style={{ height: "8px" }}>
                  <div className="progress-bar" style={{ width: `${subjectPercentage}%` }}></div>
                </div>
                <div className="d-flex justify-content-between">
                  <small className="text-muted">
                    {score.correct}/{score.total} corretas
                  </small>
                  <button onClick={() => setActiveTab("detalhes")} className="btn btn-link btn-sm p-0">
                    Ver detalhes
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default DesempenhoPorMateria;
