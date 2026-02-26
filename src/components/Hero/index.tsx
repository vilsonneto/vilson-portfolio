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
            Atuo com arquitetura WebSocket, gerenciamento de estado em tempo real e
            cálculos de negócio críticos.{' '}
            <strong className="text-neon-green">
              <AnimatedCounter value={1258} suffix="+ commits" />
            </strong>{' '}
            em 4 sistemas em produção, promovido de Junior para Pleno em{' '}
            <strong className="text-neon-green">6 meses</strong>.
          </p>

          <div className="flex flex-wrap gap-4 mt-10 mb-12">
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
