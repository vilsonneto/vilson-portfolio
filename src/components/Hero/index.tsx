'use client';
import { oswald } from "@/assets/fonts";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { GlitchText } from "@/components/effects/GlitchText";
import { NeonButton } from "@/components/effects/NeonButton";
import { TypingText } from "@/components/effects/TypingText";
import dynamic from "next/dynamic";
import Animation from "../../../public/devAnimation.json";

// Dynamic import para evitar erro de SSR (document is not defined)
const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);

export const Hero = () => {
  return (
    <>
      <section className="min-h-[572px] relative ">
        <div className="md:w-[80%] lg:w-[60%] p-5 md:ml-24 mt-5 md:mt-20 flex flex-col justify-center items-center">
          <h2 className={`font-bold text-[30px] md:text-[60px] mb-5 w-full ${oswald.className}`}>
            <GlitchText text="VILSON PADILHA" />
          </h2>

          {/* Subtítulo com typing effect */}
          <div className="w-full mb-4 font-mono text-neon-cyan text-sm md:text-base">
            <span className="text-neon-green">{'>'}</span>{' '}
            <TypingText
              text="Frontend Developer // B2B Specialist // WebSocket Architect"
              speed={40}
              delay={500}
            />
          </div>

          <p className={`text-[18px] md:text-[22px] w-full`}>
            Especializado em <strong className="text-neon-cyan">aplicações B2B de alta complexidade</strong>.
            Atuo com arquitetura WebSocket, gerenciamento de estado em tempo real
            e cálculos de negócio críticos em sistemas de missão crítica.
          </p>

          {/* Faixa de métricas */}
          <div className="flex gap-8 md:gap-12 w-full mt-6 flex-wrap">
            <div className="flex flex-col">
              <AnimatedCounter
                value={1258}
                suffix="+"
                className="text-3xl font-bold text-neon-cyan"
              />
              <span className="text-xs opacity-60 mt-1 font-normal">commits entregues</span>
            </div>
            <div className="flex flex-col">
              <AnimatedCounter
                value={4}
                className="text-3xl font-bold text-neon-purple"
              />
              <span className="text-xs opacity-60 mt-1 font-normal">sistemas em produção</span>
            </div>
            <div className="flex flex-col">
              <AnimatedCounter
                value={6}
                suffix=" meses"
                className="text-3xl font-bold text-neon-green"
              />
              <span className="text-xs opacity-60 mt-1 font-normal">Junior → Pleno</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-8 mb-12">
            <NeonButton href="#projects" color="cyan" size="lg">
              Ver projetos
            </NeonButton>
            <NeonButton
              href="https://www.linkedin.com/in/vilson-padilha"
              color="purple"
              size="lg"
              external
            >
              LinkedIn
            </NeonButton>
          </div>
        </div>

        {/* Lottie Animation com glow neon */}
        <Player
          className="figure invisible lg:visible"
          autoplay
          loop
          src={Animation}
          style={{
            filter: 'drop-shadow(0 0 20px rgba(0, 255, 255, 0.4)) drop-shadow(0 0 40px rgba(191, 0, 255, 0.2))',
          }}
        />
      </section>
      <div className="md:h-48 w-full bg-blueSerenate-200"></div>
    </>
  );
};
