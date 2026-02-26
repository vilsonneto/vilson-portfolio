'use client';
import { Subtitle } from "../Subtitle";
import { tooling } from "../../data/tooling";
import { useState } from "react";
import style from "./style.module.css";
import { AnimateOnScroll } from "@/components/effects/AnimateOnScroll";
import { NeonButton } from "@/components/effects/NeonButton";

interface IAboutMeProps {
  setOpenContact: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AboutMe = ({ setOpenContact }: IAboutMeProps) => {
  const [stack, setStack] = useState("Front-end");

  return (
    <section id="aboutme" className="pt-5 md:pt-[60px]">
      <AnimateOnScroll animation="fadeIn">
        <Subtitle text="Sobre mim" />
        <p className="mb-24 text-center m-auto w-[95%] md:w-[900px]">
          Aqui você encontrará mais informações sobre mim, o que faço e minhas
          habilidades atuais principalmente em termos de programação e tecnologia.
        </p>
      </AnimateOnScroll>

      <div className="flex gap-10 flex-col md:flex-row">
        <AnimateOnScroll animation="slideRight" delay={100} className="w-4/5 m-auto md:w-1/2 md:max-w-[500px]">
          <h4 className="text-[1.5rem] font-bold mb-[0.5rem]">Me conheça!</h4>
          <p className="mb-[1rem]">
            <strong className="text-neon-cyan">Desenvolvedor Frontend</strong> especializado em aplicações
            B2B de alta complexidade, com foco em arquitetura, performance e
            aplicações em tempo real.
          </p>
          <p className="mb-[1rem]">
            Minha trajetória é marcada por uma transição sólida: de bibliotecário
            a instrutor que formou <strong className="text-neon-green">300+ desenvolvedores</strong>, até
            desenvolvedor em produção. Essa jornada consolidou habilidades de
            comunicação técnica, pensamento crítico e tomada de decisão.
          </p>
          <p className="mb-[1rem]">
            Na <strong>Kenzie Academy Brasil</strong>, evoluí de monitor para
            instrutor pleno, liderando turmas e criando projetos diariamente em
            demonstrações ao vivo. Essa experiência me preparou para ambientes
            de produção onde código impacta usuários reais.
          </p>
          <p className="mb-[1rem]">
            Atualmente na <strong>Versotech</strong>, sou responsável por 4
            sistemas em produção com <strong className="text-neon-green">1.258+ commits</strong>, incluindo
            plataformas de chat em tempo real, e-commerce B2B com cálculos
            fiscais complexos, e automação comercial. Fui promovido de Junior
            para Pleno em 6 meses.
          </p>
          <p className="mb-[1rem]">
            Trabalho principalmente com <strong className="text-neon-cyan">Next.js, React, TypeScript e
            Redux</strong>, desenvolvendo interfaces robustas, fluxos complexos
            de dados e soluções orientadas a produto. Possuo experiência prática
            com WebSocket, testes automatizados (Jest, Cypress) e CI/CD.
          </p>
          <p className="mb-[34px]">
            Busco desafios onde possa assumir responsabilidade técnica, construir
            software de impacto real e contribuir para times que valorizam
            qualidade, colaboração e crescimento sustentável.
          </p>

          <NeonButton
            onClick={() => setOpenContact(true)}
            color="cyan"
            size="md"
          >
            Contato
          </NeonButton>
        </AnimateOnScroll>

        <AnimateOnScroll animation="slideLeft" delay={200} className="w-4/5 md:w-1/2 md:max-w-[430px] h-[550px] m-auto md:m-[0] md:m-inherit relative">
          <h4 className="text-[1.5rem] font-bold mb-[0.5rem]">Ferramentas</h4>

          <div>
            <div className="relative">
              <button
                className={`${style.btn} ${
                  stack === "Front-end" ? style.on : style.off
                }`}
                onClick={() => setStack("Front-end")}
              >
                Front-end
              </button>
              <button
                className={`${style.btn} ${
                  stack === "Back-end" ? style.on : style.off
                }`}
                onClick={() => setStack("Back-end")}
              >
                Back-end
              </button>
            </div>
            <div className={`${style.folder} max-w-[500px]`}>
              <ul className=" flex content-center gap-5 flex-wrap pt-6">
                {tooling.map(
                  (tool) =>
                    tool.type.includes(stack) && (
                      <li
                        className="w-fit p-[5px] border-solid border-2 border-grey-300 rounded-md hover:border-neon-cyan hover:text-neon-cyan transition-colors duration-300"
                        key={tool.id}
                      >
                        {tool.title}
                      </li>
                    )
                )}
              </ul>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};
