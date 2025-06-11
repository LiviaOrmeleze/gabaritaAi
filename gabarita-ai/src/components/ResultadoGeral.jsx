const ResultadoGeral = ({
  percentage,
  level,
  color,
  description,
  score,
  answered,
}) => {
  return (
    <div className="text-center bg-primary bg-opacity-10 p-4 rounded mb-4">
      <div className="display-1 fw-bold text-primary mb-2">{percentage}%</div>
      <div className={`h3 fw-bold ${color} mb-2`}>Nível Geral: {level}</div>
      <p className="text-muted">{description}</p>
      <div className="h5 text-dark">
        <span className="fw-bold">{score}</span> de {answered} questões corretas
      </div>
    </div>
  );
};

export default ResultadoGeral;
