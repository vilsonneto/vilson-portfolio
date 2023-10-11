import { source_code_pro, oswald } from "@/assets/fonts";
import Card from "@/components/Card";
import { Contact } from "@/components/Contact";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Subtitle } from "@/components/Subtitle";
import { projects } from "@/data/projects";
import { projectData } from "@/schemas/project.schema";
import apiGithub from "@/services/github";
import { GetServerSideProps, NextPage } from "next";



interface IHomeProps {
  // projects: projectData[];
}

const Home: NextPage<IHomeProps> = ({}) => {
  return (
    <>
    <main
      className={`body flex min-h-screen flex-col items-center justify-between ${source_code_pro.className} ${oswald.variable} blur-sm`}
      >
      <Header />
      <Hero />
      <div
        className="flex  content-center gap-8 flex-wrap p-[70px]"
        // className="grid lg:grid-cols-2 md: grid-cols-2, sm:grid-cols-1 gap-12 justify-items-center"
        >
        {projects.map((project) => {
          return <Card key={project.id} project={project} />;
        })}
      </div>
      <section>
        <Subtitle text="Sobre mim" />
        <p className="mb-24 text-center w-[828px] mt-[]">
          Aqui você encontrará mais informações sobre mim, o que faço e minhas
          habilidades atuais principalmente em termos de programação e
          tecnologia
        </p>

        <div className="flex">
          <div className="w-1/2">
            <h4>Me conheça!</h4>
          </div>
          <div className="w-1/2">
            <h4>Minhas habilidades</h4>
          </div>
        </div>
      </section>

    </main>
    
    <Contact/>
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
