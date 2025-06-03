import PropTypes from "prop-types";
import EventoItem from "./EventoItem";

function DiaView({ eventos }) {
  // Para simplificar, vamos mostrar apenas os eventos do dia 20
  const diaAtual = 20;
  const eventosDoDia = eventos.filter((evento) => evento.dia === diaAtual);

  // Horários do dia (simplificado)
  const horarios = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];

  return (
    <div className="day-view">
      <h2 className="mb-3">Dia {diaAtual}</h2>

      <div className="horarios-container">
        {horarios.map((horario) => (
          <div key={horario} className="horario-row d-flex">
            <div className="horario-label">{horario}</div>
            <div className="horario-eventos flex-grow-1">
              {eventosDoDia
                .filter((evento) => evento.horario === horario)
                .map((evento, index) => (
                  <EventoItem
                    key={`${horario}-${index}`}
                    materia={evento.materia}
                    tema={evento.tema}
                    tempo={evento.tempo}
                    cor={evento.cor}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

DiaView.propTypes = {
  eventos: PropTypes.array.isRequired,
};

export default DiaView;
