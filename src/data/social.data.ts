import techradarBg from "../assets/images/projects/techradar-bg.png";
import satoshiviewBg from "../assets/images/projects/satoshiview-bg.png";
import teladuplaBg from "../assets/images/projects/teladupla-bg.png";
import goadvocaciaBg from "../assets/images/projects/goadvocacia-bg.png";
import weddingBg from "../assets/images/projects/wedding-bg.png";

export const projects = [
  {
    id: "techradar",
    title: "TechRadar",
    description:
      "Plataforma para visualizar e filtrar vagas de tecnologia de forma organizada e acessível.",
    tags: ["React", "TypeScript", "API"],
    coverImage: techradarBg,
    alt: "Tela inicial da aplicação TechRadar com listagem de vagas tech",
    liveUrl: "https://techradar-jobs.vercel.app/",
    githubUrl:
      "https://github.com/Edmon-Nascimento/TechRadar-Radar-de-vagas-tech",
    featured: true,
    status: "finalizado",
  },
  {
    id: "satoshiview",
    title: "SatoshiView",
    description:
      "Dashboard para acompanhamento do mercado de criptomoedas com dados atualizados em tempo real.",
    tags: ["React", "TypeScript", "API", "Finanças"],
    coverImage: satoshiviewBg,
    alt: "Dashboard de criptomoedas exibindo preços e variações",
    liveUrl: "https://satoshiview.vercel.app/",
    githubUrl:
      "https://github.com/Edmon-Nascimento/SatoshiView-Crypto-Market-Tracker",
    featured: true,
    status: "finalizado",
  },
  {
    id: "teladupla",
    title: "TelaDupla",
    description:
      "Interface para descoberta de filmes e séries, simulando uma plataforma de streaming.",
    tags: ["React", "TypeScript", "UI", "API"],
    coverImage: teladuplaBg,
    alt: "Interface da aplicação TelaDupla com catálogo de filmes",
    liveUrl: "https://teladupla.vercel.app/",
    githubUrl:
      "https://github.com/Edmon-Nascimento/TelaDupla-Cinema-Streaming",
    featured: true,
    status: "emAndamento",
  },
  {
    id: "goadvocacia",
    title: "GO Advocacia e Consultoria Jurídica",
    description:
      "Site institucional para escritório de advocacia, com foco em credibilidade e apresentação profissional.",
    tags: ["WordPress", "UI"],
    coverImage: goadvocaciaBg,
    alt: "Site institucional do escritório GO Advocacia",
    liveUrl: "https://advgabrieloliveira.com/",
    githubUrl:
      "https://github.com/Edmon-Nascimento/go-advocacia-site",
    featured: false,
    status: "finalizado",
  },
  {
    id: "wedding",
    title: "Wedding Attendance Form",
    description:
      "Formulário de confirmação de presença para o meu casamento, com foco em simplicidade e usabilidade.",
    tags: ["JavaScript", "Forms", "UX"],
    coverImage: weddingBg,
    alt: "Formulário de confirmação de presença para casamento",
    liveUrl: "https://wedding-attendance-form.vercel.app/",
    githubUrl:
      "https://github.com/Edmon-Nascimento/Wedding-attendance-form",
    featured: false,
    status: "finalizado",
  },
];
