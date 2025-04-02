import Vestibulanda from '../assets/vestibulanda.jpg';
import Concurseiro from '../assets/concurseiro.jpg';
import Notaalta from '../assets/notaalta.jpg';

const Escolha = () => {
  return (
    <div className='bg-warning'>
{/*     
    <div className='container bg-secondary w-50 h-50 "'>
      <img className='w-2 h-3'src={Notaalta} alt="" />
    <div className="badge w-50 h-80 bg-primary p-3 d-flex flex-column">
      <h3>O que você procura?</h3>
      <p className="p-1 fs-6 d-flex text-wrap">No nosso site, você escolhe o modo de estudo ideal para seu objetivo, com cronogramas flexíveis, simulados, videoaulas e acompanhamento personalizado.</p>
    </div>
    </div> */}

    <div className='container d-flex align-items-center w-50 h-50'>
      <img className='w-25 h-25' src={Vestibulanda} alt="" />
    <div className='p-3 text-wrap'>
    <h3>Vestibular</h3>
      <p >Para vestibulandos, oferecemos materiais completos para ENEM e principais provas, incluindo resumos, exercícios, simulados e dicas de redação.</p>
    </div>
    </div>

    <div className='container d-flex align-items-center w-50 h-50'>
      <img className='w-25 h-25' src={Concurseiro} alt="" />
      <div className='p-3 text-wrap'>
      <h3>Concurseiro público</h3>
      <p>Para concurseiros, temos conteúdos atualizados conforme os editais, questões comentadas, videoaulas e planos estratégicos para otimizar sua preparação e garantir sua aprovação!</p>
      </div>
      </div>

    </div>
  )
}

export default Escolha;
