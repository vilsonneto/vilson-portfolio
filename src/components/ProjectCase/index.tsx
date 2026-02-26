'use client';
import { projectData } from "@/schemas/project.schema";
import { oswald } from "@/assets/fonts";
import { FaGithub, FaExternalLinkAlt, FaLock, FaCheckCircle, FaCode, FaRocket, FaLightbulb } from "react-icons/fa";
import { AnimateOnScroll } from "@/components/effects/AnimateOnScroll";
import { useEffect, useState } from "react";

interface IProjectCaseProps {
  project: projectData;
}

// Ícone de seção baseado no tipo
const sectionIcons = {
  context: FaLightbulb,
  role: FaCode,
  technologies: FaRocket,
  results: FaCheckCircle,
};

export const ProjectCase = ({ project }: IProjectCaseProps) => {
  const isCorporateProject = !project.github && !project.deploy;
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Detectar seção ativa via scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['context', 'role', 'technologies', 'results'];
      for (const section of sections) {
        const el = document.getElementById(`case-${section}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'context', title: 'Contexto', icon: sectionIcons.context, content: project.context },
    { id: 'role', title: 'Meu Papel', icon: sectionIcons.role, items: project.role },
    { id: 'technologies', title: 'Stack Técnica', icon: sectionIcons.technologies, techs: project.technologies },
    { id: 'results', title: 'Resultados', icon: sectionIcons.results, items: project.results },
  ];

  return (
    <article className="w-full max-w-[1000px] m-auto">
      {/* Header Hero */}
      <AnimateOnScroll animation="fadeIn">
        <header className="relative mb-12 pb-8 border-b border-gray-800/50">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 via-transparent to-neon-purple/5 rounded-2xl -z-10" />

          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div className="flex-1">
              {/* Badge de tipo */}
              <div className="flex items-center gap-3 mb-4">
                <span className={`
                  inline-flex items-center gap-2 text-[0.8rem] px-3 py-1.5 rounded-full font-semibold
                  ${isCorporateProject
                    ? 'bg-neon-pink/15 text-neon-pink border border-neon-pink/30'
                    : 'bg-neon-green/15 text-neon-green border border-neon-green/30'
                  }
                `}>
                  {isCorporateProject ? <FaLock className="text-[0.65rem]" /> : <FaGithub className="text-[0.75rem]" />}
                  {isCorporateProject ? "Projeto Corporativo" : "Open Source"}
                </span>
              </div>

              {/* Título com glitch sutil */}
              <h2 className={`text-[2.5rem] md:text-[3.5rem] font-bold leading-tight mb-4 ${oswald.className}`}>
                <span className="bg-gradient-to-r from-white via-neon-cyan to-white bg-clip-text text-transparent bg-[length:200%_100%] animate-shimmer">
                  {project.title}
                </span>
              </h2>

              {/* Resumo */}
              <p className="text-[1.1rem] md:text-[1.2rem] opacity-80 leading-relaxed max-w-[700px]">
                {project.resume}
              </p>
            </div>

            {/* Links externos */}
            {!isCorporateProject && (
              <div className="flex gap-3 md:flex-col">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-700 hover:border-neon-cyan hover:text-neon-cyan transition-all duration-300 group"
                  >
                    <FaGithub className="text-lg" />
                    <span className="text-sm font-medium">Código</span>
                  </a>
                )}
                {project.deploy && (
                  <a
                    href={project.deploy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan hover:bg-neon-cyan/20 transition-all duration-300"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    <span className="text-sm font-medium">Demo</span>
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Stack visual */}
          <div className="flex flex-wrap gap-2 mt-6">
            {project.stack.map((tech, i) => (
              <span
                key={i}
                className="text-[0.75rem] px-3 py-1 rounded-full bg-gray-800/60 text-gray-300 border border-gray-700/50 hover:border-neon-cyan/40 hover:text-white transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </header>
      </AnimateOnScroll>

      {/* Progress indicator (mobile hidden) */}
      <div className="hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 z-40">
        <nav className="flex flex-col gap-3">
          {sections.map((section) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;
            return (
              <a
                key={section.id}
                href={`#case-${section.id}`}
                className={`
                  flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300
                  ${isActive
                    ? 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/40'
                    : 'text-gray-500 hover:text-gray-300 border border-transparent hover:border-gray-700'
                  }
                `}
                title={section.title}
              >
                <Icon className="text-sm" />
                <span className={`text-xs font-medium ${isActive ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
                  {section.title}
                </span>
              </a>
            );
          })}
        </nav>
      </div>

      {/* Content sections */}
      <div className="space-y-16">
        {/* Contexto */}
        <AnimateOnScroll animation="slideUp" delay={100}>
          <section id="case-context" className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-neon-cyan/10 border border-neon-cyan/30">
                <FaLightbulb className="text-neon-cyan text-lg" />
              </div>
              <h3 className={`text-[1.5rem] font-bold ${oswald.className}`}>
                Contexto
              </h3>
            </div>
            <div className="pl-4 border-l-2 border-neon-cyan/30">
              <p className="text-[1.05rem] leading-[1.8] opacity-85">
                {project.context}
              </p>
            </div>
          </section>
        </AnimateOnScroll>

        {/* Meu Papel */}
        <AnimateOnScroll animation="slideUp" delay={150}>
          <section id="case-role" className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-neon-pink/10 border border-neon-pink/30">
                <FaCode className="text-neon-pink text-lg" />
              </div>
              <h3 className={`text-[1.5rem] font-bold ${oswald.className}`}>
                Meu Papel
              </h3>
            </div>
            <ul className="space-y-4 pl-4">
              {project.role.map((item, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <span className="mt-2 w-2 h-2 rounded-full bg-neon-pink/60 group-hover:bg-neon-pink transition-colors shrink-0" />
                  <span className="text-[1rem] leading-relaxed opacity-85 group-hover:opacity-100 transition-opacity">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </AnimateOnScroll>

        {/* Stack Técnica */}
        <AnimateOnScroll animation="slideUp" delay={200}>
          <section id="case-technologies" className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-neon-green/10 border border-neon-green/30">
                <FaRocket className="text-neon-green text-lg" />
              </div>
              <h3 className={`text-[1.5rem] font-bold ${oswald.className}`}>
                Stack Técnica
              </h3>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {project.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-gray-900/40 border border-gray-800/60 hover:border-neon-green/30 transition-all duration-300 group"
                >
                  <h4 className="font-semibold text-[1rem] mb-1 text-neon-green group-hover:text-white transition-colors">
                    {tech.name}
                  </h4>
                  <p className="text-[0.9rem] opacity-70 leading-relaxed">
                    {tech.reason}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </AnimateOnScroll>

        {/* Resultados */}
        <AnimateOnScroll animation="slideUp" delay={250}>
          <section id="case-results" className="scroll-mt-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-neon-purple/10 border border-neon-purple/30">
                <FaCheckCircle className="text-neon-purple text-lg" />
              </div>
              <h3 className={`text-[1.5rem] font-bold ${oswald.className}`}>
                Resultados
              </h3>
            </div>
            <ul className="space-y-4 pl-4">
              {project.results.map((result, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <FaCheckCircle className="mt-1 text-neon-purple/60 group-hover:text-neon-purple transition-colors shrink-0" />
                  <span className="text-[1rem] leading-relaxed opacity-85 group-hover:opacity-100 transition-opacity">
                    {result}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </AnimateOnScroll>

        {/* Disclaimer para projetos corporativos */}
        {isCorporateProject && (
          <AnimateOnScroll animation="fadeIn" delay={300}>
            <section className="mt-12 p-6 rounded-xl bg-gray-900/30 border border-gray-800/50">
              <div className="flex items-start gap-4">
                <FaLock className="text-neon-pink/60 text-xl shrink-0 mt-1" />
                <div>
                  <h4 className={`text-[1.1rem] font-semibold mb-2 ${oswald.className}`}>
                    Nota de Transparência
                  </h4>
                  <p className="text-[0.95rem] leading-relaxed opacity-70">
                    Projeto desenvolvido em contexto corporativo. Este case descreve
                    exclusivamente minha contribuição técnica no frontend, sem exposição
                    de código proprietário, dados sensíveis ou decisões estratégicas internas.
                  </p>
                </div>
              </div>
            </section>
          </AnimateOnScroll>
        )}
      </div>
    </article>
  );
};
