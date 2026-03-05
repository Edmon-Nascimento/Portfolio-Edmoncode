import HeroCanvas from "./hero-canvas";
import { TypeAnimation } from "react-type-animation";
import download from "../../assets/images/icons/download.svg";
import person from "../../assets/images/icons/person.svg";
import profile from "../../assets/images/profile.png";
import cv from "../../assets/doc/Currículo - Edmon Nascimento.pdf";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center px-8">
      {/* Background particles */}
      <HeroCanvas />

      {/* Conteúdo */}
      <div className="relative z-10 w-full max-w-7xl py-24 flex flex-col lg:flex-row lg:items-center lg:justify-around gap-12 
                        lg:mb-30 lg:gap-50
      ">
        {/* Foto */}
        <div className="flex justify-center">
          <div
            className="flex shrink glass-profile overflow-hidden rounded-full
                       w-64 h-64 mb-4
                       md:h-80 md:w-80
                       lg:w-100 lg:h-100"
            tabIndex={0}
          >
            <img 
              src={profile}
              alt="Edmon Nascimento - Desenvolvedor front-end"
              className="bg-black/20 shadow-lg"
            />
          </div>
        </div>

        {/* Texto */}
        <div className="flex flex-col items-center text-center lg:items-baseline lg:text-left">
          <h2
            className="text-3xl font-extrabold text-accent font-display
                       md:text-5xl
                       lg:text-6xl"
          >
            Edmon Nascimento
          </h2>

          <TypeAnimation
            sequence={[
              "Desenvolvedor Front-end",
              2000,
              "Criador de Interfaces Modernas",
              2000,
              "Entusiasta de UI/UX",
              2000,
              "Apaixonado por Tecnologia",
              2000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            className="text-xl md:text-2xl text-white mt-2"
          />

          <p className="md:w-xl mt-3 leading-relaxed text-xl">
            Construo interfaces modernas, acessíveis e performáticas, com código
            limpo, organizado e escalável.
          </p>

          {/* Botões */}
          <div className="mt-5 flex flex-wrap justify-center lg:justify-start gap-4">
            <a
              href={cv}
              download
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-accent/70 text-primary
                         text-base hover:bg-accent/90 hover:scale-97 transition duration-200 ease-linear
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-accent
                         focus-visible:ring-offset-2 focus-visible:ring-offset-text-primary
                         md:px-8 md:py-4 md:text-lg font-semibold"
            >
              <img className="mr-2" src={download} />
              Baixar CV
            </a>

            <a
              href="#contato"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-text-primary text-accent
                         text-base hover:scale-97 transition duration-200 focus-visible:ring-offset-2
                         border-2 border-accent
                         md:px-8 md:py-4 md:text-lg font-semibold"
            >
              <img className="mr-2" src={person} />
              Contato
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
