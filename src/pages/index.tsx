import { source_code_pro, oswald } from "@/assets/fonts";
import { AboutMe } from "@/components/AboutMe";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { FloatingContact } from "@/components/FloatingContact";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowIWork } from "@/components/HowIWork";
import { ProjectCard } from "@/components/ProjectCard";
import { Subtitle } from "@/components/Subtitle";
import { TechStack } from "@/components/TechStack";
import { projects } from "@/data/projects";
import { AnimateOnScroll } from "@/components/effects/AnimateOnScroll";
import { NextPage } from "next";
import React from "react";
import { FaChevronDown } from "react-icons/fa";

const Home: NextPage = () => {
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

        {/* Seção de Projetos */}
        <section
          id="projects"
          className="pt-10 md:pt-[80px] mt-[10px] scroll-mt-20 w-full"
        >
          <AnimateOnScroll animation="fadeIn">
            <div className="text-center mb-12">
              <Subtitle text="Projetos Selecionados" />
              <p className="text-center m-auto w-[95%] md:w-[700px] text-[1rem] opacity-80 leading-relaxed">
                Cases que demonstram decisões técnicas, impacto entregue e minha
                abordagem no desenvolvimento frontend.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Grid de cards */}
          <div className="px-5 md:px-[70px] max-w-[1300px] m-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <AnimateOnScroll
                  key={project.id}
                  animation="slideUp"
                  delay={index * 100}
                >
                  <ProjectCard
                    project={project}
                    index={index}
                  />
                </AnimateOnScroll>
              ))}
            </div>

            {/* Hint de interação */}
            <div className="text-center mt-10 opacity-50 text-sm">
              <span className="inline-flex items-center gap-2">
                <FaChevronDown className="animate-bounce" />
                Clique em um projeto para ver o case completo
              </span>
            </div>
          </div>
        </section>

        <Experience />
        <AboutMe setOpenContact={setOpenContact} />
        <HowIWork />
        <TechStack />
      </main>

      <FloatingContact setOpenContact={setOpenContact} />

      <div id="widget-container"></div>

      {openContact && <Contact setOpenContact={setOpenContact} />}
    </>
  );
};

export default Home;
