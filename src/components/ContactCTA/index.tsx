'use client';
import { Dispatch, SetStateAction } from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { NeonButton } from '@/components/effects/NeonButton';
import { AnimateOnScroll } from '@/components/effects/AnimateOnScroll';

interface ContactCTAProps {
  setOpenContact: Dispatch<SetStateAction<boolean>>;
}

export const ContactCTA = ({ setOpenContact }: ContactCTAProps) => {
  return (
    <section
      id="contact-cta"
      className="w-full py-20 px-5 md:px-[70px] scroll-mt-28"
      style={{
        background: 'linear-gradient(180deg, transparent 0%, rgba(0,255,255,0.03) 50%, transparent 100%)',
      }}
    >
      <AnimateOnScroll animation="fadeIn">
        <div className="max-w-[800px] mx-auto text-center">
          {/* Disponibilidade */}
          <span className="inline-flex items-center gap-2 text-sm text-neon-green mb-6">
            <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" aria-hidden="true" />
            Disponível para novos projetos
          </span>

          <h2
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-oswald)' }}
          >
            Vamos trabalhar{' '}
            <span
              className="text-neon-cyan"
              style={{ textShadow: '0 0 20px #00FFFF' }}
            >
              juntos?
            </span>
          </h2>

          <p className="text-base md:text-lg opacity-70 mb-10 leading-relaxed">
            Atuo remotamente com equipes B2B. Se você tem um desafio técnico
            complexo, estou disponível para conversar.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <NeonButton color="cyan" size="lg" onClick={() => setOpenContact(true)}>
              Fale comigo
            </NeonButton>
            <NeonButton
              href="https://www.linkedin.com/in/vilson-padilha"
              color="purple"
              size="lg"
              external
            >
              <FaLinkedin aria-hidden="true" />
              LinkedIn
            </NeonButton>
          </div>

          {/* Email direto */}
          <a
            href="mailto:vilson.neto57@gmail.com"
            className="inline-flex items-center gap-2 text-sm opacity-50 hover:opacity-100 hover:text-neon-cyan transition-all duration-300"
          >
            <FaEnvelope aria-hidden="true" />
            vilson.neto57@gmail.com
          </a>
        </div>
      </AnimateOnScroll>
    </section>
  );
};
