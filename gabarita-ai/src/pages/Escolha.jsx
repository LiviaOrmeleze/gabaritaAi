import Vestibulanda from '../assets/vestibulanda.jpg';  
import Concurseiro from '../assets/concurseiro.jpg';
import Notaalta from '../assets/notaalta.jpg';

const Escolha = () => {
  return (
    <div className='d-flex min-vh-100'>

      {/* LADO ESQUERDO */}
      <div className='fundoesquerdo col-6 d-flex flex-column align-items-center'>

      <div className='col-12 col-md-10 justify-flex p-5'>

      <img className='rounded-4 img-fluid ' src={Notaalta} alt="" />
        
        <div className=''>
        <div className='oqvcp p-3 rounded-4 mb-4 d-flex flex-column text-center w-75 translate-middle-y'>
          <h3 className='subtitulo'>O que você procura?</h3>
          <p className="py-1 fs-6 d-flex text-wrap text-light align-items-end">
            No nosso site, você escolhe o modo de estudo ideal para seu objetivo, com cronogramas flexíveis, simulados, videoaulas e acompanhamento personalizado.
          </p>
        </div>
        </div>

      </div>

      </div>

      {/* LADO DIREITO */}
      <div className='fundodireito col-12 col-md-6 p-4 align-items-center'> 

      <div className='d-flex flex-column align-items-center gap-5 mt-5'>

<div className='d-flex justify-content-center align-items-center w-75'>
  <div className='conteudo px-3 text-wrap w-50'>
    <h3>Vestibular</h3>
    <p>
      Para vestibulandos, oferecemos materiais completos para ENEM e principais provas, incluindo resumos, exercícios, simulados e dicas de redação.
    </p>
  </div>
  <img className='w-50 h-50 rounded-4' src={Vestibulanda} alt="Vestibulanda" />
</div>

<div className='d-flex justify-content-center align-items-center w-75'>
  <img className='w-50 h-50 rounded-4' src={Concurseiro} alt="Concurseiro" />
  <div className='conteudo px-3 text-wrap'>
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
