import { projectData } from "@/schemas/project.schema";
import { oswald } from "@/assets/fonts";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface IProjectCaseProps {
  project: projectData;
}

export const ProjectCase = ({ project }: IProjectCaseProps) => {
  const isCorporateProject = !project.github && !project.deploy;

  return (
    <article className="w-full max-w-[900px] m-auto mb-16 p-6 md:p-8 bg-gray-900/30 rounded-lg border border-gray-800">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex-1">
          <h3 className={`text-[2rem] md:text-[2.5rem] font-bold ${oswald.className}`}>
            {project.title}
          </h3>
          {isCorporateProject && (
            <p className="text-[0.85rem] opacity-60 mt-2">
              Projeto corporativo — código proprietário
            </p>
          )}
        </div>
        {!isCorporateProject && (
          <div className="flex gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blueBaby-300 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            )}
            {project.deploy && (
              <a
                href={project.deploy}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blueBaby-300 transition-colors"
                aria-label="Deploy"
              >
                <FaExternalLinkAlt />
              </a>
            )}
          </div>
        )}
      </div>

      {/* Context */}
      <section className="mb-6">
        <h4 className="text-[1.25rem] font-bold mb-2 text-blueBaby-300">
          Contexto
        </h4>
        <p className="text-[1rem] leading-relaxed opacity-90">
          {project.context}
        </p>
      </section>

      {/* Role */}
      <section className="mb-6">
        <h4 className="text-[1.25rem] font-bold mb-2 text-blueBaby-300">
          Meu papel
        </h4>
        <ul className="space-y-2">
          {project.role.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-blueBaby-300 mr-2">•</span>
              <span className="text-[1rem] opacity-90">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Technologies */}
      <section className="mb-6">
        <h4 className="text-[1.25rem] font-bold mb-2 text-blueBaby-300">
          Tecnologias
        </h4>
        <div className="space-y-3">
          {project.technologies.map((tech, index) => (
            <div key={index}>
              <span className="font-semibold text-[1rem]">{tech.name}</span>
              <span className="text-[0.95rem] opacity-75"> — {tech.reason}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Results */}
      <section className={isCorporateProject ? "mb-6" : ""}>
        <h4 className="text-[1.25rem] font-bold mb-2 text-blueBaby-300">
          Resultados
        </h4>
        <ul className="space-y-2">
          {project.results.map((result, index) => (
            <li key={index} className="flex items-start">
              <span className="text-blueBaby-300 mr-2">•</span>
              <span className="text-[1rem] opacity-90">{result}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Corporate Project Disclaimer */}
      {isCorporateProject && (
        <section className="mt-6 pt-6 border-t border-gray-700/50">
          <h4 className="text-[1.25rem] font-bold mb-2 text-blueBaby-300">
            Nota de transparência
          </h4>
          <p className="text-[0.95rem] leading-relaxed opacity-75 italic">
            Projeto desenvolvido em contexto corporativo. Este case descreve
            exclusivamente minha contribuição técnica no frontend, sem exposição
            de código proprietário, dados sensíveis ou decisões estratégicas internas.
          </p>
        </section>
      )}
    </article>
  );
};
