import Vestibulanda from '../assets/vestibulanda.jpg';  
import Concurseiro from '../assets/concurseiro.jpg';
import Notaalta from '../assets/notaalta.jpg';

const Escolha = () => {
  return (
<div className='d-flex'>

      {/* LADO ESQUERDO */}
      <div className='fundoesquerdo col-6 d-flex flex-column align-items-center '>

        <img className='w-75 h-75 rounded-4 img-fluid' src={Notaalta} alt="" />
        <div className='oqvcp p-3 rounded-4 w-50 mb-4 translate-middle-y d-flex justify-content-center align-items-center flex-column text-center'>
        <h3 className='subtitulo'>O que você procura?</h3>
        <p className="p-1 fs-6 d-flex text-wrap text-light">
           No nosso site, você escolhe o modo de estudo ideal para seu objetivo, com cronogramas flexíveis, simulados, videoaulas e acompanhamento personalizado.
        </p>
      </div>


      </div>

      {/* LADO DIREITO */}

      <div className='fundodireito col-6 '>

          <div className='d-flex justify-content-center align-items-center'>
            <div className='conteudo p-3 text-wrap w-50'>
              <h3>Vestibular</h3>
              <p>
                Para vestibulandos, oferecemos materiais completos para ENEM e principais provas, incluindo resumos, exercícios, simulados e dicas de redação.
              </p>
            </div>
            <img className='w-25 h-25 rounded-4' src={Vestibulanda} alt="" />
          </div>

          <div className='d-flex justify-content-center align-items-center'>
            <img className='w-25 h-25 rounded-4' src={Concurseiro} alt="" />
            <div className='conteudo p-3 text-wrap w-50'>
              <h3>Concurseiro público</h3>
              <p>
                Para concurseiros, temos conteúdos atualizados conforme os editais, questões comentadas, videoaulas e planos estratégicos para otimizar sua preparação e garantir sua aprovação!
              </p>
            </div>
          </div>

      </div>

    </div>
  );
};

export default Escolha;
