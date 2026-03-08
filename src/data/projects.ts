import { projectData } from "@/schemas/project.schema";

export const projects:projectData[] = [
    {
        id: 7,
        title: "tributos-br",
        description: "Motor de cálculo tributário brasileiro com precisão decimal arbitrária.",
        resume: "Biblioteca npm de produção para cálculos fiscais brasileiros (ICMS, IPI, ST, DIFAL, CBS, IBS) com aritmética de precisão arbitrária, zero dependências e audit trail em cada operação. Resolve o problema de drift de centavos que causa rejeições na SEFAZ.",
        stack: ["TypeScript", "Vitest", "tsup", "GitHub Actions", "Changesets", "Codecov"],
        image: "https://i.imgur.com/placeholder.png",
        deploy: "https://www.npmjs.com/package/tributos-br",
        github: "https://github.com/vilsonneto/tributos-br",
        context: "JavaScript usa IEEE 754 (ponto flutuante), causando erros silenciosos em cálculos fiscais — 1.064 × 39680 retorna 42219.520000000004 em vez de 42219.52. A SEFAZ rejeita NF-e com erros 629/630 quando há divergência de centavos. ERPs menores não implementam DIFAL base dupla (LC 190/2022) nem FECOP na MVA ajustada, gerando diferenças reais de ~4pp em estados como RJ, MG e CE.",
        role: [
            "Projetei e implementei motor de aritmética decimal em strings, sem nunca passar por IEEE 754",
            "Desenvolvi 7 calculadoras tributárias cobrindo ICMS, IPI, ST (5 cenários), DIFAL, MVA ajustada, CBS e IBS",
            "Implementei audit trail automático — cada cálculo retorna histórico completo de etapas com fórmula e valor",
            "Configurei CI/CD com GitHub Actions (matrix Node 20/22/24), Codecov e release automático via Changesets",
            "Publiquei no npm com dual entry-point (ESM + CJS) e provenance verificável"
        ],
        technologies: [
            {
                name: "TypeScript (strict mode)",
                reason: "noUncheckedIndexedAccess + explicit-function-return-type para máxima segurança em lógica fiscal"
            },
            {
                name: "Aritmética em strings",
                reason: "Precisão arbitrária sem IEEE 754 — operações em dígitos puros eliminam drift de centavos"
            },
            {
                name: "Vitest + 95% coverage",
                reason: "265+ testes com threshold enforçado — erros em cálculos fiscais significam prejuízo financeiro"
            },
            {
                name: "tsup (ESM + CJS)",
                reason: "Dual build com .d.ts e .d.cts para compatibilidade com qualquer bundler ou runtime"
            }
        ],
        results: [
            "Biblioteca publicada no npm com zero dependências e precisão decimal arbitrária",
            "7 calculadoras cobrindo os principais tributos brasileiros incluindo reforma tributária (CBS/IBS)",
            "265+ testes com 95% de cobertura enforçada em statements, branches, functions e lines",
            "Audit trail em cada operação permite rastrear exatamente onde divergências ocorrem",
            "CI com matrix testing (Node 20/22/24) garante compatibilidade em todas as versões LTS"
        ]
    },
    {
        id: 8,
        title: "VersoTech — Plataformas B2B",
        description: "4 plataformas corporativas: chat em tempo real, e-commerce fiscal, admin e automação comercial.",
        resume: "Atuação como referência técnica frontend em 4 plataformas B2B simultâneas: chat com comunicação em tempo real, e-commerce com cálculos tributários, sistema administrativo com comissões dinâmicas e suite de automação comercial com dashboards analíticos.",
        stack: ["Next.js", "React", "TypeScript", "Vue.js", "Redux Toolkit", "WebSocket", "Jest", "Recharts"],
        image: "https://i.imgur.com/placeholder.png",
        deploy: "",
        github: "",
        context: "Plataformas B2B brasileiras enfrentam desafios técnicos específicos no frontend: sincronização de estado em tempo real com WebSocket, cálculos fiscais que precisam de precisão decimal (ICMS, IPI, ST), formulários multi-step com regras de negócio complexas, e dashboards que consolidam dados de múltiplas fontes. Cada plataforma tem stack e domínio próprios, exigindo adaptação constante.",
        role: [
            "Chat: arquitetura WebSocket centralizada com reconexão automática e merge inteligente que eliminou duplicatas entre API e canal em tempo real",
            "E-commerce: motor de cálculos fiscais (ICMS, IPI, ST) com 95% de cobertura de testes e integração PIX com validação em tempo real",
            "Admin: módulo de Comissão Dinâmica com wizard multi-step e biblioteca de componentes reutilizáveis que economizou ~500 linhas duplicadas",
            "Automação: sistema de agendas comerciais, calculadora de preços com regras de desconto e dashboards analíticos com Recharts",
            "Transversal: gestão de 54+ releases com estabilidade em produção"
        ],
        technologies: [
            {
                name: "Next.js + React + TypeScript",
                reason: "SSR/SSG para performance em e-commerce, tipagem estrita para cálculos fiscais onde erro = prejuízo"
            },
            {
                name: "Redux Toolkit + WebSocket",
                reason: "Estado centralizado com sincronização em tempo real para chat e pagamentos PIX"
            },
            {
                name: "Vue.js 2/3",
                reason: "Sistema administrativo legado com migração gradual — adaptação a stack existente sem reescrever"
            },
            {
                name: "Jest + Cypress",
                reason: "95% de cobertura nos cálculos fiscais — testes são a única garantia de que centavos não divergem"
            }
        ],
        results: [
            "Eliminação de duplicatas em mensagens de chat via merge inteligente entre API e WebSocket",
            "Motor fiscal com 95% de cobertura de testes, garantindo precisão em 5 cenários tributários",
            "Economia de ~500 linhas de código duplicado através de componentização no sistema administrativo",
            "54+ releases gerenciadas com estabilidade em produção nas 4 plataformas",
            "Promovido de Junior para Pleno em 6 meses pela atuação simultânea nos 4 projetos"
        ]
    }
]