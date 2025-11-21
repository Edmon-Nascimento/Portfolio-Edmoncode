function Projects() {
  const projects = [
    { title: 'Wedding attendance form', url: 'https://wedding-attendance-form.vercel.app/', className: 'wedding' },
    { title: 'Primeflix', url: 'https://primeflix-project.vercel.app/', className: 'primeflix' }
  ]

  return (
    <section id="projetos">
      <h2>Projetos</h2>
      <div className="container-projetos">
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
