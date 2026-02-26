'use client';
import Link from "next/link";
import { projectData } from "@/schemas/project.schema";
import { oswald } from "@/assets/fonts";
import { useSoundEffect } from "@/hooks/useSound";
import { getProjectSlug } from "@/utils/slugify";
import { FaLock, FaGlobe, FaArrowRight } from "react-icons/fa";

interface IProjectCardProps {
  project: projectData;
  index: number;
}

// Mapeamento de cores para evitar classes dinâmicas (Tailwind purge)
const colorSchemes = {
  cyan: {
    border: 'hover:border-neon-cyan/60',
    shadow: 'hover:shadow-neon-cyan/20',
    text: 'group-hover:text-neon-cyan',
    glow: 'from-neon-cyan/5',
    cta: 'text-neon-cyan',
    underline: 'bg-neon-cyan',
    corner: 'from-neon-cyan/20',
    techBorder: 'group-hover:border-neon-cyan/30',
  },
  pink: {
    border: 'hover:border-neon-pink/60',
    shadow: 'hover:shadow-neon-pink/20',
    text: 'group-hover:text-neon-pink',
    glow: 'from-neon-pink/5',
    cta: 'text-neon-pink',
    underline: 'bg-neon-pink',
    corner: 'from-neon-pink/20',
    techBorder: 'group-hover:border-neon-pink/30',
  },
  green: {
    border: 'hover:border-neon-green/60',
    shadow: 'hover:shadow-neon-green/20',
    text: 'group-hover:text-neon-green',
    glow: 'from-neon-green/5',
    cta: 'text-neon-green',
    underline: 'bg-neon-green',
    corner: 'from-neon-green/20',
    techBorder: 'group-hover:border-neon-green/30',
  },
  purple: {
    border: 'hover:border-neon-purple/60',
    shadow: 'hover:shadow-neon-purple/20',
    text: 'group-hover:text-neon-purple',
    glow: 'from-neon-purple/5',
    cta: 'text-neon-purple',
    underline: 'bg-neon-purple',
    corner: 'from-neon-purple/20',
    techBorder: 'group-hover:border-neon-purple/30',
  },
};

const colorKeys = ['cyan', 'pink', 'green', 'purple'] as const;

export const ProjectCard = ({ project, index }: IProjectCardProps) => {
  const isCorporate = !project.github && !project.deploy;
  const { playSound } = useSoundEffect();
  const slug = getProjectSlug(project);

  const handleHover = () => {
    playSound('hover');
  };

  const handleClick = () => {
    playSound('click');
  };

  const colors = colorSchemes[colorKeys[index % colorKeys.length]];

  return (
    <Link
      href={`/project/${slug}`}
      onClick={handleClick}
      onMouseEnter={handleHover}
      className={`
        block relative p-6 rounded-xl overflow-hidden cursor-pointer group
        bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-gray-800/40
        border border-gray-700/50
        ${colors.border}
        transition-all duration-500 ease-out
        hover:shadow-lg ${colors.shadow}
        hover:-translate-y-2
        backdrop-blur-sm
      `}
    >
      {/* Glow effect no hover */}
      <div className={`
        absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
        bg-gradient-to-br ${colors.glow} via-transparent to-transparent
        pointer-events-none
      `} />

      {/* Scan line effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent animate-scan" />
      </div>

      {/* Header com badge */}
      <div className="relative z-10 mb-4">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className={`
            text-[1.4rem] md:text-[1.6rem] font-bold leading-tight
            transition-colors duration-300
            ${colors.text}
            ${oswald.className}
          `}>
            {project.title}
          </h3>
          <span className={`
            flex items-center gap-1.5 text-[0.7rem] px-2.5 py-1 rounded-full font-semibold whitespace-nowrap
            transition-all duration-300
            ${isCorporate
              ? 'bg-neon-pink/10 text-neon-pink border border-neon-pink/30 group-hover:bg-neon-pink/20'
              : 'bg-neon-green/10 text-neon-green border border-neon-green/30 group-hover:bg-neon-green/20'
            }
          `}>
            {isCorporate ? <FaLock className="text-[0.6rem]" /> : <FaGlobe className="text-[0.6rem]" />}
            {isCorporate ? "Corporativo" : "Open Source"}
          </span>
        </div>

        {/* Descrição */}
        <p className="text-[0.9rem] opacity-70 leading-relaxed line-clamp-2 group-hover:opacity-90 transition-opacity">
          {project.description}
        </p>
      </div>

      {/* Stack tags */}
      <div className="relative z-10 flex flex-wrap gap-2 mb-5">
        {project.stack.slice(0, 4).map((tech, i) => (
          <span
            key={i}
            className={`
              text-[0.7rem] px-2 py-0.5 rounded
              bg-gray-800/60 text-gray-300 border border-gray-700/50
              transition-all duration-300
              ${colors.techBorder} group-hover:text-white
            `}
          >
            {tech}
          </span>
        ))}
        {project.stack.length > 4 && (
          <span className="text-[0.7rem] px-2 py-0.5 text-gray-500">
            +{project.stack.length - 4}
          </span>
        )}
      </div>

      {/* CTA */}
      <div className={`
        relative z-10 flex items-center gap-2 text-[0.9rem] font-semibold
        ${colors.cta} opacity-80 group-hover:opacity-100
        transition-all duration-300
      `}>
        <span className="relative">
          Ver case completo
          <span className={`
            absolute bottom-0 left-0 w-0 h-[1px] ${colors.underline}
            group-hover:w-full transition-all duration-300
          `} />
        </span>
        <FaArrowRight className="text-[0.75rem] transform group-hover:translate-x-1 transition-transform duration-300" />
      </div>

      {/* Corner accent */}
      <div className={`
        absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500
        bg-gradient-to-bl ${colors.corner} to-transparent
        pointer-events-none
      `} />
    </Link>
  );
};
