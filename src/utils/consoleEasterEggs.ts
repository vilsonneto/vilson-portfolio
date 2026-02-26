export const initConsoleEasterEggs = () => {
  if (typeof window === 'undefined') return;

  // ASCII Art principal
  const asciiArt = `
%c
██╗   ██╗██╗██╗     ███████╗ ██████╗ ███╗   ██╗
██║   ██║██║██║     ██╔════╝██╔═══██╗████╗  ██║
██║   ██║██║██║     ███████╗██║   ██║██╔██╗ ██║
╚██╗ ██╔╝██║██║     ╚════██║██║   ██║██║╚██╗██║
 ╚████╔╝ ██║███████╗███████║╚██████╔╝██║ ╚████║
  ╚═══╝  ╚═╝╚══════╝╚══════╝ ╚═════╝ ╚═╝  ╚═══╝

%c  ╔══════════════════════════════════════════════╗
  ║  👋 Olá, dev curioso!                        ║
  ║                                              ║
  ║  Se você está lendo isso, provavelmente      ║
  ║  sabe o que está fazendo...                  ║
  ╚══════════════════════════════════════════════╝
`;

  // Dicas e easter eggs
  const hints = `
%c  🎮 EASTER EGGS DISPONÍVEIS:
%c
  ↑↑↓↓←→←→BA  → Konami Code (experimente!)
  7 cliques    → Clique 7x no meu nome no Header
  ?            → Pressione "?" para surpresas

%c  💡 REFERÊNCIAS GEEK:
%c
  🍥 Naruto    → "Believe it!"
  🏴‍☠️ One Piece → "O tesouro? Pode pegar se quiser..."
  🐉 Skyrim    → "Fus Ro Dah!"
  🍊 Crash     → "Woah!"
  🥚 Digimon   → "Digivolve!"

%c  📧 Quer conversar?
%c     vilson.neto57@gmail.com
     linkedin.com/in/vilson-neto/
`;

  // Citação final
  const quote = `
%c  ════════════════════════════════════════════════
%c
  "Qualquer tecnologia suficientemente avançada
   é indistinguível de magia."

                        — Arthur C. Clarke
%c
  ════════════════════════════════════════════════
`;

  // Exibir no console
  console.log(
    asciiArt,
    'color: #39FF14; font-family: monospace; font-size: 10px; font-weight: bold;',
    'color: #00FFFF; font-family: monospace;'
  );

  console.log(
    hints,
    'color: #FF2E97; font-weight: bold;',
    'color: #E2EEEC;',
    'color: #FFD700; font-weight: bold;',
    'color: #E2EEEC;',
    'color: #5A7BB8; font-weight: bold;',
    'color: #00FFFF;'
  );

  console.log(
    quote,
    'color: #39FF14;',
    'color: #868E96; font-style: italic;',
    'color: #39FF14;'
  );

  // Dica periódica
  const geekMessages = [
    { text: '🎮 Psst... você conhece o Konami Code?', color: '#FF2E97' },
    { text: '📚 Um verdadeiro dev também é bibliotecário de código.', color: '#5A7BB8' },
    { text: '🍥 Dattebayo! Tente ↑↑↓↓←→←→BA', color: '#FF6B35' },
    { text: '🐉 Fus Ro Dah! (ou só digite o Konami Code)', color: '#00FFFF' },
    { text: '🏴‍☠️ O One Piece existe... escondido neste site!', color: '#FFD700' },
  ];

  // Mostrar dica aleatória após 30 segundos
  setTimeout(() => {
    const randomMsg = geekMessages[Math.floor(Math.random() * geekMessages.length)];
    console.log(
      `%c${randomMsg.text}`,
      `color: ${randomMsg.color}; font-size: 14px; font-weight: bold;`
    );
  }, 30000);

  // Outra dica após 2 minutos
  setTimeout(() => {
    console.log(
      '%c🎯 Você ainda está aqui? Que tal explorar os easter eggs?',
      'color: #39FF14; font-size: 12px;'
    );
  }, 120000);
};

// Função para comando secreto no console
export const registerConsoleCommands = () => {
  if (typeof window === 'undefined') return;

  // Adicionar comando global
  (window as unknown as { vilson: () => void }).vilson = () => {
    console.log(
      '%c👋 Oi! Você me encontrou!',
      'color: #00FFFF; font-size: 16px; font-weight: bold;'
    );
    console.log(
      '%c📧 vilson.neto57@gmail.com',
      'color: #39FF14; font-size: 14px;'
    );
    console.log(
      '%c💼 linkedin.com/in/vilson-neto/',
      'color: #5A7BB8; font-size: 14px;'
    );
  };

  (window as unknown as { konamiHint: () => void }).konamiHint = () => {
    console.log(
      '%c🎮 DICA: ↑ ↑ ↓ ↓ ← → ← → B A',
      'color: #FF2E97; font-size: 18px; font-weight: bold;'
    );
  };
};
