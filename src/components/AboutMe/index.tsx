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
      </AnimateOnScroll>

      <div className="flex gap-10 flex-col md:flex-row">
        <AnimateOnScroll animation="slideRight" delay={100} className="w-4/5 m-auto md:w-1/2 md:max-w-[500px]">
          <h4 className="text-[1.5rem] font-bold mb-[0.5rem]">Me conheça!</h4>
          <p className="mb-[1rem]">
            Minha trajetória tem uma transição incomum: de <strong className="text-neon-cyan">bibliotecário</strong> a
            instrutor que formou <strong className="text-neon-green">300+ desenvolvedores</strong> na Kenzie Academy,
            até desenvolvedor frontend em produção. Essa jornada consolidou comunicação
            técnica, pensamento crítico e autonomia para assumir responsabilidade
            sobre sistemas de missão crítica.
          </p>
          <p className="mb-[34px]">
            Fora do trabalho corporativo, mantenho a <strong className="text-neon-cyan">tributos-br</strong> — uma
            biblioteca npm open-source para cálculos fiscais brasileiros com precisão
            decimal arbitrária, zero dependências e 95% de cobertura de testes.
            Também estou construindo o <strong className="text-neon-green">Guigo</strong>,
            um bot WhatsApp que ajuda meu pai motorista de Uber a controlar finanças
            com sistema de envelopes.
          </p>

          <NeonButton
            onClick={() => setOpenContact(true)}
            color="cyan"
            size="md"
          >
            Contato
          </NeonButton>
        </AnimateOnScroll>

        <AnimateOnScroll animation="slideLeft" delay={200} className="w-4/5 md:w-1/2 md:max-w-[430px] h-[720px] m-auto md:m-[0] md:m-inherit relative">
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
