import { Subtitle } from "../Subtitle";

export const HowIWork = () => {
  const principles = [
    {
      title: "Começo pelo problema, não pela tecnologia",
      description:
        "Entendo o contexto antes de escolher a stack. A melhor solução técnica é aquela que resolve o problema real do usuário.",
    },
    {
      title: "Transformo requisitos em decisões claras de front-end",
      description:
        "Traduzo especificações de produto em componentes, estados e fluxos. Garanto que requisitos não técnicos se tornem implementações previsíveis.",
    },
    {
      title: "Performance faz parte da solução",
      description:
        "Otimizo Core Web Vitals, reduzo bundle size e priorizo carregamento crítico. Performance não é refatoração futura, é parte do desenvolvimento.",
    },
    {
      title: "Priorizo código simples e legível",
      description:
        "Escrevo código que outros desenvolvedores entendem sem esforço. Componentes claros e funções diretas reduzem bugs e facilitam manutenção.",
    },
    {
      title: "Cuido do que acontece fora do happy path",
      description:
        "Trato estados de erro, loading e edge cases desde o início. A experiência do usuário depende tanto do que funciona quanto do que pode falhar.",
    },
    {
      title: "Penso no front-end como produto vivo",
      description:
        "Projeto interfaces que evoluem com o produto. Componentes reutilizáveis, padrões consistentes e arquitetura escalável permitem mudanças rápidas.",
    },
  ];

  return (
    <section id="how-i-work" className="pt-5 md:pt-[60px]">
      <Subtitle text="Como eu trabalho" />
      <p className="mb-12 text-center m-auto w-[95%] md:w-[900px]">
        Minha abordagem como Front-end Developer combina método, clareza técnica
        e visão de produto.
      </p>

      <div className="w-[90%] md:w-[900px] m-auto">
        <ul className="space-y-8">
          {principles.map((principle, index) => (
            <li key={index} className="border-l-4 border-blueBaby-300 pl-6">
              <h4 className="text-[1.25rem] font-bold mb-2">
                {principle.title}
              </h4>
              <p className="text-[1rem] opacity-90">{principle.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
