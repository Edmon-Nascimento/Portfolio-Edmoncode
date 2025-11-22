import { useEffect, useRef, useState } from 'react'
import Modal from '../Modal'

function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const sectionRef = useRef(null)

  const projects = [
    { 
      title: 'Wedding Attendance Form', 
      url: 'https://wedding-attendance-form.vercel.app/', 
      background: 'url(/src/assets/images/wedding-bg.jpeg)',
      backgroundPosition: 'center',
      description: 'Este projeto é um formulário de confirmação de presença para o meu casamento, no qual os convidados podem registrar sua participação. É um projeto muito especial para mim, porque é o meu primeiro projeto pessoal. Eu o criei por necessidade, já que não encontrei nenhum modelo gratuito que realmente atendesse às minhas necessidades. Além disso, ele é para um dos momentos mais importantes da minha vida — O MEU CASAMENTO!',
      repository: 'https://github.com/Edmon-Nascimento/Wedding-Attendance-Form',
      linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:7301388244745687040/'
    },
    { 
      title: 'Primeflix', 
      url: 'https://primeflix-project.vercel.app/', 
      background: 'url(/src/assets/images/primeflix-bg.jpeg)',
      backgroundPosition: 'top',
      description: 'PrimeFlix é uma aplicação web moderna que permite aos usuários explorar filmes utilizando a API do The Movie Database (TMDB). Com ela, é possível navegar pelos lançamentos mais recentes, assistir aos trailers por meio de links do YouTube e salvar seus títulos favoritos para ver mais tarde.',
      repository: 'https://github.com/Edmon-Nascimento/Primeflix-project',
      linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:7383567626339328000/'
    },
  ]

  const handleProjectClick = (e, project) => {
    e.preventDefault()
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedProject(null), 300)
  }

  useEffect(() => {
    const currentSection = sectionRef.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
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
      <section id="projetos" ref={sectionRef} className={`animate-section ${isVisible ? 'visible' : ''}`}>
        <h2>Projetos</h2>
        <div className={`container-projetos animate-items ${isVisible ? 'visible' : ''}`}>
          {projects.map((p) => (
            <a 
              key={p.title} 
              href={p.url} 
              onClick={(e) => handleProjectClick(e, p)}
              style={{ cursor: 'pointer' }}
            >
              <div 
                style={{ 
                  backgroundImage: p.background,
                  backgroundPosition: p.backgroundPosition || 'center'
                }}
              >
                <p>{p.title}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <Modal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        project={selectedProject} 
      />
    </>
  )
}

export default Projects
