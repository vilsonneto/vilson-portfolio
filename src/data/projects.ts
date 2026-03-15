import { projectData } from "@/schemas/project.schema";

export const projects:projectData[] = [
    {
        id: 7,
        title: "tributos-br",
        description: "Motor de cálculo tributário brasileiro com precisão decimal arbitrária.",
        resume: "Biblioteca npm de produção para cálculos fiscais brasileiros (ICMS, IPI, ST, DIFAL, MVA, CBS, IBS, PIS, COFINS) com aritmética de precisão arbitrária, zero dependências e audit trail em cada operação. Resolve o problema de drift de centavos que causa rejeições na SEFAZ.",
        stack: ["TypeScript", "Vitest", "tsup", "GitHub Actions", "Changesets", "Codecov"],
        image: "https://i.imgur.com/placeholder.png",
        deploy: "https://www.npmjs.com/package/tributos-br",
        github: "https://github.com/vilsonneto/tributos-br",
        context: "JavaScript usa IEEE 754 (ponto flutuante), causando erros silenciosos em cálculos fiscais — 1.064 × 39680 retorna 42219.520000000004 em vez de 42219.52. A SEFAZ rejeita NF-e com erros 629/630 quando há divergência de centavos. ERPs menores não implementam os 3 modos de DIFAL (base única, base dupla LC 190/2022 e base reduzida CST 20) nem FECOP na MVA ajustada, gerando diferenças reais de ~4pp em estados como RJ, MG e CE.",
        role: [
            "Projetei e implementei motor de aritmética decimal em strings, sem nunca passar por IEEE 754",
            "Desenvolvi 9 calculadoras tributárias cobrindo ICMS, IPI, ST (5 cenários), DIFAL, MVA ajustada, CBS, IBS, PIS e COFINS",
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
                reason: "362+ testes com threshold enforçado — erros em cálculos fiscais significam prejuízo financeiro"
            },
            {
                name: "tsup (ESM + CJS)",
                reason: "Dual build com .d.ts e .d.cts para compatibilidade com qualquer bundler ou runtime"
            }
        ],
        results: [
            "Biblioteca publicada no npm com zero dependências e precisão decimal arbitrária",
            "9 calculadoras cobrindo os principais tributos brasileiros incluindo reforma tributária (CBS/IBS) e PIS/COFINS",
            "362+ testes com 95% de cobertura enforçada em statements, branches, functions e lines",
            "Audit trail em cada operação permite rastrear exatamente onde divergências ocorrem",
            "CI com matrix testing (Node 20/22/24) garante compatibilidade em todas as versões LTS"
        ]
    },
    {
        id: 8,
        title: "VersoTech — Plataformas B2B",
        description: "5 plataformas corporativas: e-commerce fiscal, chat em tempo real, call center, SAC e sistema administrativo.",
        resume: "Atuação como referência técnica frontend em 5 plataformas B2B simultâneas: e-commerce com cálculos tributários, chat com comunicação em tempo real, call center, SAC e sistema administrativo com comissões dinâmicas e dashboards analíticos.",
        stack: ["Next.js", "React", "TypeScript", "Vue.js", "Redux Toolkit", "WebSocket", "Jest", "Recharts"],
        image: "https://i.imgur.com/placeholder.png",
        deploy: "",
        github: "",
        context: "Plataformas B2B brasileiras enfrentam desafios técnicos específicos no frontend: sincronização de estado em tempo real via WebSocket/Socket.io, cálculos fiscais que precisam de precisão decimal (ICMS, IPI, ST), formulários multi-step com regras de negócio complexas, e dashboards que consolidam dados de múltiplas fontes. São 5 plataformas com stack e domínio próprios — React, Next.js e Vue.js coexistem — exigindo adaptação constante entre paradigmas.",
        role: [
            "Chat: arquitetura WebSocket/Socket.io com reconexão automática, merge inteligente que eliminou duplicatas entre API REST e canal em tempo real, e thresholds de cobertura por arquivo crítico",
            "E-commerce: motor de cálculos fiscais (ICMS, IPI, ST) com 95% de cobertura de testes, sistema de subcolaboradores com permissões granulares e integração PIX com validação em tempo real",
            "Admin: módulo de Comissão Dinâmica com wizard multi-step e biblioteca de componentes reutilizáveis que economizou ~500 linhas duplicadas",
            "Automação: monorepo com 4 aplicações React e shared library com 98% de cobertura, agendas comerciais, calculadora de preços e dashboards analíticos",
            "Transversal: gestão de 183+ releases com estabilidade em produção"
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
            "183+ releases gerenciadas com estabilidade em produção nas 4 plataformas",
            "Promovido de Junior para Pleno em 6 meses pela atuação simultânea nas 5 plataformas"
        ]
    },
    {
        id: 9,
        title: "Guigo",
        description: "Bot WhatsApp que calcula quanto um motorista de Uber pode gastar por dia, usando sistema de envelopes.",
        resume: "Projeto pessoal que resolve problema real: pai motorista de Uber vê saldo no banco e acha que pode gastar tudo, mas a maioria já tem dono (aluguel do carro, luz, água, emergência). Bot pergunta \"quanto fez hoje?\" e responde com o valor livre após reservar cotas para cada obrigação.",
        stack: ["TypeScript", "Next.js", "Turborepo", "Supabase", "Evolution API", "Vitest"],
        image: "https://i.imgur.com/placeholder.png",
        deploy: "",
        github: "",
        context: "Pai dirige Uber 6-7 dias por semana. Ganha ~R$370/dia bruto, mas R$225/dia já tem dono: aluguel do carro (R$800/semana), luz, água, gás, alimentação, emergência. O saldo do Nubank não mostra isso. Resultado: conta atrasada, estresse constante. O sistema de envelopes separa ANTES de gastar, dividindo cada real que entra em cotas por obrigação.",
        role: [
            "Entrevista real com o pai para mapear todas as obrigações financeiras e calcular cotas diárias de cada uma",
            "Monorepo Turborepo com 3 workspaces: bot (Node.js), admin (Next.js) e shared package com lógica de envelopes",
            "Motor de envelopes (calcularLivre) como função pura e testável que transforma receita bruta em valor livre diário",
            "WhatsApp como interface via Evolution API — zero fricção, o pai já usa 50x por dia com passageiros",
            "CI com GitHub Actions: lint, typecheck e testes em cada PR com quality gates"
        ],
        technologies: [
            {
                name: "TypeScript (strict) + Turborepo",
                reason: "Monorepo com 3 workspaces e lógica de negócio compartilhada entre bot e admin"
            },
            {
                name: "Supabase (PostgreSQL)",
                reason: "Persistência de dias, obrigações e envelopes com RLS e REST API automática"
            },
            {
                name: "Evolution API",
                reason: "Integração WhatsApp self-hosted e gratuita — o sistema não pode custar dinheiro, o objetivo é economizar"
            },
            {
                name: "Vitest + GitHub Actions",
                reason: "CI com lint, typecheck e testes em cada PR — quality gates desde o commit 1"
            }
        ],
        results: [
            "Motor de envelopes funcional que transforma receita bruta em valor livre diário com cotas por obrigação",
            "Monorepo com shared package reutilizável entre bot e admin, lógica de negócio isolada e testável",
            "CI configurado com quality gates (lint + typecheck + testes) desde o início do projeto",
            "Em desenvolvimento ativo — deploy previsto para junho/2026 com usuário real (o pai)"
        ]
    }
]