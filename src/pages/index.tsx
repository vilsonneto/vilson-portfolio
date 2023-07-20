import Card from "@/components/card";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Subtitle } from "@/components/subtitle";
import { projectData } from "@/schemas/project.schema";
import apiGithub from "@/services/github";
import { GetServerSideProps, NextPage } from "next";

interface IHomeProps {
  projects: projectData[];
}

const Home: NextPage<IHomeProps> = ({ projects }) => {
  return (
    <main
      className={`body flex min-h-screen flex-col items-center justify-between `}
    >
      <Header />
      <Hero />
      <div
        className="flex flex-col h-[220px] content-center gap-8 flex-wrap"
        // className="grid lg:grid-cols-2 md: grid-cols-2, sm:grid-cols-1 gap-12 justify-items-center"
      >
        {projects.map((project) => {
          return <Card key={project.id} project={project} />;
        })}
      </div>
      <section>
        <Subtitle text="Sobre mim" />
        <p className="mb-24">
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
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (cxt) => {
  const response = await apiGithub.get<projectData[]>("");

  return {
    props: { projects: response.data },
  };
};
