import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import firebaseIcon from './assets/icons/firebase.png';
import typescriptIcon from './assets/icons/typescript.png';
import css3Icon from './assets/icons/css3-brands-solid-full.svg';
import html5Icon from './assets/icons/html5-brands-solid-full.svg';
import jsIcon from './assets/icons/js-brands-solid-full.svg';
import reactIcon from './assets/icons/react-brands-solid-full.svg';

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

          <div className='stacks'>
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
      </main>
      <Footer/>
    </>
  )
}

export default App
