import Hero from "../components/hero/hero";
import { useState } from "react";
import { skills } from "../data/skillsdata";
import { projects } from "../data/projects.data";
import { contacts } from "../data/social.data";
import ProjectModal from "../components/modal/modal";
import type { Project } from "../components/modal/modal";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  return (
    <main className="min-h-screen">
      <Hero/>

      {/* Habilidades */}
      <section
        id="habilidades"
        className="px-6 py-16  bg-[#252438]/50 border-y border-accent/10
                            sm:px-8 sm:py-24 "
      >
        <div className="px-20 py-20 text-center">
          <h2
            className="text-2xl font-bold text-accent mb-10
                                    md:text-3xl
                                    lg:text-4xl"
          >
            Habilidades
          </h2>

          <div
            className="flex flex-col gap-6 max-w-6xl w-full m-auto items-center
                                    md:grid md:grid-cols-3 
                                    lg:grid-cols-6"
          >
            {skills.map((skill) => (
              <div
                key={skill.id}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-text-primary/80 border border-accent/10 w-35
                                hover:border-accent/30 hover:bg-accent/5  hover:shadow-accent/30 hover:shadow-2xl transition-all duration-300 group"
              >
                <img
                  src={skill.image}
                  alt={skill.alt}
                  className="w-15 object-contain transition-transform group-hover:scale-110"
                />
                <span
                  className="text-sm text-[#e8e8e8] font-medium text-center
                                                md:text-base"
                >
                  {skill.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section id="projetos" className="px-10 py-16 sm:px-8 sm:py-24 ">
        <div className="px-20 text-center">
          <h2
            className="text-2xl font-bold text-accent mb-10
                                    md:text-3xl
                                    lg:text-4xl"
          >
            Projetos
          </h2>

          <div
            className="grid gap-6 sm:grid-cols-2 items-start
                                    lg:grid-cols-3
                        "
          >
            {projects.map((project) => (
              <article
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group flex flex-col rounded-xl overflow-hidden border border-accent/10 bg-[#252438]/50 hover:border-accent/30 hover:scale-105 transition-all hover:duration-500 duration-300 cursor-pointer"
              >
                <div className="relative block shrink-0 aspect-video overflow-hidden bg-text-primary">
                  <img
                    src={project.coverImage}
                    alt={project.alt}
                    className="absolute inset-0 w-full h-full min-w-full min-h-full object-cover object-center transition-transform"
                  />
                  <div
                    className="absolute inset-0 bg-black/50 opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex flex-col p-4 sm:p-5">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-3 text-left">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs md:text-sm rounded bg-accent/10 text-accent"
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
      <section
        id="contato"
        className="px-6 py-16 sm:px-8 sm:py-24 bg-[#252438]/50 border-t border-accent/10"
      >
        <div className="max-w-5xl mx-auto text-center py-20">
          <h2 className="text-2xl md:text-3xl font-bold text-accent mb-10 lg:text-4xl">
            Contato
          </h2>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {contacts.map((contact) => (
              <a
                key={contact.id}
                href={contact.url}
                target={contact.type === "email" ? undefined : "_blank"}
                rel={
                  contact.type === "email" ? undefined : "noopener noreferrer"
                }
                className="flex flex-col items-center gap-3 p-5 rounded-xl bg-text-primary/80 border border-accent/10 hover:border-accent/40 hover:bg-accent/5 transition-all duration-200 group min-w-50"
              >
                <img
                  src={contact.icon}
                  alt={contact.alt}
                  className="w-10 h-10 md:w-12 md:h-12 object-contain text-accent transition-transform group-hover:scale-110"
                />
                <span className="text-sm md:text-base text-[#e8e8e8] font-medium">
                  {contact.label}
                </span>
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
  );
}
