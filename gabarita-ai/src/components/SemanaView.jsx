import PropTypes from "prop-types";
import EventoItem from "./EventoItem";

function SemanaView({ eventos }) {
  // Dias da semana abreviados em português
  const diasSemana = ["dom", "seg", "ter", "qua", "qui", "sex", "sab"];

  // Obter a data atual
  const hoje = new Date();

  // Calcular o início e o fim da semana atual
  const diaAtual = hoje.getDate();
  const diaDaSemana = hoje.getDay(); // Índice do dia da semana (0 = domingo, 6 = sábado)
  const inicioSemana = new Date(hoje);
  inicioSemana.setDate(diaAtual - diaDaSemana); // Primeiro dia da semana
  const fimSemana = new Date(inicioSemana);
  fimSemana.setDate(inicioSemana.getDate() + 6); // Último dia da semana

  // Filtrar eventos apenas para a semana atual
  const eventosDaSemana = eventos.filter(
    (evento) => evento.dia >= inicioSemana.getDate() && evento.dia <= fimSemana.getDate()
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
      <div className="d-flex justify-content-between mb-2 d-flex">
        {diasSemana.map((dia, index) => {
          const diaDoMes = inicioSemana.getDate() + index;
          return (
            <div key={dia} className="d-flex flex-column flex-fill border ">
              <div className="p-2 text-center border-bottom bordercalendario ">
                <div className="fw-normal text-lowercase">{dia}</div>
                <div className="dia-numero fs-5 fw-bold">{diaDoMes}</div>
              </div>
              <div className="p-1 d-flex flex-column gap-1 overflow-auto flex-fill bordercalendario ">
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