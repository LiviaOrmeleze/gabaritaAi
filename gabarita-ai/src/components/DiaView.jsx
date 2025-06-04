import PropTypes from "prop-types";
import EventoItem from "./EventoItem";

function DiaView({ eventos }) {
  // Obter o dia atual dinamicamente
  const diaAtual = new Date().getDate();

  // Filtrar eventos para o dia atual
  const eventosDoDia = eventos.filter((evento) => evento.dia === diaAtual);

  return (
    <div className="day-view">
      <h2 className="mb-3">Dia {diaAtual}</h2>
      <h3 className="mb-3">Conteúdo do dia:</h3>
      <div className="eventos-container">
        {eventosDoDia.length > 0 ? (
          eventosDoDia.map((evento, index) => (
            <EventoItem
              key={index}
              materia={evento.materia}
              tema={evento.tema}
              tempo={evento.tempo}
              cor={evento.cor}
            />
          ))
        ) : (
          <p className="text-muted">Nenhum conteúdo para estudar hoje.</p>
        )}
      </div>
    </div>
  );
}

DiaView.propTypes = {
  eventos: PropTypes.array.isRequired,
};

export default DiaView;