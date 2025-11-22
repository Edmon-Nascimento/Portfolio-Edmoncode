import { useEffect, useRef, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Skills from './components/Skills'
import envelope from './assets/icons/envelope-solid-full.svg'
import whatsapp from './assets/icons/whatsapp-brands-solid-full.svg'
import linkedin from './assets/icons/linkedin-brands-solid-full.svg'
import github from './assets/icons/github-brands-solid-full.svg'
import profilepic from './assets/images/profile.png'

function App() {
  const [isContactsVisible, setIsContactsVisible] = useState(false)
  const contactsRef = useRef(null)

  const contacts = [
    { href: 'https://api.whatsapp.com/send?phone=5521968892704', img: whatsapp, text: '(71) 92003-0489' },
    { href: 'mailto:edmoncode7@gmail.com', img: envelope, text: 'edmoncode7@gmail.com' },
    { href: 'https://www.linkedin.com/in/edmon-nascimento/', img: linkedin, text: 'in/edmon-nascimento/' },
    { href: 'https://github.com/Edmon-Nascimento', img: github, text: 'Edmon-Nascimento' }
  ]

  useEffect(() => {
    const currentSection = contactsRef.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsContactsVisible(entry.isIntersecting)
      },
      {
        threshold: 0.1,
        rootMargin: '50px 0px -50px 0px'
      }
    )

    if (currentSection) {
      observer.observe(currentSection)
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection)
      }
    }
  }, [])

  return (
    <>
      <Header />
      <main>
        <section id="sobre">
          <div className="profile">
            <p className="name">Edmon Nascimento</p>
            <span>Desenvolvedor front-end | React | TypeScript</span>
            <a href="./assets/doc/Currículo Edmon Nascimento.pdf" download className="btn-cv">
              Download CV
            </a>
          </div>
          <img src={profilepic} alt="Edmon Nascimento" />
        </section>

        <section id="sobre-txt">
          <h2>Sobre mim</h2>
          <article>
            <p>
              Sou um desenvolvedor Front-end apaixonado por criar interfaces modernas, responsivas e bem
              estruturadas. Trabalho com HTML, CSS, JavaScript, React, TypeScript e Firebase, sempre buscando
              escrever código limpo e construir experiências agradáveis e funcionais.
            </p>

            <p>
              Estou me aperfeiçoando em React e TypeScript e pretendo evoluir para o Next.js, caminhando rumo
              ao Fullstack. Gosto de criar interfaces bem pensadas, com foco em clareza visual, organização e uma
              estrutura sólida que facilite a manutenção e a evolução do projeto.
            </p>

            <p>
              Vejo a programação como uma forma de gerar impacto real, independentemente da complexidade da
              tecnologia usada. Soluções simples, quando bem aplicadas, podem resolver problemas importantes e
              melhorar a rotina de pessoas e negócios. Para mim, o valor está em desenvolver sistemas que tenham
              propósito, sejam úteis e realmente contribuam para a organização e eficiência do dia a dia.
            </p>
          </article>
        </section>

        <Skills />

        <Projects />

        <section id="contatos" ref={contactsRef} className={`animate-section ${isContactsVisible ? 'visible' : ''}`}>
          <h2>Contatos</h2>
          <div className={`container-contatos animate-items ${isContactsVisible ? 'visible' : ''}`}>
            {contacts.map((c) => (
              <a key={c.text} href={c.href} target="_blank" rel="noopener noreferrer">
                <div>
                  <img src={c.img} alt={c.text} />
                  <p>{c.text}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
