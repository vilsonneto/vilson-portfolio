import { Subtitle } from "../Subtitle";
import { tooling } from "../../data/tooling";
import { useState } from "react";
import style from "./style.module.css"

interface IAboutMeProps {
  setOpenContact: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AboutMe = ({ setOpenContact }: IAboutMeProps) => {
  const [stack, setStack] = useState("Front-end");

  return (
    <section>
      <Subtitle text="Sobre mim" />
      <p className="mb-24 text-center w-[1000px]">
        Aqui você encontrará mais informações sobre mim, o que faço e minhas
        habilidades atuais principalmente em termos de programação e tecnologia.
      </p>

      <div className="flex gap-10">
        <div className="w-1/2 max-w-[511px]">
          <h4 className="text-[1.5rem] font-bold mb-[0.5rem]">Me conheça!</h4>
          <p className="mb-[1rem]">
            Sou um <strong>Desenvolvedor Full Stack</strong> Apaixonado por
            Transformar Ideias em Código!
          </p>
          <p className="mb-[1rem]">
            💡 Minha jornada na programação começou de maneira inusitada,
            enquanto atuava como bibliotecário, quando tive a visão de criar um
            acervo digital para facilitar o acesso durante a pandemia. Essa
            iniciativa, que demonstrou meu comprometimento com a inovação,
            resultou na minha transição para o mundo da programação, um passo
            que encarava com entusiasmo.
          </p>
          <p className="mb-[1rem]">
            🌐 Rapidamente percebi que a programação estava moldando o mundo e
            decidi que queria fazer parte dessa revolução. Me apaixonei por
            resolver desafios complexos e me empenhei em uma jornada intensiva
            de um ano na <strong>Kenzie Academy Brasil</strong>, onde adquiri
            conhecimento sólido em tecnologias <strong>Front End</strong> e{" "}
            <strong>Back End</strong>.
          </p>
          <p className="mb-[1rem]">
            🛠️ Minha caixa de ferramentas inclui HTML5, CSS3, JavaScript (ES6+),
            Typescript, React, Node.js, Python (Django e Flask) e SQL. Estou
            constantemente buscando novos desafios para aprimorar minhas
            habilidades e criar soluções inovadoras.
          </p>
          <p className="mb-[1rem]">
            💼 Em setembro de 2022, dei um grande passo em minha jornada ao me
            tornar instrutor. Minha habilidade em resolver problemas e minha
            paixão por compartilhar conhecimento, desenvolvida durante o período
            em que trabalhei como monitor, me permitiram orientar outros
            aspirantes a desenvolvedores em sua busca por sucesso.
          </p>
          <p className="mb-[34px]">
            🌟 Estou determinado a continuar minha evolução como{" "}
            <strong>desenvolvedor fullstack</strong>, aplicando minhas
            habilidades para criar soluções que transformem a vida das pessoas.
            Juntos, podemos construir um futuro digital mais brilhante e
            inovador!
          </p>

          <button
            onClick={() => setOpenContact(true)}
            className="text-[20px] bg-blueBaby-300 w-fit px-8 py-[10px] rounded-md "
          >
            Contato
          </button>
        </div>
        <div className="w-1/2 max-w-[511px] relative">
          <h4 className="text-[1.5rem] font-bold mb-[0.5rem]">Ferramentas</h4>

          <div>
            <div className="relative">
              <button
                className={`${style.btn} ${stack === "Front-end" ? style.on : style.off}`}
                onClick={() => setStack("Front-end")}
              >
                Front-end
              </button>
              <button
                className={`${style.btn} ${stack === "Back-end" ? style.on : style.off}`}
              
              onClick={() => setStack("Back-end")}>Back-end</button>
            </div>
            <div className={`${style.folder}`}>

            <ul className=" flex content-center gap-5 flex-wrap pt-6">
              {tooling.map(
                (tool) =>
                  tool.type.includes(stack) && (
                    <li
                      className="w-fit p-[5px] border-solid border-2 border-grey-300 rounded-md"
                      key={tool.id}
                    >
                      {tool.title}
                    </li>
                  )
              )}
            </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
