import { useEffect, useRef, useState } from 'react'

function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const projects = [
    { title: 'Wedding attendance form', url: 'https://wedding-attendance-form.vercel.app/', className: 'wedding' },
    { title: 'Primeflix', url: 'https://primeflix-project.vercel.app/', className: 'primeflix' }
  ]

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
    <section id="projetos" ref={sectionRef} className={`animate-section ${isVisible ? 'visible' : ''}`}>
      <h2>Projetos</h2>
      <div className={`container-projetos animate-items ${isVisible ? 'visible' : ''}`}>
        {projects.map((p) => (
          <a key={p.title} href={p.url} target="_blank" rel="noopener noreferrer">
            <div className={p.className}>
              <p>{p.title}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Projects
