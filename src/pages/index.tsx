import { source_code_pro, oswald } from "@/assets/fonts";
import { AboutMe } from "@/components/AboutMe";
import Card from "@/components/Card";
import { Contact } from "@/components/Contact";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
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
        <section id="projects" className="pt-[60px] mt-[10px]">
          <Subtitle text="Projetos" />
          <div className="flex  content-center gap-8 flex-wrap p-[70px]">
            {projects.map((project) => {
              return <Card key={project.id} project={project} />;
            })}
          </div>
        </section>
      </main>

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
