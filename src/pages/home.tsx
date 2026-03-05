import { useState } from "react";
import download from "../assets/images/icons/download.svg";
import person from "../assets/images/icons/person.svg";
import profile from "../assets/images/profile.png";
import cv from "../assets/doc/Currículo - Edmon Nascimento.pdf";
import { skills } from "../data/skillsdata";
import { projects } from "../data/projects.data";
import { contacts } from "../data/social.data";
import ProjectModal from "../components/modal/modal";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  return (
    <main className="min-h-screen">
      {/* Hero / Sobre */}
      <section
        id="sobre"
        className="w-full h-screen px-8 py-24 
                                lg:flex lg:flex-col lg:justify-center"
      >
        <div
          className="flex flex-col gap-12 w-full 
                                lg:flex-row lg:justify-around"
        >
          <div
            className="flex flex-col items-center
                                    lg:flex-row lg:justify-around lg:w-full"
          >
            <div
              className="overflow-hidden rounded-full ring-5 bg-black/30 ring-accent/30 shadow-lg w-64 h-64 mb-4
                                        md:h-100 md:w-100
                                        lg:w-120 lg:h-120"
            >
              <img
                src={profile}
                alt="Edmon Nascimento - Desenvolvedor front-end"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="text-center lg:text-left">
              <h2
                className="text-3xl font-extrabold text-accent font-display
                                            md:text-6xl
                                            lg:text-7xl"
              >
                Edmon Nascimento
              </h2>

              <p
                className="font-semibold text-lg mt-3
                                            md:text-3xl"
              >
                Desenvolvedor front-end
              </p>

              <p className="md:w-xl mt-3 leading-relaxed">
                Construo interfaces modernas, acessíveis e performáticas, com
                código limpo, organizado e escalável.
              </p>

              <div className="mt-5">
                <a
                  href={cv}
                  download
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-accent/70 text-primary
                                                text-base hover:bg-accent/90 hover:scale-97 transition duration-200 ease-linear focus:outline-none focus-visible:ring-2
                                                focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-text-primary
                                                md:px-8 md:py-4 md:text-lg font-semibold"
                >
                  <img className="mr-2" src={download} />
                  Baixar CV
                </a>
                <a
                  href="#contato"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-text-primary text-accent
                                                text-base hover:scale-97 transition duration-200 focus-visible:ring-offset-2 border-2 border-accent ml-5
                                                md:px-8 md:py-4 md:text-lg font-semibold"
                >
                  <img className="mr-2" src={person} />
                  Contato
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

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
            className="grid grid-cols-3 gap-6 
                                    sm:grid-cols-4 
                                    md:grid-cols-5 
                                    lg:grid-cols-6"
          >
            {skills.map((skill) => (
              <div
                key={skill.id}
                className="flex flex-col items-center gap-3 p-4 rounded-xl bg-text-primary/80 border border-accent/10 
                                hover:border-accent/30 hover:bg-accent/5  hover:shadow-accent/30 hover:shadow-2xl transition-all duration-300 group"
              >
                <img
                  src={skill.image}
                  alt={skill.alt}
                  className="w-10 h-10 object-contain transition-transform group-hover:scale-110
                                    sm:w-14 sm:h-14 
                                    md:w-16 md:h-16"
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
                className="group flex flex-col rounded-xl overflow-hidden border border-accent/10 bg-[#252438]/50 hover:border-accent/30 hover:scale-105        transition-all duration-200 cursor-pointer"
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
