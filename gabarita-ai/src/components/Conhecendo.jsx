import React from 'react'
import CardConheca from './CardConheca';
import caixabranca from '../assets/caixabranca.png';
import caixabege from '../assets/caixabege.png';

const Conhecendo = () => {
   const informacoes = React.useMemo(
    () => [
      {
        id: 1,
        numero: "01",
        imagem: caixabranca,
        subtitulo: "Teste seu nível",
        texto: "Para avaliar suas habilidades nas principais disciplinas e identificar os tópicos que precisam de mais atenção. Aqui, você terá uma visão clara do seu desempenho!",
      },
      {
        id: 2,
        numero: "02",
        imagem: caixabege,
        subtitulo: "Meu Cronograma",
        texto: "A partir do resultado de seu teste, criaremos um cronograma adaptado às suas necessidades, em que você pode planejar suas revisões!",
      },
      {
        id: 3,
        numero: "03",
        imagem: caixabege,
        subtitulo: "Meus Desempenhos",
        texto: "Acompanhe sua evolução e veja o quanto você está progredindo! Com nosso gráfico, você pode visualizar seus acertos, pontos de melhoria e ver os pontos necessários para retomada!",
      },
      {
        id: 4,
        numero: "04",
        imagem: caixabranca,
        subtitulo: "Planos",
        texto: "Escolha o plano que melhor se adapta à sua jornada rumo à aprovação! Oferecemos opções de pagamento flexíveis para que você tenha acesso a todos os recursos necessários sem preocupações!",
      },
    ],
    []
  );

  return (
    <div id="cardConheca" className="d-grid gap-4" style={{ gridTemplateColumns: 'repeat(2, 1fr)', rowGap: '20px' }}>
      {informacoes.map((info) => (
        <CardConheca
          key={info.id}
          numero={info.numero}
          imagem={info.imagem}
          subtitulo={info.subtitulo}
          texto={info.texto}
        />
      ))}
    </div>
  );
};

export default Conhecendo;