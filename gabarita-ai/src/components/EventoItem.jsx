import PropTypes from "prop-types"

function EventoItem({ materia, tema, tempo, cor }) {
  return (
    <div className={`evento-item ${cor}`}>
      <div className="evento-materia">{materia}</div>
      <div className="evento-tema">{tema}</div>
      <div className="evento-tempo">{tempo}</div>
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
