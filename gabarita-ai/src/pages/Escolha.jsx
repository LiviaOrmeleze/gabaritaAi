import Vestibulanda from '../assets/vestibulanda.jpg'; 
import Concurseiro from '../assets/concurseiro.jpg';
import Notaalta from '../assets/notaalta.jpg';

const Escolha = () => {
  return (
    <div className='d-flex' style={{ height: '100vh' }}>

      <div className='fundoesquerdo col-6 d-flex flex-column align-items-center justify-content-center'>
        <img className='w-50 h-50 rounded-4' src={Notaalta} alt="" />
        <div className='oqvcp p-3 rounded-4 w-50 h-5'>
          <h3 className='subtitulo'>O que você procura?</h3>
          <p className="p-1 fs-6 d-flex text-wrap text-light">
            No nosso site, você escolhe o modo de estudo ideal para seu objetivo, com cronogramas flexíveis, simulados, videoaulas e acompanhamento personalizado.
          </p>
        </div>
      </div>

      <div className='fundodireito col-6'>
       <div className='container '>
        <div className='container d-flex align-items-center my-4'>
          <div className='conteudo p-3 text-wrap w-50'>
            <h3>Vestibular</h3>
            <p>
              Para vestibulandos, oferecemos materiais completos para ENEM e principais provas, incluindo resumos, exercícios, simulados e dicas de redação.
            </p>
          </div>
          <img className='w-25 h-25 rounded-4' src={Vestibulanda} alt="" />
        </div>

        <div className='container d-flex align-items-center my-4'>
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

    </div>
  );
};

export default Escolha;
