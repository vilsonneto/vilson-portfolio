import { Subtitle } from "../Subtitle";
import { oswald } from "@/assets/fonts";

export const Experience = () => {
  return (
    <section id="experience" className="pt-5 md:pt-[60px]">
      <Subtitle text="Experiência profissional" />
      <p className="mb-12 text-center m-auto w-[95%] md:w-[900px]">
        Foco em aplicações web complexas, estado em tempo real e experiência do usuário.
      </p>

      <div className="w-[90%] md:w-[900px] m-auto space-y-12">
        {/* VersoTech */}
        <article>
          <div className="mb-4">
            <h3 className={`text-[1.75rem] font-bold ${oswald.className}`}>
              Desenvolvedor Frontend Pleno
            </h3>
            <div className="flex items-center gap-3 mt-1 flex-wrap">
              <span className="text-[1.1rem] text-blueBaby-300 font-semibold">
                VersoTech
              </span>
              <span className="text-[0.9rem] opacity-60">•</span>
              <span className="text-[0.9rem] opacity-75">
                Mai 2024 - Atual
              </span>
              <span className="text-[0.9rem] opacity-60">•</span>
              <span className="text-[0.9rem] opacity-75">
                Porto Alegre (Híbrido)
              </span>
            </div>
          </div>

          <p className="text-[1rem] leading-relaxed opacity-90 mb-6">
            Atuo no desenvolvimento de plataformas web para SAC, Call Center e soluções B2B,
            com foco em comunicação em tempo real e gerenciamento de estados complexos.
            Trabalho com sistemas que exigem alta confiabilidade, sincronização entre
            múltiplas fontes de dados e experiência consistente em cenários adversos.
          </p>

          <div className="space-y-3">
            <h4 className="text-[1.1rem] font-semibold mb-3 text-blueBaby-300">
              Contribuições e impacto
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blueBaby-300 mr-3 mt-1 text-xl">•</span>
                <span className="text-[0.95rem] opacity-90 leading-relaxed">
                  Implementei arquitetura de cliente WebSocket centralizado, reduzindo problemas
                  de duplicação de mensagens e melhorando estabilidade de conexão em produção
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blueBaby-300 mr-3 mt-1 text-xl">•</span>
                <span className="text-[0.95rem] opacity-90 leading-relaxed">
                  Estruturei Redux Store modular para sincronização previsível entre API,
                  WebSocket e interface, facilitando expansão de funcionalidades em tempo real
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blueBaby-300 mr-3 mt-1 text-xl">•</span>
                <span className="text-[0.95rem] opacity-90 leading-relaxed">
                  Desenvolvi merge inteligente de mensagens que previne duplicatas em cenários
                  de concorrência, aumentando confiabilidade do sistema
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blueBaby-300 mr-3 mt-1 text-xl">•</span>
                <span className="text-[0.95rem] opacity-90 leading-relaxed">
                  Criei feedback visual consistente sobre estado de conexão e tratamento de
                  cenários fora do happy path, reduzindo dependência de suporte técnico
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blueBaby-300 mr-3 mt-1 text-xl">•</span>
                <span className="text-[0.95rem] opacity-90 leading-relaxed">
                  Promovido de Junior para Pleno em 6 meses, reconhecendo contribuições técnicas
                  e impacto na arquitetura do produto
                </span>
              </li>
            </ul>
          </div>
        </article>

        {/* Kenzie Academy Brasil */}
        <article>
          <div className="mb-4">
            <h3 className={`text-[1.75rem] font-bold ${oswald.className}`}>
              Instrutor Frontend
            </h3>
            <div className="flex items-center gap-3 mt-1 flex-wrap">
              <span className="text-[1.1rem] text-blueBaby-300 font-semibold">
                Kenzie Academy Brasil
              </span>
              <span className="text-[0.9rem] opacity-60">•</span>
              <span className="text-[0.9rem] opacity-75">
                Jun 2021 - Nov 2023
              </span>
            </div>
          </div>

          <p className="text-[1rem] leading-relaxed opacity-90 mb-6">
            Preparei desenvolvedores para o mercado, atuando como instrutor e mentor em
            programação frontend. Evoluí de Monitor para Instrutor Pleno, liderando turmas,
            criando demonstrações técnicas e gerenciando equipes de desenvolvedores em formação.
          </p>

          <div className="space-y-3">
            <h4 className="text-[1.1rem] font-semibold mb-3 text-blueBaby-300">
              Contribuições e impacto
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blueBaby-300 mr-3 mt-1 text-xl">•</span>
                <span className="text-[0.95rem] opacity-90 leading-relaxed">
                  Instruí e orientei 300+ desenvolvedores, preparando-os para o mercado com
                  fundamentos sólidos em desenvolvimento frontend
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blueBaby-300 mr-3 mt-1 text-xl">•</span>
                <span className="text-[0.95rem] opacity-90 leading-relaxed">
                  Criei projetos diariamente em demonstrações ao vivo, ensinando boas práticas
                  e padrões de código através de exemplos práticos
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blueBaby-300 mr-3 mt-1 text-xl">•</span>
                <span className="text-[0.95rem] opacity-90 leading-relaxed">
                  Gerenciei equipes de desenvolvedores em metodologia Scrum, garantindo
                  ambiente de aprendizado eficaz e produtivo
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blueBaby-300 mr-3 mt-1 text-xl">•</span>
                <span className="text-[0.95rem] opacity-90 leading-relaxed">
                  Conduzi code reviews e mentorias técnicas, auxiliando na resolução de
                  problemas complexos e desenvolvimento de raciocínio crítico
                </span>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
};
