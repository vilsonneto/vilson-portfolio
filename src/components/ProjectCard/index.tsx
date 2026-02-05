import { projectData } from "@/schemas/project.schema";
import { oswald } from "@/assets/fonts";

interface IProjectCardProps {
  project: projectData;
  onViewCase: () => void;
}

export const ProjectCard = ({ project, onViewCase }: IProjectCardProps) => {
  const isCorporate = !project.github && !project.deploy;

  return (
    <article
      className="p-6 bg-gray-900/30 rounded-lg border border-gray-800 hover:border-blueBaby-300 hover:shadow-lg hover:shadow-blueBaby-300/20 transition-all duration-300 cursor-pointer group hover:scale-[1.02]"
      onClick={onViewCase}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onViewCase();
        }
      }}
    >
      {/* Header */}
      <div className="mb-4">
        <div className="flex items-center gap-3 mb-3 flex-wrap">
          <h3 className={`text-[1.5rem] font-bold group-hover:text-blueBaby-300 transition-colors ${oswald.className}`}>
            {project.title}
          </h3>
          <span className={`text-[0.75rem] px-2 py-1 rounded font-semibold ${
            isCorporate
              ? "bg-orange-500/20 text-orange-300 border border-orange-500/30"
              : "bg-blue-500/20 text-blue-300 border border-blue-500/30"
          }`}>
            {isCorporate ? "Corporativo" : "Pessoal"}
          </span>
        </div>
        <p className="text-[0.95rem] opacity-75 leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* CTA */}
      <div className="flex items-center gap-2 text-[0.95rem] text-blueBaby-300 font-semibold group-hover:gap-3 transition-all">
        <span>Ver case completo</span>
        <span className="group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </article>
  );
};
