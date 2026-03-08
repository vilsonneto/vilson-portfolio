'use client';
import { Subtitle } from "../Subtitle";
import { oswald } from "@/assets/fonts";
import { AnimateOnScroll } from "@/components/effects/AnimateOnScroll";

export const Experience = () => {
  return (
    <section id="experience" className="pt-5 md:pt-[60px]">
      <AnimateOnScroll animation="fadeIn">
        <Subtitle text="Experiência profissional" />
        <p className="mb-12 text-center m-auto w-[95%] md:w-[900px]">
          Foco em aplicações web complexas, estado em tempo real e experiência do usuário.
        </p>
      </AnimateOnScroll>

      <div className="w-[90%] md:w-[900px] m-auto space-y-12">
        {/* VersoTech */}
        <AnimateOnScroll animation="slideUp" delay={100}>
          <article>
            <div className="mb-4">
              <h3 className={`text-[1.75rem] font-bold ${oswald.className}`}>
                Desenvolvedor Frontend Pleno
              </h3>
              <div className="flex items-center gap-3 mt-1 flex-wrap">
                <span className="text-[1.1rem] text-neon-cyan font-semibold">
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
              Referência técnica em 4 plataformas B2B. Atuo em arquitetura frontend,
              aplicações em tempo real, cálculos fiscais complexos e automação comercial.
              Promovido de Junior para Pleno em 6 meses.
            </p>

            <div className="space-y-3">
              <h4 className="text-[1.1rem] font-semibold mb-3 text-neon-cyan">
                Projetos e impacto
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-neon-pink mr-3 mt-1 text-xl">•</span>
                  <span className="text-[0.95rem] opacity-90 leading-relaxed">
                    <strong>VersoChat:</strong> Arquitetura WebSocket com reconexão automática,
                    merge inteligente que eliminou 95% de duplicatas entre API e canal em tempo real,
                    sistema de notificações multi-camada e componentização que reduziu 30% de código duplicado
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-pink mr-3 mt-1 text-xl">•</span>
                  <span className="text-[0.95rem] opacity-90 leading-relaxed">
                    <strong>VersoCommerce:</strong> Motor de cálculos fiscais (ICMS, IPI, ST) com
                    95% de cobertura de testes, sistema de subcolaboradores com permissões granulares
                    e integração PIX com validação em tempo real
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-pink mr-3 mt-1 text-xl">•</span>
                  <span className="text-[0.95rem] opacity-90 leading-relaxed">
                    <strong>VersoADM:</strong> Módulo de Comissão Dinâmica com wizard multi-step,
                    biblioteca de componentes reutilizáveis que economizou ~500 linhas duplicadas
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-pink mr-3 mt-1 text-xl">•</span>
                  <span className="text-[0.95rem] opacity-90 leading-relaxed">
                    <strong>Verso Apps:</strong> Monorepo com 4 aplicações React, shared library
                    com 98% de cobertura, sistema de agendas comerciais, calculadora de preços
                    e dashboards analíticos
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-neon-cyan/20 text-neon-cyan rounded-full text-[0.85rem] border border-neon-cyan/30">
                54+ releases gerenciadas
              </span>
              <span className="px-3 py-1 bg-neon-purple/20 text-neon-purple rounded-full text-[0.85rem] border border-neon-purple/30">
                95% cobertura em cálculos fiscais
              </span>
            </div>
          </article>
        </AnimateOnScroll>

        {/* Kenzie Academy Brasil */}
        <AnimateOnScroll animation="slideUp" delay={200}>
          <article>
            <div className="mb-4">
              <h3 className={`text-[1.75rem] font-bold ${oswald.className}`}>
                Instrutor Frontend
              </h3>
              <div className="flex items-center gap-3 mt-1 flex-wrap">
                <span className="text-[1.1rem] text-neon-cyan font-semibold">
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
              <h4 className="text-[1.1rem] font-semibold mb-3 text-neon-cyan">
                Contribuições e impacto
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-neon-pink mr-3 mt-1 text-xl">•</span>
                  <span className="text-[0.95rem] opacity-90 leading-relaxed">
                    Instruí e orientei <strong className="text-neon-green">300+ desenvolvedores</strong>, preparando-os para o mercado com
                    fundamentos sólidos em desenvolvimento frontend
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-pink mr-3 mt-1 text-xl">•</span>
                  <span className="text-[0.95rem] opacity-90 leading-relaxed">
                    Criei projetos diariamente em demonstrações ao vivo, ensinando boas práticas
                    e padrões de código através de exemplos práticos
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-pink mr-3 mt-1 text-xl">•</span>
                  <span className="text-[0.95rem] opacity-90 leading-relaxed">
                    Gerenciei equipes de desenvolvedores em metodologia Scrum, garantindo
                    ambiente de aprendizado eficaz e produtivo
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-pink mr-3 mt-1 text-xl">•</span>
                  <span className="text-[0.95rem] opacity-90 leading-relaxed">
                    Conduzi code reviews e mentorias técnicas, auxiliando na resolução de
                    problemas complexos e desenvolvimento de raciocínio crítico
                  </span>
                </li>
              </ul>
            </div>
          </article>
        </AnimateOnScroll>
      </div>
    </section>
  );
};
