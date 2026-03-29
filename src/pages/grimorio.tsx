import { useState, type FormEvent } from "react";
import Head from "next/head";

const GRIMORIO_KEY = process.env.NEXT_PUBLIC_GRIMORIO_KEY ?? "";

const SCHOOLS = [
  {
    id: "arcana",
    name: "Arcana Primordial",
    icon: "✦",
    tier: "Fundação",
    color: "#c9a0ff",
    glow: "#7b2ff2",
    techMap: "Programação & Lógica",
    unlocked: true,
    xp: 85,
    rank: "Adepto",
    rankIndex: 1,
    ranks: ["Aprendiz", "Adepto", "Archon"],
    description:
      "A língua antiga que dá forma a toda magia. Vilson domina TypeScript e JavaScript como línguas nativas — suas runas ressoam com precisão decimal arbitrária e cobertura de 95% nos encantamentos fiscais do tributos-br.",
    spells: [
      { name: "Runas de TypeScript", desc: "Sua língua principal — tipagem estrita como armadura", learned: true },
      { name: "Glifos de JavaScript", desc: "A escrita viva que anima tudo que toca", learned: true },
      { name: "Precisão Arbitrária", desc: "Cálculos fiscais com zero margem de erro", learned: true },
      { name: "Sigilos de C", desc: "A magia ancestral, crua e poderosa", learned: false },
    ],
    evidence: "tributos-br (zero deps, precisão decimal), 183+ releases, TypeScript em todos os projetos",
  },
  {
    id: "illusion",
    name: "Ilusionismo",
    icon: "◈",
    tier: "Manifestação",
    color: "#ff79c6",
    glow: "#ff2d95",
    techMap: "Frontend & Interface",
    unlocked: true,
    xp: 95,
    rank: "Arqui-Ilusionista",
    rankIndex: 2,
    ranks: ["Miragem", "Fantasma", "Arqui-Ilusionista"],
    description:
      "A escola mestra de Vilson. Cinco plataformas B2B corporativas, 300+ devs formados como instrutor, componentização que cortou 30% de código duplicado. Suas ilusões não apenas encantam — elas operam sistemas de missão crítica.",
    spells: [
      { name: "Encanto de React", desc: "Sua arma principal — 5 plataformas em produção", learned: true },
      { name: "Portal Next.js", desc: "SSR e SSG como passagens entre dimensões", learned: true },
      { name: "Miragem de Vue.js", desc: "Segunda escola de ilusão dominada", learned: true },
      { name: "Véus de Tailwind/SCSS", desc: "Styled Components, MUI — múltiplas técnicas de véu", learned: true },
      { name: "Testes Visionários", desc: "Jest, Vitest, Cypress, Playwright — validar a ilusão", learned: true },
      { name: "Storybook Arcano", desc: "Catalogar feitiços visuais para reutilização", learned: true },
    ],
    evidence: "VersoTech (5 plataformas B2B), instrutor 300+ devs, Kenzie Academy, tributos-br, Guigo",
  },
  {
    id: "summoning",
    name: "Invocação",
    icon: "⬡",
    tier: "Manifestação",
    color: "#8be9fd",
    glow: "#00b4d8",
    techMap: "Backend & Servidor",
    unlocked: true,
    xp: 45,
    rank: "Conjurador",
    rankIndex: 0,
    ranks: ["Conjurador", "Vinculador", "Senhor dos Pactos"],
    description:
      "Vilson invoca APIs REST com fluência e domina a comunicação com servidores. O projeto Guigo mostra incursões além do frontend — um bot WhatsApp com Turborepo e Supabase. O caminho de Vinculador se abre.",
    spells: [
      { name: "Portal de REST APIs", desc: "Contratos sagrados com Axios — dominado", learned: true },
      { name: "Servo de Next.js API", desc: "Rotas de API no Guigo e projetos Verso", learned: true },
      { name: "Guardião de Auth", desc: "Permissões granulares no VersoCommerce", learned: true },
      { name: "Arquitetura Planar", desc: "Orquestrar múltiplos servos em harmonia", learned: false },
    ],
    evidence: "REST APIs em todos os projetos, Next.js API routes, subcolaboradores com permissões granulares",
  },
  {
    id: "crystal",
    name: "Cristalomancia",
    icon: "◇",
    tier: "Sustentação",
    color: "#50fa7b",
    glow: "#00cc55",
    techMap: "Banco de Dados",
    unlocked: true,
    xp: 30,
    rank: "Lapidário",
    rankIndex: 0,
    ranks: ["Lapidário", "Geomante", "Oráculo Cristalino"],
    description:
      "Cristais iniciais formados com Supabase no projeto Guigo. Vilson sabe armazenar e consultar — mas modelagem avançada e otimização são os próximos veios a explorar para subir a Geomante.",
    spells: [
      { name: "Ágata Supabase", desc: "Postgres gerenciado no Guigo — primeiros cristais", learned: true },
      { name: "Consulta Ressonante", desc: "Queries básicas e integração com frontend", learned: true },
      { name: "Cristais SQL Puros", desc: "PostgreSQL e MySQL avançado — veio a ser explorado", learned: false },
      { name: "Modelagem de Veios", desc: "Arquitetura de dados complexa", learned: false },
    ],
    evidence: "Supabase no projeto Guigo, integração com dados em plataformas VersoTech",
  },
  {
    id: "alchemy",
    name: "Alquimia",
    icon: "⬢",
    tier: "Sustentação",
    color: "#ffb86c",
    glow: "#e67e00",
    techMap: "Infraestrutura & DevOps",
    unlocked: true,
    xp: 40,
    rank: "Destilador",
    rankIndex: 0,
    ranks: ["Destilador", "Transmutador", "Grão-Alquimista"],
    description:
      "Vilson opera pipelines de CI com GitHub Actions no tributos-br e gerencia monorepos com Turborepo. 183+ releases em produção exigem disciplina alquímica. Docker e cloud são os próximos fornos a dominar.",
    spells: [
      { name: "Pipeline de GitHub Actions", desc: "CI/CD no tributos-br — testes automatizados", learned: true },
      { name: "Caldeirão Turborepo", desc: "Monorepo com 4 apps React no Verso Apps", learned: true },
      { name: "Forja Vercel", desc: "Deploy contínuo dos projetos pessoais", learned: true },
      { name: "Frasco de Docker", desc: "Containerização — próximo nível", learned: false },
      { name: "Nuvem Etérea", desc: "AWS e GCP — reinos a conquistar", learned: false },
    ],
    evidence: "GitHub Actions, Turborepo, 183+ releases, Vercel deploys, tsup builds",
  },
  {
    id: "telepathy",
    name: "Telepatia",
    icon: "◎",
    tier: "Conexão",
    color: "#bd93f9",
    glow: "#8855dd",
    techMap: "Redes & Tempo Real",
    unlocked: true,
    xp: 65,
    rank: "Elo",
    rankIndex: 1,
    ranks: ["Ouvinte", "Elo", "Mente-Mestra"],
    description:
      "Poucos ilusionistas dominam telepatia como Vilson. WebSocket com reconexão automática no VersoChat, Pusher.js para canais em tempo real, merge inteligente que eliminou 95% de duplicatas entre API e canal live. Um verdadeiro Elo.",
    spells: [
      { name: "Vínculo WebSocket", desc: "Arquitetura real-time no VersoChat — maestria", learned: true },
      { name: "Canal Pusher.js", desc: "Eventos em tempo real entre dimensões", learned: true },
      { name: "Reconexão Automática", desc: "Vínculos que se auto-reparam ao cair", learned: true },
      { name: "Merge Inteligente", desc: "Eliminar 95% de duplicatas entre canais", learned: true },
      { name: "Raiz DNS/TCP", desc: "Fundamentos profundos de rede — a explorar", learned: false },
    ],
    evidence: "VersoChat WebSocket, Pusher.js, reconexão automática, merge API/realtime",
  },
  {
    id: "abjuration",
    name: "Abjuração",
    icon: "⛊",
    tier: "Conexão",
    color: "#ff5555",
    glow: "#cc0000",
    techMap: "Segurança",
    unlocked: false,
    xp: 15,
    rank: "—",
    rankIndex: -1,
    ranks: ["Sentinela", "Guardião", "Paladino Arcano"],
    description:
      "Vilson aplica validação com Zod e permissões granulares — fragmentos de abjuração. Mas esta escola ainda aguarda um estudo dedicado: criptografia, OWASP, pentest. O castelo tem muralhas parciais.",
    spells: [
      { name: "Selos de Zod", desc: "Validação de dados — primeira barreira", learned: true },
      { name: "Permissões Granulares", desc: "Controle de acesso no VersoCommerce", learned: true },
      { name: "Escudo Criptográfico", desc: "Cifrar segredos — escola fechada", learned: false },
      { name: "Barreira OWASP", desc: "As 10 pragas — escola fechada", learned: false },
    ],
    evidence: "Zod validation, subcolaboradores com permissões no VersoCommerce",
  },
  {
    id: "golemancy",
    name: "Golemancia",
    icon: "⬣",
    tier: "Transcendência",
    color: "#f1fa8c",
    glow: "#bbc400",
    techMap: "Hardware & Embarcados",
    unlocked: false,
    xp: 0,
    rank: "—",
    rankIndex: -1,
    ranks: ["Moldador", "Animador", "Arqui-Golemante"],
    description:
      "Terra inexplorada. Nenhum golem foi animado ainda. Arduino, ESP32 e IoT aguardam o primeiro sopro de vida. Uma escola inteira por descobrir.",
    spells: [
      { name: "Runa de Arduino", desc: "O primeiro sopro — escola selada", learned: false },
      { name: "Espírito ESP32", desc: "Golems conectados — escola selada", learned: false },
      { name: "Teia IoT", desc: "Rede de golems — escola selada", learned: false },
      { name: "Eletrônica Vital", desc: "Circuitos — escola selada", learned: false },
    ],
    evidence: "Nenhuma evidência no portfólio",
  },
  {
    id: "divination",
    name: "Divinação",
    icon: "☉",
    tier: "Transcendência",
    color: "#f8f8f2",
    glow: "#ffffff",
    techMap: "IA & Dados",
    unlocked: false,
    xp: 5,
    rank: "—",
    rankIndex: -1,
    ranks: ["Vidente", "Profeta", "Archon da Providência"],
    description:
      "Os oráculos ainda estão silenciosos. Machine learning, redes neurais e análise de dados são territórios além do véu. Recharts demonstra familiaridade com visualização — uma centelha de potencial divinatório.",
    spells: [
      { name: "Visão de Recharts", desc: "Visualização de dados — centelha inicial", learned: true },
      { name: "Oráculo de ML", desc: "Modelos preditivos — escola selada", learned: false },
      { name: "Rede Neural Profunda", desc: "Deep learning — escola selada", learned: false },
      { name: "Profecia Generativa", desc: "LLMs — escola selada", learned: false },
    ],
    evidence: "Recharts no stack, dashboards analíticos no Verso Apps",
  },
];

const TIERS = ["Fundação", "Manifestação", "Sustentação", "Conexão", "Transcendência"] as const;
const TIER_LABELS: Record<string, string> = {
  Fundação: "Nível I — Fundação",
  Manifestação: "Nível II — Manifestação",
  Sustentação: "Nível III — Sustentação",
  Conexão: "Nível IV — Conexão",
  Transcendência: "Nível V — Transcendência",
};

function XPBar({ xp, color, glow }: { xp: number; color: string; glow: string }) {
  return (
    <div
      style={{
        width: "100%",
        height: 6,
        background: "rgba(255,255,255,0.06)",
        borderRadius: 3,
        overflow: "hidden",
        marginTop: 6,
      }}
    >
      <div
        style={{
          width: `${xp}%`,
          height: "100%",
          background: `linear-gradient(90deg, ${glow}, ${color})`,
          borderRadius: 3,
          transition: "width 1s ease",
          boxShadow: `0 0 8px ${glow}66`,
        }}
      />
    </div>
  );
}

function SpellCheck({ learned, color }: { learned: boolean; color: string }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 18,
        height: 18,
        borderRadius: "50%",
        fontSize: 10,
        flexShrink: 0,
        border: `1.5px solid ${learned ? color : "rgba(255,255,255,0.15)"}`,
        color: learned ? color : "rgba(255,255,255,0.15)",
        background: learned ? `${color}15` : "transparent",
      }}
    >
      {learned ? "✦" : "○"}
    </span>
  );
}

function SealedGate() {
  const [key, setKey] = useState("");
  const [error, setError] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (key === GRIMORIO_KEY) {
      sessionStorage.setItem("grimorio_unlocked", "1");
      window.location.reload();
    } else {
      setError(true);
      setTimeout(() => setError(false), 1500);
    }
  }

  return (
    <div style={styles.container}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700;900&family=MedievalSharp&display=swap');
        @keyframes runeRotate { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes pulse { 0%,100%{opacity:0.4} 50%{opacity:0.8} }
        @keyframes shake { 0%,100%{transform:translateX(0)} 20%{transform:translateX(-8px)} 40%{transform:translateX(8px)} 60%{transform:translateX(-4px)} 80%{transform:translateX(4px)} }
      `}</style>

      <div style={styles.bgRune}>
        <div
          style={{
            width: 400,
            height: 400,
            border: "1px solid rgba(201,160,255,0.06)",
            borderRadius: "50%",
            animation: "runeRotate 120s linear infinite",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ width: 280, height: 280, border: "1px solid rgba(201,160,255,0.04)", borderRadius: "50%" }} />
        </div>
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          padding: 20,
        }}
      >
        <div style={{ fontSize: 64, animation: "pulse 3s ease-in-out infinite", marginBottom: 24 }}>⛊</div>
        <h1
          style={{
            fontFamily: "'Cinzel Decorative',cursive",
            fontSize: 22,
            color: "#c9a0ff",
            marginBottom: 8,
            letterSpacing: 2,
            textAlign: "center",
          }}
        >
          Escola Selada
        </h1>
        <p
          style={{
            fontFamily: "'MedievalSharp',cursive",
            fontSize: 14,
            color: "rgba(255,255,255,0.4)",
            marginBottom: 32,
            textAlign: "center",
          }}
        >
          Este grimório exige uma chave arcana para ser aberto.
        </p>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
          <input
            type="password"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            placeholder="Insira a chave..."
            autoFocus
            style={{
              width: 260,
              padding: "10px 16px",
              borderRadius: 8,
              border: `1.5px solid ${error ? "#ff5555" : "rgba(201,160,255,0.25)"}`,
              background: "rgba(0,0,0,0.4)",
              color: "#f8f8f2",
              fontFamily: "'MedievalSharp',cursive",
              fontSize: 14,
              outline: "none",
              textAlign: "center",
              animation: error ? "shake 0.4s ease" : "none",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "8px 28px",
              borderRadius: 8,
              border: "1px solid rgba(201,160,255,0.3)",
              background: "rgba(201,160,255,0.08)",
              color: "#c9a0ff",
              fontFamily: "'MedievalSharp',cursive",
              fontSize: 14,
              cursor: "pointer",
              letterSpacing: 1,
            }}
          >
            Abrir Grimório
          </button>
          {error && (
            <span style={{ fontFamily: "'MedievalSharp',cursive", fontSize: 12, color: "#ff5555" }}>
              Chave incorreta. O grimório permanece selado.
            </span>
          )}
        </form>
      </div>
    </div>
  );
}

export default function GrimorioPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const [unlocked, setUnlocked] = useState(false);

  // Verificar se já desbloqueou na sessão
  useState(() => {
    if (typeof window !== "undefined") {
      setUnlocked(sessionStorage.getItem("grimorio_unlocked") === "1");
    }
  });

  if (!unlocked) {
    return (
      <>
        <Head>
          <title>??? | Vilson Padilha</title>
          <meta name="robots" content="noindex,nofollow" />
        </Head>
        <SealedGate />
      </>
    );
  }

  const school = selected ? SCHOOLS.find((s) => s.id === selected) ?? null : null;
  const totalXP = Math.round(SCHOOLS.reduce((a, s) => a + s.xp, 0) / SCHOOLS.length);
  const unlockedCount = SCHOOLS.filter((s) => s.unlocked).length;
  const learnedSpells = SCHOOLS.reduce((a, s) => a + s.spells.filter((sp) => sp.learned).length, 0);
  const totalSpells = SCHOOLS.reduce((a, s) => a + s.spells.length, 0);

  return (
    <>
      <Head>
        <title>Grimório | Vilson Padilha</title>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <div style={styles.container}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700;900&family=Crimson+Text:ital,wght@0,400;0,600;1,400&family=MedievalSharp&display=swap');

          @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
          @keyframes fadeIn { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
          @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
          @keyframes runeRotate { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }

          .school-node { cursor:pointer; transition:all 0.3s ease; }
          .school-node:hover { transform:scale(1.12); z-index:10; }
          .school-node:hover .node-glow { opacity:0.9 !important; }

          .spell-row { transition:all 0.25s ease; }
          .spell-row:hover { transform:translateX(6px); background:rgba(255,255,255,0.04) !important; }

          .back-btn {
            cursor:pointer; transition:all 0.2s ease; border:none;
            background:rgba(255,255,255,0.06); color:rgba(255,255,255,0.6);
            font-family:'MedievalSharp',cursive; padding:8px 18px;
            border-radius:6px; font-size:14px;
          }
          .back-btn:hover { background:rgba(255,255,255,0.12); color:rgba(255,255,255,0.9); }

          .tier-label {
            font-family:'MedievalSharp',cursive; letter-spacing:2px;
            text-transform:uppercase; font-size:11px;
            color:rgba(255,255,255,0.35); padding:4px 0;
          }

          .grimoire-scroll::-webkit-scrollbar { width:6px; }
          .grimoire-scroll::-webkit-scrollbar-track { background:rgba(0,0,0,0.2); }
          .grimoire-scroll::-webkit-scrollbar-thumb { background:rgba(201,160,255,0.3); border-radius:3px; }

          .evidence-tag {
            display:inline-block; padding:3px 10px; margin:3px 4px;
            border-radius:20px; font-size:11px;
            font-family:'Crimson Text',serif;
            background:rgba(255,255,255,0.04);
            border:1px solid rgba(255,255,255,0.08);
            color:rgba(255,255,255,0.5);
          }

          .stat-card {
            text-align:center; padding:12px 8px;
            background:rgba(255,255,255,0.03);
            border-radius:8px; border:1px solid rgba(255,255,255,0.05);
          }
        `}</style>

        {/* BG rune */}
        <div style={styles.bgRune}>
          <div
            style={{
              width: 400,
              height: 400,
              border: "1px solid rgba(201,160,255,0.06)",
              borderRadius: "50%",
              animation: "runeRotate 120s linear infinite",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ width: 280, height: 280, border: "1px solid rgba(201,160,255,0.04)", borderRadius: "50%" }} />
          </div>
        </div>

        {!school ? (
          <div style={styles.treeView} className="grimoire-scroll">
            {/* Header */}
            <div style={styles.header}>
              <div
                style={{
                  fontSize: 11,
                  letterSpacing: 6,
                  textTransform: "uppercase",
                  color: "rgba(201,160,255,0.5)",
                  fontFamily: "'MedievalSharp',cursive",
                  marginBottom: 6,
                }}
              >
                Grimório Pessoal
              </div>
              <h1 style={styles.title}>Vilson Padilha</h1>
              <p
                style={{
                  fontFamily: "'MedievalSharp',cursive",
                  fontSize: 13,
                  color: "rgba(255,121,198,0.7)",
                  margin: "2px 0 12px",
                  letterSpacing: 1,
                }}
              >
                Arqui-Ilusionista · Frontend Developer
              </p>
            </div>

            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 24 }}>
              <div className="stat-card">
                <div style={{ fontSize: 22, fontFamily: "'Cinzel Decorative',cursive", color: "#c9a0ff" }}>
                  {unlockedCount}/9
                </div>
                <div
                  style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", fontFamily: "'MedievalSharp',cursive", marginTop: 2 }}
                >
                  Escolas
                </div>
              </div>
              <div className="stat-card">
                <div style={{ fontSize: 22, fontFamily: "'Cinzel Decorative',cursive", color: "#ff79c6" }}>
                  {learnedSpells}/{totalSpells}
                </div>
                <div
                  style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", fontFamily: "'MedievalSharp',cursive", marginTop: 2 }}
                >
                  Feitiços
                </div>
              </div>
              <div className="stat-card">
                <div style={{ fontSize: 22, fontFamily: "'Cinzel Decorative',cursive", color: "#8be9fd" }}>{totalXP}%</div>
                <div
                  style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", fontFamily: "'MedievalSharp',cursive", marginTop: 2 }}
                >
                  XP Geral
                </div>
              </div>
            </div>

            {/* Global XP */}
            <div style={styles.progressBar}>
              <div style={{ ...styles.progressFill, width: `${totalXP}%` }} />
            </div>

            {/* Tree */}
            <div style={styles.tiersContainer}>
              {TIERS.map((tier) => {
                const tierSchools = SCHOOLS.filter((s) => s.tier === tier);
                return (
                  <div key={tier} style={styles.tierRow}>
                    <div className="tier-label">{TIER_LABELS[tier]}</div>
                    <div style={styles.nodesRow}>
                      {tierSchools.map((s) => (
                        <div
                          key={s.id}
                          className="school-node"
                          onClick={() => setSelected(s.id)}
                          style={{ ...styles.node, opacity: s.unlocked ? 1 : 0.35 }}
                        >
                          <div
                            className="node-glow"
                            style={{
                              position: "absolute",
                              inset: -8,
                              borderRadius: "50%",
                              background: `radial-gradient(circle,${s.glow}33 0%,transparent 70%)`,
                              opacity: s.unlocked ? 0.6 : 0,
                              transition: "opacity 0.3s",
                              pointerEvents: "none",
                            }}
                          />
                          <div
                            style={{
                              width: 56,
                              height: 56,
                              borderRadius: "50%",
                              border: `2px solid ${s.unlocked ? s.color : "rgba(255,255,255,0.15)"}`,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: 22,
                              background: s.unlocked
                                ? `radial-gradient(circle,${s.glow}22 0%,rgba(0,0,0,0.4) 100%)`
                                : "rgba(0,0,0,0.3)",
                              animation: s.unlocked ? "float 4s ease-in-out infinite" : "none",
                              position: "relative",
                              zIndex: 2,
                            }}
                          >
                            {s.unlocked ? s.icon : "?"}
                          </div>
                          <div
                            style={{
                              marginTop: 8,
                              fontSize: 12,
                              fontFamily: "'MedievalSharp',cursive",
                              color: s.unlocked ? s.color : "rgba(255,255,255,0.3)",
                              textAlign: "center",
                              maxWidth: 90,
                              lineHeight: 1.2,
                            }}
                          >
                            {s.name}
                          </div>
                          {s.unlocked && (
                            <div style={{ width: "100%", maxWidth: 80, marginTop: 4 }}>
                              <XPBar xp={s.xp} color={s.color} glow={s.glow} />
                              <div
                                style={{
                                  fontSize: 9,
                                  textAlign: "center",
                                  marginTop: 3,
                                  color: "rgba(255,255,255,0.35)",
                                  fontFamily: "'Crimson Text',serif",
                                }}
                              >
                                {s.xp}% · {s.rank}
                              </div>
                            </div>
                          )}
                          {!s.unlocked && (
                            <div
                              style={{
                                fontSize: 10,
                                marginTop: 4,
                                color: "rgba(255,255,255,0.2)",
                                fontFamily: "'Crimson Text',serif",
                                fontStyle: "italic",
                              }}
                            >
                              Selada
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Legend */}
            <div
              style={{
                textAlign: "center",
                marginTop: 32,
                fontSize: 12,
                color: "rgba(255,255,255,0.25)",
                fontFamily: "'Crimson Text',serif",
                fontStyle: "italic",
                lineHeight: 1.8,
              }}
            >
              Dados extraídos de vilsonpadilha.vercel.app
              <br />
              Toque em uma escola para ver seus feitiços
            </div>
          </div>
        ) : (
          /* ---- DETAIL VIEW ---- */
          <div style={styles.detailView} className="grimoire-scroll">
            <div style={{ animation: "fadeIn 0.5s ease" }}>
              <button className="back-btn" onClick={() => setSelected(null)}>
                ← Voltar ao Grimório
              </button>

              <div style={{ textAlign: "center", marginTop: 20 }}>
                <div
                  style={{
                    fontSize: 48,
                    animation: "float 3s ease-in-out infinite",
                    filter: `drop-shadow(0 0 20px ${school.glow})`,
                    opacity: school.unlocked ? 1 : 0.3,
                  }}
                >
                  {school.icon}
                </div>
                <h2
                  style={{
                    fontFamily: "'Cinzel Decorative',cursive",
                    fontSize: 24,
                    color: school.color,
                    margin: "12px 0 4px",
                    letterSpacing: 2,
                  }}
                >
                  {school.name}
                </h2>
                <div
                  style={{
                    fontSize: 12,
                    color: "rgba(255,255,255,0.4)",
                    fontFamily: "'MedievalSharp',cursive",
                    letterSpacing: 3,
                    textTransform: "uppercase",
                  }}
                >
                  {school.tier} · {school.techMap}
                </div>

                {/* Rank badge */}
                {school.unlocked && (
                  <div
                    style={{
                      display: "inline-block",
                      marginTop: 12,
                      padding: "6px 20px",
                      borderRadius: 20,
                      border: `1px solid ${school.color}44`,
                      background: `${school.glow}11`,
                      fontFamily: "'MedievalSharp',cursive",
                      fontSize: 13,
                      color: school.color,
                      letterSpacing: 1,
                    }}
                  >
                    {school.rank} · {school.xp}% XP
                  </div>
                )}
                {!school.unlocked && (
                  <div
                    style={{
                      display: "inline-block",
                      marginTop: 12,
                      padding: "6px 20px",
                      borderRadius: 20,
                      border: "1px solid rgba(255,255,255,0.08)",
                      background: "rgba(255,255,255,0.03)",
                      fontFamily: "'MedievalSharp',cursive",
                      fontSize: 13,
                      color: "rgba(255,255,255,0.3)",
                      letterSpacing: 1,
                    }}
                  >
                    Escola Selada
                  </div>
                )}
              </div>

              {/* XP Bar */}
              {school.unlocked && (
                <div style={{ margin: "16px 0", padding: "0 20px" }}>
                  <XPBar xp={school.xp} color={school.color} glow={school.glow} />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: 6,
                      fontFamily: "'MedievalSharp',cursive",
                      fontSize: 10,
                      color: "rgba(255,255,255,0.3)",
                    }}
                  >
                    {school.ranks.map((r, i) => (
                      <span
                        key={r}
                        style={{
                          color: i <= school.rankIndex ? school.color : "rgba(255,255,255,0.2)",
                          fontWeight: i === school.rankIndex ? "bold" : "normal",
                        }}
                      >
                        {r}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <p style={styles.description}>{school.description}</p>

              {/* Spells */}
              <div style={styles.sectionTitle}>
                <span style={{ color: school.color }}>⟐</span> Feitiços (
                {school.spells.filter((s) => s.learned).length}/{school.spells.length})
              </div>
              <div style={styles.spellsList}>
                {school.spells.map((spell, i) => (
                  <div
                    key={i}
                    className="spell-row"
                    style={{
                      ...styles.spellItem,
                      borderLeftColor: spell.learned ? school.color : "rgba(255,255,255,0.08)",
                      opacity: spell.learned ? 1 : 0.45,
                      animation: "fadeIn 0.4s ease both",
                      animationDelay: `${i * 0.08}s`,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <SpellCheck learned={spell.learned} color={school.color} />
                      <div>
                        <div
                          style={{
                            fontFamily: "'MedievalSharp',cursive",
                            fontSize: 14,
                            color: spell.learned ? school.color : "rgba(255,255,255,0.35)",
                            marginBottom: 2,
                          }}
                        >
                          {spell.name}
                        </div>
                        <div
                          style={{
                            fontFamily: "'Crimson Text',serif",
                            fontSize: 13,
                            color: "rgba(255,255,255,0.45)",
                            fontStyle: "italic",
                          }}
                        >
                          {spell.desc}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Evidence */}
              <div style={styles.sectionTitle}>
                <span style={{ color: school.color }}>⟐</span> Provas no Portfólio
              </div>
              <div
                style={{
                  textAlign: "center",
                  padding: "8px 0 4px",
                  flexWrap: "wrap",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {school.evidence.split(", ").map((e, i) => (
                  <span key={i} className="evidence-tag">
                    {e}
                  </span>
                ))}
              </div>

              {/* Progression */}
              <div style={styles.sectionTitle}>
                <span style={{ color: school.color }}>⟐</span> Progressão
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 8,
                  padding: "14px 0 30px",
                  flexWrap: "wrap",
                }}
              >
                {school.ranks.map((r, i) => (
                  <div
                    key={r}
                    style={{
                      padding: "6px 16px",
                      borderRadius: 20,
                      fontSize: 12,
                      fontFamily: "'MedievalSharp',cursive",
                      letterSpacing: 1,
                      border: `1px solid ${i <= school.rankIndex ? school.color + "66" : "rgba(255,255,255,0.08)"}`,
                      background: i <= school.rankIndex ? `${school.glow}15` : "transparent",
                      color:
                        i === school.rankIndex
                          ? school.color
                          : i < school.rankIndex
                            ? `${school.color}88`
                            : "rgba(255,255,255,0.2)",
                      fontWeight: i === school.rankIndex ? "bold" : "normal",
                    }}
                  >
                    {i < school.rankIndex ? "✦ " : i === school.rankIndex ? "◈ " : "○ "}
                    {r}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    minHeight: "100vh",
    background: "radial-gradient(ellipse at 50% 20%,#15122a 0%,#0a0a12 60%,#050510 100%)",
    color: "#f8f8f2",
    fontFamily: "'Crimson Text',serif",
    position: "relative",
    overflow: "hidden",
  },
  bgRune: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    pointerEvents: "none",
    zIndex: 0,
    opacity: 0.5,
  },
  treeView: {
    position: "relative",
    zIndex: 1,
    maxWidth: 600,
    margin: "0 auto",
    padding: "36px 20px 60px",
    overflowY: "auto",
    maxHeight: "100vh",
  },
  header: { textAlign: "center", marginBottom: 20 },
  title: {
    fontFamily: "'Cinzel Decorative',cursive",
    fontSize: 28,
    fontWeight: 900,
    background: "linear-gradient(135deg,#c9a0ff 0%,#ff79c6 50%,#8be9fd 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    margin: "0 0 0",
    lineHeight: 1.2,
  },
  progressBar: {
    width: "100%",
    height: 3,
    background: "rgba(255,255,255,0.06)",
    borderRadius: 2,
    marginBottom: 28,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    background: "linear-gradient(90deg,#c9a0ff,#ff79c6,#8be9fd)",
    borderRadius: 2,
    transition: "width 0.6s ease",
  },
  tiersContainer: { display: "flex", flexDirection: "column", gap: 26 },
  tierRow: { display: "flex", flexDirection: "column", alignItems: "center", gap: 12 },
  nodesRow: { display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap" },
  node: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    padding: 8,
    minWidth: 90,
  },
  detailView: {
    position: "relative",
    zIndex: 1,
    maxWidth: 520,
    margin: "0 auto",
    padding: "30px 20px",
    overflowY: "auto",
    maxHeight: "100vh",
  },
  description: {
    fontSize: 14,
    lineHeight: 1.8,
    color: "rgba(255,255,255,0.6)",
    textAlign: "center",
    margin: "16px 0",
    fontStyle: "italic",
    padding: "0 10px",
  },
  sectionTitle: {
    fontFamily: "'MedievalSharp',cursive",
    fontSize: 15,
    color: "rgba(255,255,255,0.7)",
    letterSpacing: 2,
    textTransform: "uppercase",
    margin: "24px 0 12px",
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  spellsList: { display: "flex", flexDirection: "column", gap: 6 },
  spellItem: {
    padding: "10px 14px",
    borderLeft: "2px solid",
    background: "rgba(255,255,255,0.02)",
    borderRadius: "0 6px 6px 0",
  },
};
