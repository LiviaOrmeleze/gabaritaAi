import PropTypes from "prop-types";
import EventoItem from "./EventoItem";

function MesView({ eventos }) {
  // Dias da semana abreviados em português
  const diasSemana = ["dom", "seg", "ter", "qua", "qui", "sex", "sab"];

  // Obter o número de dias no mês atual
  const mesAtual = new Date().getMonth(); // Índice do mês (0-11)
  const anoAtual = new Date().getFullYear(); // Ano atual
  const diasDoMes = Array.from(
    { length: new Date(anoAtual, mesAtual + 1, 0).getDate() }, // Número de dias no mês
    (_, i) => i + 1 // Dias do mês (1-31)
  );

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
          <div key={dia} className="flex-fill text-center p-2 fw-medium text-lowercase">
            {dia}
          </div>
        ))}
      </div>

      <div className="dias-grid">
        {diasDoMes.map((dia) => (
          <div key={dia} className="border border-dark p-1 position-relative">
            <div className="fw-bold mb-1 fs-5">{dia}</div>
            <div className="d-flex flex-column gap-1 ">
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