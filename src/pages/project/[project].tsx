import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { source_code_pro, oswald } from "@/assets/fonts";
import { Header } from "@/components/Header";
import { Contact } from "@/components/Contact";
import { ProjectCase } from "@/components/ProjectCase";
import { projects } from "@/data/projects";
import { projectData } from "@/schemas/project.schema";
import { slugify, findProjectBySlug, getAdjacentProjects, getProjectSlug } from "@/utils/slugify";
import { FaArrowLeft, FaHome, FaChevronRight } from "react-icons/fa";
import { useState } from "react";

interface ProjectPageProps {
  project: projectData;
  prevProject: projectData | null;
  nextProject: projectData | null;
  currentIndex: number;
  totalProjects: number;
}

const ProjectPage: NextPage<ProjectPageProps> = ({
  project,
  prevProject,
  nextProject,
  currentIndex,
  totalProjects,
}) => {
  const [openContact, setOpenContact] = useState(false);
  const slug = getProjectSlug(project);

  return (
    <>
      <Head>
        <title>{project.title} | Case Study - Vilson Padilha</title>
        <meta name="description" content={project.resume} />

        {/* Open Graph */}
        <meta property="og:title" content={`${project.title} - Case Study`} />
        <meta property="og:description" content={project.resume} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://vilsonpadilha.vercel.app/project/${slug}`} />
        <meta property="og:site_name" content="Vilson Padilha Portfolio" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${project.title} - Case Study`} />
        <meta name="twitter:description" content={project.resume} />

        {/* Canonical */}
        <link rel="canonical" href={`https://vilsonpadilha.vercel.app/project/${slug}`} />

        {/* Keywords */}
        <meta name="keywords" content={`${project.title}, ${project.stack.join(', ')}, Vilson Padilha, Frontend Developer, Case Study`} />
      </Head>

      <main
        className={`body flex min-h-screen flex-col ${source_code_pro.className} ${oswald.variable} ${openContact && "blur-sm"}`}
      >
        <Header setOpenContact={setOpenContact} />

        {/* Breadcrumb */}
        <nav className="w-full px-5 md:px-[70px] pt-6 max-w-[1100px] mx-auto">
          <ol className="flex items-center gap-2 text-sm opacity-60">
            <li>
              <Link
                href="/"
                className="flex items-center gap-1 hover:text-neon-cyan transition-colors"
              >
                <FaHome className="text-xs" />
                Home
              </Link>
            </li>
            <FaChevronRight className="text-[0.6rem]" />
            <li>
              <Link
                href="/#projects"
                className="hover:text-neon-cyan transition-colors"
              >
                Projetos
              </Link>
            </li>
            <FaChevronRight className="text-[0.6rem]" />
            <li className="text-neon-cyan font-medium">
              {project.title}
            </li>
          </ol>
        </nav>

        {/* Content */}
        <section className="flex-1 pt-8 pb-16 px-5 md:px-[70px]">
          <ProjectCase project={project} />

          {/* Navigation between projects */}
          <div className="max-w-[1000px] mx-auto mt-16 pt-8 border-t border-gray-800/50">
            <div className="flex justify-between items-center flex-wrap gap-4">
              {/* Previous */}
              <div className="flex-1">
                {prevProject && (
                  <Link
                    href={`/project/${getProjectSlug(prevProject)}`}
                    className="group flex items-center gap-3 text-left hover:text-neon-pink transition-colors"
                  >
                    <FaArrowLeft className="text-sm opacity-50 group-hover:opacity-100 group-hover:-translate-x-1 transition-all" />
                    <div>
                      <span className="text-xs opacity-50 block">Anterior</span>
                      <span className="text-sm font-medium">{prevProject.title}</span>
                    </div>
                  </Link>
                )}
              </div>

              {/* Counter */}
              <div className="text-center">
                <span className="text-xs opacity-40">
                  {currentIndex + 1} / {totalProjects}
                </span>
              </div>

              {/* Next */}
              <div className="flex-1 text-right">
                {nextProject && (
                  <Link
                    href={`/project/${getProjectSlug(nextProject)}`}
                    className="group inline-flex items-center gap-3 text-right hover:text-neon-green transition-colors"
                  >
                    <div>
                      <span className="text-xs opacity-50 block">Próximo</span>
                      <span className="text-sm font-medium">{nextProject.title}</span>
                    </div>
                    <FaArrowLeft className="text-sm opacity-50 group-hover:opacity-100 rotate-180 group-hover:translate-x-1 transition-all" />
                  </Link>
                )}
              </div>
            </div>

            {/* Back to all projects */}
            <div className="text-center mt-12">
              <Link
                href="/#projects"
                className="
                  inline-flex items-center gap-3 px-6 py-3
                  text-[0.95rem] font-medium
                  text-neon-cyan border border-neon-cyan/30
                  rounded-lg bg-neon-cyan/5
                  hover:bg-neon-cyan/15 hover:border-neon-cyan/50
                  transition-all duration-300
                "
              >
                <FaArrowLeft className="text-sm" />
                Ver todos os projetos
              </Link>
            </div>
          </div>
        </section>
      </main>

      {openContact && <Contact setOpenContact={setOpenContact} />}
    </>
  );
};

export default ProjectPage;

// Generate static paths for all projects
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((project) => ({
    params: { project: slugify(project.title) },
  }));

  return {
    paths,
    fallback: false, // 404 for unknown slugs
  };
};

// Pre-render each project page
export const getStaticProps: GetStaticProps<ProjectPageProps> = async ({ params }) => {
  const slug = params?.project as string;
  const project = findProjectBySlug(slug, projects);

  if (!project) {
    return { notFound: true };
  }

  const { prev, next } = getAdjacentProjects(slug, projects);
  const currentIndex = projects.findIndex((p) => slugify(p.title) === slug);

  return {
    props: {
      project,
      prevProject: prev,
      nextProject: next,
      currentIndex,
      totalProjects: projects.length,
    },
  };
};
