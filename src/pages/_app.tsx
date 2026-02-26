import "@/styles/reset.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { AudioProvider } from "@/contexts/AudioContext";
import { ScanlineOverlay } from "@/components/effects/ScanlineOverlay";
import { KonamiSecret } from "@/components/KonamiSecret";
import { HiddenBook } from "@/components/HiddenBook";
import { initConsoleEasterEggs, registerConsoleCommands } from "@/utils/consoleEasterEggs";

export default function App({ Component, pageProps }: AppProps) {
  // Inicializar easter eggs do console
  useEffect(() => {
    initConsoleEasterEggs();
    registerConsoleCommands();
  }, []);

  return (
    <AudioProvider>
      <ScanlineOverlay opacity={0.02} />
      <KonamiSecret />
      <HiddenBook />
      <Component {...pageProps} />
    </AudioProvider>
  );
}
