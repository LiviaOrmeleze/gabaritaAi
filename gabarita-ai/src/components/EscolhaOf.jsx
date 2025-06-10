import Notaalta from '../assets/notaalta.jpg';
import Usp from '../assets/usp.jpg';
import Enem from '../assets/enem.jpg';

const Escolha = () => {
  return (
    <div className='d-flex min-vh-100'>

      {/* LADO ESQUERDO */}
      <div className=' fundoesquerdo col-6 d-flex flex-column align-items-center'>

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
    <h3 className='text-uppercase'>Enem</h3>
    <p>
    Oferecemos conteúdos atualizados, resumos e simulados focados no ENEM.
Ajudamos na revisão dos assuntos mais cobrados e nas estratégias de prova.
Tudo para você garantir sua vaga na universidade.
    </p>
  </div>
  <img className='w-50 h-50 rounded-4' src={Enem} alt="Foto de 4 capas de 4 vestibulares ENEM" />
</div>

<div className='d-flex justify-content-center align-items-center w-75'>
  <img className='w-50 h-50 rounded-4' src={Usp} alt="Foto da faixa da universidade da Usp, do curso de Relações Internacionais" />
  <div className='conteudo px-3 text-wrap'>
    <h3>Vestibulares Externos</h3>
    <p>
    Temos materiais específicos para vestibulares como Fuvest, Unicamp e UERJ.
Incluímos provas comentadas, planos de estudo e dicas focadas em cada banca.
Prepare-se com direcionamento e segurança para cada processo seletivo.
    </p>
  </div>
</div>
</div>
</div>

    </div>
  );
};

export default Escolha;
