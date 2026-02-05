import { source_code_pro, oswald } from "@/assets/fonts";
import { AboutMe } from "@/components/AboutMe";
import { Contact } from "@/components/Contact";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowIWork } from "@/components/HowIWork";
import { ProjectCase } from "@/components/ProjectCase";
import { Subtitle } from "@/components/Subtitle";
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
        <section id="projects" className="pt-5 md:pt-[60px] mt-[10px]">
          <Subtitle text="Projetos" />
          <p className="mb-12 text-center m-auto w-[95%] md:w-[900px]">
            Cases selecionados que demonstram minha abordagem em front-end,
            decisões técnicas e impacto entregue.
          </p>
          <div className="flex flex-col gap-8 px-5 md:px-[70px]">
            {projects.map((project) => {
              return <ProjectCase key={project.id} project={project} />;
            })}
          </div>
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
