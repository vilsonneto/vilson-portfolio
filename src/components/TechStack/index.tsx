import { Subtitle } from "../Subtitle";

export const TechStack = () => {
  const stackCategories = [
    {
      category: "Fundação",
      description: "Tecnologias que estruturam minhas aplicações e garantem previsibilidade",
      technologies: [
        {
          name: "React + TypeScript",
          reason: "Componentes previsíveis, contratos claros entre dados e UI, menor superfície para bugs em produção."
        },
        {
          name: "Next.js (App Router)",
          reason: "SSR para performance inicial, roteamento robusto e arquitetura escalável para aplicações complexas."
        }
      ]
    },
    {
      category: "Estado e Sincronização",
      description: "Ferramentas para gerenciar fluxos complexos e dados em tempo real",
      technologies: [
        {
          name: "Redux Toolkit",
          reason: "Estado global previsível em aplicações grandes. Essencial para sincronização entre API, WebSocket e UI."
        },
        {
          name: "Context API",
          reason: "Estado local compartilhado entre componentes relacionados. Mais simples que Redux quando o escopo é limitado."
        }
      ]
    },
    {
      category: "Comunicação",
      description: "Como conecto front-end com backend e serviços externos",
      technologies: [
        {
          name: "WebSocket (Pusher)",
          reason: "Comunicação bidirecional em tempo real. Uso quando latência baixa e atualizações instantâneas são críticas."
        },
        {
          name: "REST APIs",
          reason: "Padrão para operações CRUD e integrações previsíveis. Simples de debugar e testar."
        }
      ]
    },
    {
      category: "UI e Produtividade",
      description: "Ferramentas que aceleram desenvolvimento sem sacrificar qualidade",
      technologies: [
        {
          name: "Material UI",
          reason: "Sistema de componentes acessível e consistente. Reduz tempo de implementação em projetos corporativos."
        },
        {
          name: "Tailwind CSS",
          reason: "Estilização rápida e previsível. Útil quando preciso de controle granular sem criar abstrações prematuras."
        },
        {
          name: "Styled Components",
          reason: "Componentes com estilos encapsulados. Escolho quando isolamento visual e manutenção são prioridades."
        }
      ]
    }
  ];

  return (
    <section id="tech-stack" className="pt-5 md:pt-[60px]">
      <Subtitle text="Stack & Decisões Técnicas" />
      <p className="mb-12 text-center m-auto w-[95%] md:w-[900px]">
        Escolho tecnologias com base em clareza, manutenibilidade e impacto no produto.
        Priorizo ferramentas que reduzem incerteza e facilitam evolução do código.
      </p>

      <div className="w-[90%] md:w-[900px] m-auto space-y-10">
        {stackCategories.map((category, index) => (
          <div key={index}>
            <h3 className="text-[1.5rem] font-bold mb-2 text-blueBaby-300">
              {category.category}
            </h3>
            <p className="text-[0.95rem] opacity-75 mb-4">
              {category.description}
            </p>
            <div className="space-y-4">
              {category.technologies.map((tech, techIndex) => (
                <div
                  key={techIndex}
                  className="pl-4 border-l-2 border-gray-700"
                >
                  <h4 className="text-[1.1rem] font-semibold mb-1">
                    {tech.name}
                  </h4>
                  <p className="text-[0.95rem] opacity-80">
                    {tech.reason}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Abordagem */}
        <div className="mt-12 pt-8 border-t border-gray-700/50">
          <h3 className="text-[1.5rem] font-bold mb-4 text-blueBaby-300">
            Como escolho tecnologias
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-blueBaby-300 mr-3 mt-1">•</span>
              <span className="text-[1rem] opacity-90">
                <strong>Problema primeiro</strong> — entendo o requisito antes de escolher a ferramenta
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blueBaby-300 mr-3 mt-1">•</span>
              <span className="text-[1rem] opacity-90">
                <strong>Previsibilidade</strong> — prefiro soluções com comportamento claro e debugáveis
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blueBaby-300 mr-3 mt-1">•</span>
              <span className="text-[1rem] opacity-90">
                <strong>Manutenibilidade</strong> — código que outros desenvolvedores entendem sem esforço
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blueBaby-300 mr-3 mt-1">•</span>
              <span className="text-[1rem] opacity-90">
                <strong>Evolução</strong> — arquitetura que permite mudanças rápidas sem refatorações grandes
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
