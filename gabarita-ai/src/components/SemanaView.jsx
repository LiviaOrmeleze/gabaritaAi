import PropTypes from "prop-types";
import EventoItem from "./EventoItem";

function SemanaView({ eventos }) {
  // Dias da semana abreviados em português
  const diasSemana = ["dom", "seg", "ter", "qua", "qui", "sex", "sab"];

  // Filtrar eventos apenas para a semana atual (simplificado)
  const eventosDaSemana = eventos.filter(
    (evento) => evento.dia >= 20 && evento.dia <= 26
  );

  // Agrupar eventos por dia
  const eventosPorDia = {};
  eventosDaSemana.forEach((evento) => {
    if (!eventosPorDia[evento.dia]) {
      eventosPorDia[evento.dia] = [];
    }
    eventosPorDia[evento.dia].push(evento);
  });

  return (
    <div className="week-view">
      <div className="dias-semana d-flex">
        {diasSemana.map((dia, index) => {
          const diaDoMes = 20 + index;
          return (
            <div key={dia} className="dia-coluna">
              <div className="dia-header">
                <div className="dia-nome">{dia}</div>
                <div className="dia-numero">{diaDoMes}</div>
              </div>
              <div className="eventos-dia">
                {eventosPorDia[diaDoMes]?.map((evento, idx) => (
                  <EventoItem
                    key={`${diaDoMes}-${idx}`}
                    materia={evento.materia}
                    tema={evento.tema}
                    tempo={evento.tempo}
                    cor={evento.cor}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

SemanaView.propTypes = {
  eventos: PropTypes.array.isRequired,
};

export default SemanaView;
