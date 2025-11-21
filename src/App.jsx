import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import firebaseIcon from './assets/icons/firebase.png';
import typescriptIcon from './assets/icons/typescript.png';
import css3Icon from './assets/icons/css3-brands-solid-full.svg';
import html5Icon from './assets/icons/html5-brands-solid-full.svg';
import jsIcon from './assets/icons/js-brands-solid-full.svg';
import reactIcon from './assets/icons/react-brands-solid-full.svg';
import envelope from './assets/icons/envelope-solid-full.svg'
import whatsapp from './assets/icons/whatsapp-brands-solid-full.svg'
import linkedin from './assets/icons/linkedin-brands-solid-full.svg'
import github from './assets/icons/github-brands-solid-full.svg'

function App() {

  return (
    <>
      <Header/>
      <main>

        <section id='sobre'>

          <div className='profile'>
            <p className="name">Edmon Nascimento</p>
            <span>Desenvolvedor front-end | React | Typescript</span>
            <a href=""><button>Baixar CV</button></a>
          </div>

          <img src="" alt="" />

        </section>

        <section id='sobre-txt'>
          <h2>Sobre mim</h2>
          <p>
            Sou um desenvolvedor Front-end apaixonado por criar interfaces modernas, responsivas e bem estruturadas. Trabalho com HTML, CSS, JavaScript, React, TypeScript e Firebase, sempre buscando escrever código limpo e construir experiências agradáveis e funcionais.

            Estou me aperfeiçoando em React e TypeScript e pretendo evoluir para o Next.js, caminhando rumo ao Fullstack. Gosto de criar interfaces bem pensadas, com foco em clareza visual, organização e uma estrutura sólida que facilite a manutenção e a evolução do projeto.

            Vejo a programação como uma forma de gerar impacto real, independentemente da complexidade da tecnologia usada. Soluções simples, quando bem aplicadas, podem resolver problemas importantes e melhorar a rotina de pessoas e negócios. Para mim, o valor está em desenvolver sistemas que tenham propósito, sejam úteis e realmente contribuam para a organização e eficiência do dia a dia.
          </p>
        </section>

        <section id='habilidades'>
          <h2>Habilidades</h2>

          <div className='container-habilidades'>
            <div>
              <p>HTML5</p>
              <img src={html5Icon} alt="HTML5" />
            </div>

            <div>
              <p>CSS3</p>
              <img src={css3Icon} alt="CSS3" />
            </div>

            <div>
              <p>JavaScript</p>
              <img src={jsIcon} alt="JavaScript" />
            </div>

            <div>
              <p>React.js</p>
              <img src={reactIcon} alt="React.js" />
            </div>

            <div>
              <p>Firebase</p>
              <img src={firebaseIcon} alt="Firebase" />
            </div>

            <div>
              <p>Typescript</p>
              <img src={typescriptIcon} alt="Typescript" />
            </div>

          </div>
        </section>

        <section id='projetos'>
          <h2>Projetos</h2>
          <div className='container-projetos'>
            <a href="https://wedding-attendance-form.vercel.app/" target='_blank'>
              <div className='wedding'>
                <p>Wedding attendance form</p>
              </div>
            </a>

            <a href="https://primeflix-project.vercel.app/" target='_blank'>
              <div className='primeflix'>
                <p>Primeflix</p>
              </div>
            </a>
            
          </div>
        </section>

        <section id='contatos'>
          <h2>Contatos</h2>
          <div className='container-contatos'>
            <a href="https://api.whatsapp.com/send?phone=5521968892704" target="_blank">
              <div>
                <img src={whatsapp} alt="" />
                <p>(71) 92003-0489</p>
              </div>
            </a>

            <a href="mailto:edmoncode7@gmail.com" target="_blank">
              <div>
                <img src={envelope} alt="" />
                <p>edmoncode7@gmail.com</p>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/edmon-nascimento/" target="_blank">
              <div>
                <img src={linkedin} alt="" />
                <p>in/edmon-nascimento/</p>
              </div>
            </a>

            <a href="https://github.com/Edmon-Nascimento" target="_blank">
              <div>
                <img src={github} alt="" />
                <p>Edmon-Nascimento</p>
              </div>
            </a>
          </div>
          
        </section>
      </main>
      <Footer/>
    </>
  )
}

export default App
