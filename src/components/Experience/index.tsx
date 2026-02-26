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
              Referência técnica em 4 plataformas B2B com <strong className="text-neon-green">1.258+ commits</strong> em produção.
              Atuo em arquitetura frontend, aplicações em tempo real, cálculos fiscais complexos
              e automação comercial. Promovido de Junior para Pleno em 6 meses.
            </p>

            <div className="space-y-3">
              <h4 className="text-[1.1rem] font-semibold mb-3 text-neon-cyan">
                Projetos e impacto
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-neon-pink mr-3 mt-1 text-xl">•</span>
                  <span className="text-[0.95rem] opacity-90 leading-relaxed">
                    <strong>VersoChat (144 commits):</strong> Arquitetura WebSocket com reconexão
                    automática, merge inteligente que eliminou 95% de duplicatas, sistema de
                    notificações multi-camada e componentização que reduziu 30% de código duplicado
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-pink mr-3 mt-1 text-xl">•</span>
                  <span className="text-[0.95rem] opacity-90 leading-relaxed">
                    <strong>VersoCommerce (333 commits):</strong> Motor de cálculos fiscais (ICMS,
                    IPI, ST) com 95% de cobertura de testes, sistema de subcolaboradores com
                    permissões granulares, PIX em tempo real e otimizações que melhoraram
                    resposta em ~30%
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-pink mr-3 mt-1 text-xl">•</span>
                  <span className="text-[0.95rem] opacity-90 leading-relaxed">
                    <strong>VersoADM (118 commits):</strong> Módulo de Comissão Dinâmica com
                    wizard multi-step (~1.500 linhas), biblioteca de componentes que economizou
                    ~500 linhas duplicadas, migração npm→Yarn em 75.000+ linhas
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-pink mr-3 mt-1 text-xl">•</span>
                  <span className="text-[0.95rem] opacity-90 leading-relaxed">
                    <strong>Verso Apps (663 commits):</strong> Sistema de Automação de Agendas
                    comerciais, calculadora de preços com regras complexas, dashboards analíticos
                    e gestão de 54+ releases
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-neon-green/20 text-neon-green rounded-full text-[0.85rem] border border-neon-green/30">
                1.258+ commits
              </span>
              <span className="px-3 py-1 bg-neon-cyan/20 text-neon-cyan rounded-full text-[0.85rem] border border-neon-cyan/30">
                54+ releases
              </span>
              <span className="px-3 py-1 bg-neon-pink/20 text-neon-pink rounded-full text-[0.85rem] border border-neon-pink/30">
                200+ bugs resolvidos
              </span>
              <span className="px-3 py-1 bg-neon-purple/20 text-neon-purple rounded-full text-[0.85rem] border border-neon-purple/30">
                95% cobertura de testes
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
