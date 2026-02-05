import { source_code_pro, oswald } from "@/assets/fonts";
import { AboutMe } from "@/components/AboutMe";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowIWork } from "@/components/HowIWork";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectCase } from "@/components/ProjectCase";
import { Subtitle } from "@/components/Subtitle";
import { TechStack } from "@/components/TechStack";
import { projects } from "@/data/projects";
import { projectData } from "@/schemas/project.schema";
import apiGithub from "@/services/github";
import { GetServerSideProps, NextPage } from "next";
import React from "react";

interface IHomeProps {
  // projects: projectData[];
}

const Home: NextPage<IHomeProps> = ({}) => {
  const [openContact, setOpenContact] = React.useState(false);
  const [expandedProjectId, setExpandedProjectId] = React.useState<number | null>(null);
  const projectsSectionRef = React.useRef<HTMLElement>(null);

  const expandedProject = projects.find((p) => p.id === expandedProjectId);

  const handleViewCase = (projectId: number) => {
    setExpandedProjectId(projectId);
    // Scroll suave para o topo da seção de projetos
    setTimeout(() => {
      projectsSectionRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  };

  const handleBackToProjects = () => {
    setExpandedProjectId(null);
    // Scroll suave para o topo da seção de projetos
    setTimeout(() => {
      projectsSectionRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  };

  return (
    <>
      <main
        className={`body flex min-h-screen flex-col items-center justify-between ${
          source_code_pro.className
        } ${oswald.variable} ${openContact && "blur-sm"}`}
      >
        <Header setOpenContact={setOpenContact} />
        <Hero />
        <AboutMe setOpenContact={setOpenContact} />
        <HowIWork />
        <TechStack />
        <Experience />
        <section
          ref={projectsSectionRef}
          id="projects"
          className="pt-5 md:pt-[60px] mt-[10px] scroll-mt-20"
        >
          <Subtitle text="Projetos selecionados" />
          <p className="mb-12 text-center m-auto w-[95%] md:w-[900px]">
            Cases que demonstram decisões técnicas, impacto entregue e minha
            abordagem em front-end.
          </p>

          {!expandedProject ? (
            // Grid de projetos resumidos
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5 md:px-[70px] max-w-[1200px] m-auto transition-all duration-300">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onViewCase={() => handleViewCase(project.id)}
                />
              ))}
            </div>
          ) : (
            // Case completo expandido
            <div className="px-5 md:px-[70px] animate-fadeIn">
              <button
                onClick={handleBackToProjects}
                className="mb-6 text-blueBaby-300 hover:underline flex items-center gap-2 text-[1rem] font-semibold"
              >
                ← Voltar para todos os projetos
              </button>
              <ProjectCase project={expandedProject} />
            </div>
          )}
        </section>
      </main>
      <div id="widget-container"></div>

      {openContact && <Contact setOpenContact={setOpenContact} />}
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (cxt) => {
  const response = await apiGithub.get<projectData[]>("");

  return {
    props: { projects: response.data },
  };
};
