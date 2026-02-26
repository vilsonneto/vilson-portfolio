import { projectData } from "@/schemas/project.schema";

/**
 * Converte um título em slug URL-friendly
 * "VersoChat" → "versochat"
 * "Sport Find" → "sport-find"
 */
export const slugify = (title: string): string =>
  title
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');

/**
 * Encontra um projeto pelo slug
 */
export const findProjectBySlug = (
  slug: string,
  projects: projectData[]
): projectData | undefined =>
  projects.find((p) => slugify(p.title) === slug);

/**
 * Gera o slug de um projeto
 */
export const getProjectSlug = (project: projectData): string =>
  slugify(project.title);

/**
 * Encontra projetos adjacentes (anterior e próximo)
 */
export const getAdjacentProjects = (
  currentSlug: string,
  projects: projectData[]
): { prev: projectData | null; next: projectData | null } => {
  const currentIndex = projects.findIndex((p) => slugify(p.title) === currentSlug);

  return {
    prev: currentIndex > 0 ? projects[currentIndex - 1] : null,
    next: currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null,
  };
};
