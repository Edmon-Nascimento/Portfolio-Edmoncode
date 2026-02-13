import { useState } from 'react'
import profile from '../assets/images/profile.png'
import cv from '../assets/doc/Currículo - Edmon Nascimento.pdf'
import { skills } from '../data/skillsdata'
import { projects } from '../data/projects.data'
import { contacts } from '../data/social.data'
import ProjectModal from '../components/modal/modal'

export default function Home(){
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
    return(
        <main className="min-h-screen">
            {/* Hero / Sobre */}
            <section id="sobre" className="px-6 py-16 sm:px-8 sm:py-24 max-w-5xl mx-auto">
                <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
                    <div className="flex flex-col items-center sm:flex-row sm:items-center md:flex-col md:items-center gap-6 lg:flex-col lg:shrink-0 lg:w-64">
                        <div className="shrink-0 overflow-hidden rounded-full w-52 h-52 sm:w-64 sm:h-64 ring-2 ring-[#7ff7ff]/30 shadow-lg">
                            <img 
                                src={profile} 
                                alt="Edmon Nascimento - Desenvolvedor front-end" 
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                        <div className="text-center sm:text-left md:text-center lg:text-center">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">Edmon Nascimento</h2>
                            <p className="text-[#7ff7ff] font-medium text-lg md:text-xl">Desenvolvedor front-end</p>
                            <a 
                                href={cv} 
                                download 
                                className="inline-flex items-center justify-center mt-6 px-6 py-3 md:px-8 md:py-4 rounded-lg bg-[#7ff7ff] text-[#1c1b2a] text-base md:text-lg font-semibold hover:bg-[#7ff7ff]/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7ff7ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1c1b2a]"
                            >
                                Baixar CV
                            </a>
                        </div>
                    </div>

                    <div className="flex-1 min-w-0 space-y-4 md:space-y-5 p-6 md:p-8 rounded-xl border border-[#7ff7ff]/20 shadow-lg shadow-black/30">
                        <p className="text-[#a0a0a0] text-base md:text-lg leading-relaxed text-justify">
                            Desenvolvedor Front-end focado em criar interfaces modernas, acessíveis e performáticas, com código limpo, organizado e escalável.
                        </p>
                        <p className="text-[#a0a0a0] text-base md:text-lg leading-relaxed text-justify">
                            Atuo principalmente com JavaScript, TypeScript e React, aplicando boas práticas de componentização, semântica e organização de projetos.
                        </p>
                        <p className="text-[#a0a0a0] text-base md:text-lg leading-relaxed text-justify">
                            Em constante evolução, estudo arquitetura e padrões de mercado para me tornar Fullstack, valorizando consistência e prática contínua.
                        </p>
                        <p className="text-[#a0a0a0] text-base md:text-lg leading-relaxed text-justify">
                            Busco criar soluções que gerem impacto real e entreguem valor para quem utiliza.
                        </p>
                    </div>
                </div>
            </section>

            {/* Habilidades */}
            <section id="habilidades" className="px-6 py-16 sm:px-8 sm:py-24 bg-[#252438]/50 border-y border-[#7ff7ff]/10">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#7ff7ff] mb-10">Habilidades</h2>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
                        {skills.map((skill) => (
                            <div 
                                key={skill.id}
                                className="flex flex-col items-center gap-3 p-4 rounded-xl bg-[#1c1b2a]/80 border border-[#7ff7ff]/10 hover:border-[#7ff7ff]/30 hover:bg-[#7ff7ff]/5 transition-all duration-300 group"
                            >
                                <img 
                                    src={skill.image} 
                                    alt={skill.alt} 
                                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain transition-transform group-hover:scale-110"
                                />
                                <span className="text-sm md:text-base text-[#e8e8e8] font-medium text-center">{skill.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projetos */}
            <section id="projetos" className="px-6 py-16 sm:px-8 sm:py-24 max-w-5xl mx-auto">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#7ff7ff] mb-10">Projetos</h2>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-start">
                        {projects.map((project) => (
                        <article 
                            key={project.id}
                            onClick={() => setSelectedProject(project)}
                            className="group flex flex-col rounded-xl overflow-hidden border border-[#7ff7ff]/10 bg-[#252438]/50 hover:border-[#7ff7ff]/30 transition-all duration-200 cursor-pointer"
                        >
                            <div className="relative block shrink-0 aspect-video overflow-hidden bg-[#1c1b2a]">
                                <img 
                                    src={project.coverImage} 
                                    alt={project.alt} 
                                    className="absolute inset-0 w-full h-full min-w-full min-h-full object-cover object-center transition-transform group-hover:scale-105"
                                />
                                <div 
                                    className="absolute inset-0 bg-black/50 opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none"
                                    aria-hidden="true"
                                />
                            </div>
                            <div className="flex flex-col p-4 sm:p-5">
                                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-3">{project.title}</h3>
                                <div className="flex flex-wrap gap-1.5">
                                    {project.tags.map((tag) => (
                                        <span 
                                            key={tag}
                                            className="px-2 py-0.5 text-xs md:text-sm rounded bg-[#7ff7ff]/15 text-[#7ff7ff]"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contato */}
            <section id="contato" className="px-6 py-16 sm:px-8 sm:py-24 bg-[#252438]/50 border-t border-[#7ff7ff]/10">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#7ff7ff] mb-10">Contato</h2>
                    <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
                        {contacts.map((contact) => (
                            <a 
                                key={contact.id}
                                href={contact.url}
                                target={contact.type === 'email' ? undefined : '_blank'}
                                rel={contact.type === 'email' ? undefined : 'noopener noreferrer'}
                                className="flex flex-col items-center gap-3 p-5 rounded-xl bg-[#1c1b2a]/80 border border-[#7ff7ff]/10 hover:border-[#7ff7ff]/40 hover:bg-[#7ff7ff]/5 transition-all duration-200 group min-w-[100px]"
                            >
                                <img 
                                    src={contact.icon} 
                                    alt={contact.alt}
                                    className="w-10 h-10 md:w-12 md:h-12 object-contain text-[#7ff7ff] transition-transform group-hover:scale-110"
                                />
                                <span className="text-sm md:text-base text-[#e8e8e8] font-medium">{contact.label}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
            <ProjectModal
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                project={selectedProject}
            />
        </main>
    )
}
