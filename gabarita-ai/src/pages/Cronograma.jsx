import React from 'react'

const Cronograma = () => {
  return (
    <div>
            <div className="calendario-container">
        <HeaderCalendario
          mesAtual={mesAtual}
          onChangeView={handleChangeView}
          visualizacaoAtual={visualizacao}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
        {visualizacao === "mes" && <MesView eventos={eventosEstudo} />}
        {visualizacao === "semana" && <SemanaView eventos={eventosEstudo} />}
        {visualizacao === "dia" && <DiaView eventos={eventosEstudo} />}
      </div>
    </div>
  )
}

export default Cronograma
