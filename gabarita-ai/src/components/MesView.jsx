import PropTypes from "prop-types";
import EventoItem from "./EventoItem";

function MesView({ eventos }) {
  // Dias da semana abreviados em português
  const diasSemana = ["dom", "seg", "ter", "qua", "qui", "sex", "sab"];

  // Dias do mês (simplificado para o exemplo)
  const diasDoMes = Array.from({ length: 11 }, (_, i) => i + 20);

  // Agrupar eventos por dia
  const eventosPorDia = {};
  eventos.forEach((evento) => {
    if (!eventosPorDia[evento.dia]) {
      eventosPorDia[evento.dia] = [];
    }
    eventosPorDia[evento.dia].push(evento);
  });

  return (
    <div className="month-view">
      <div className="dias-semana d-flex">
        {diasSemana.map((dia) => (
          <div key={dia} className="dia-semana-header">
            {dia}
          </div>
        ))}
      </div>

      <div className="dias-grid">
        {diasDoMes.map((dia) => (
          <div key={dia} className="dia-celula">
            <div className="dia-numero">{dia}</div>
            <div className="eventos-container">
              {eventosPorDia[dia]?.map((evento, index) => (
                <EventoItem
                  key={`${dia}-${index}`}
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

MesView.propTypes = {
  eventos: PropTypes.array.isRequired,
};

export default MesView;
