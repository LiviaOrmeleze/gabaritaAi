import React from 'react'
import PropTypes from "prop-types";

function HeaderCalendario({ mesAtual, onChangeView, visualizacaoAtual, onPrevious, onNext }) {
  return (
    <div className="calendar-header d-flex justify-content-between align-items-center mb-3 ">
      <div className="d-flex align-items-center">
        <h1 className="fs-3 jetbrains m-0">{mesAtual}</h1>
        <div className="navegacao-botoes ms-4">
          <button className="btn btn-link" onClick={onPrevious}>
            <i className="bi bi-chevron-left"></i>
          </button>
          <button className="btn btn-link" onClick={onNext}>
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>

      <div className="btn-group me-5 px-3 ">
        <button
          type="button"
          className={`btn ${visualizacaoAtual === "mes" ? "btncalendario" : "btn-secondary"}`}
          onClick={() => onChangeView("mes")}
        >
          Mês
        </button>
        <button
          type="button"
          className={`btn ${visualizacaoAtual === "semana" ? "btn-light" : "btn-secondary"}`}
          onClick={() => onChangeView("semana")}
        >
          Semana
        </button>
        <button
          type="button"
          className={`btn ${visualizacaoAtual === "dia" ? "btn-light" : "btn-secondary"}`}
          onClick={() => onChangeView("dia")}
        >
          Dia
        </button>
      </div>
    </div>
  )
}

HeaderCalendario.propTypes = {
  mesAtual: PropTypes.string.isRequired,
  onChangeView: PropTypes.func.isRequired,
  visualizacaoAtual: PropTypes.string.isRequired,
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
}

export default HeaderCalendario



