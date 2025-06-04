import PropTypes from "prop-types"

function EventoItem({ materia, tema, tempo, cor }) {
  return (
    <div className={`p-1 rounded small ${cor}`}>
      <div className="evento-materia fw-bold">{materia}</div>
      <div className="fs-6 text-nowrap text-truncate">{tema}</div>
      <div className="fs-6 text-end">{tempo}</div>
    </div>
  )
}

EventoItem.propTypes = {
  materia: PropTypes.string.isRequired,
  tema: PropTypes.string.isRequired,
  tempo: PropTypes.string.isRequired,
  cor: PropTypes.string.isRequired,
}

export default EventoItem
