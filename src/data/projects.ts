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
        id: 3,
        title: "VersoChat",
        description: "Plataforma de comunicação em tempo real corporativa.",
        resume: "Sistema de chat em tempo real para atendimento e comunicação interna, com foco em estabilidade de conexão e gerenciamento de estado complexo.",
        stack: ["Next.js", "React", "TypeScript", "Redux Toolkit", "WebSocket"],
        image: "https://i.imgur.com/placeholder.png", // Placeholder - não usar imagem proprietária
        deploy: "", // Sem deploy público - projeto corporativo
        github: "", // Sem repositório público - código proprietário
        context: "Aplicações de chat em produção enfrentam desafios técnicos específicos: instabilidade em conexões WebSocket, duplicação de mensagens, conflitos de estado entre múltiplas abas, e experiência inconsistente após falhas de rede. Esses problemas impactavam a confiança do usuário e a eficiência operacional.",
        role: [
            "Implementei arquitetura de cliente WebSocket centralizado com reconexão automática",
            "Estruturei Redux Store modular para gerenciar estado complexo e sincronização em tempo real",
            "Desenvolvi merge inteligente de mensagens para prevenir duplicatas entre API e WebSocket",
            "Criei feedback visual consistente sobre estado de conexão e tratamento de cenários fora do happy path",
            "Componentizei interface para reduzir duplicação e facilitar manutenção"
        ],
        technologies: [
            {
                name: "Next.js (App Router)",
                reason: "SSR para performance inicial e SEO, arquitetura moderna para aplicação complexa"
            },
            {
                name: "TypeScript + Redux Toolkit",
                reason: "Previsibilidade de tipos e gerenciamento de estado complexo com sincronização em tempo real"
            },
            {
                name: "WebSocket (Pusher)",
                reason: "Comunicação bidirecional confiável com suporte a reconexão e subscrições de canais"
            },
            {
                name: "Material UI",
                reason: "Consistência visual, componentes acessíveis e produtividade no desenvolvimento"
            }
        ],
        results: [
            "Redução significativa de problemas de desconexão e duplicação de mensagens",
            "Usuários sempre informados sobre estado da conexão, reduzindo dependência de suporte",
            "Fluxo contínuo mesmo após refresh ou falhas temporárias de rede",
            "Arquitetura modular que facilita expansão de funcionalidades em tempo real",
            "Base de código mais legível e sustentável no longo prazo"
        ]
    },
    {
        id: 4,
        title: "VersoCommerce",
        description: "Plataforma B2B de e-commerce com cálculos fiscais complexos.",
        resume: "Sistema completo de e-commerce B2B com gestão de subcolaboradores, cálculos tributários brasileiros (ICMS, IPI, ST), pagamento PIX em tempo real e portal customizável por cliente.",
        stack: ["Next.js", "React", "TypeScript", "Redux Toolkit", "WebSocket", "Material UI"],
        image: "https://i.imgur.com/placeholder.png",
        deploy: "",
        github: "",
        context: "E-commerce B2B brasileiro possui desafios únicos: cálculos fiscais complexos com múltiplos cenários tributários, gestão de permissões granulares por colaborador/setor, necessidade de customização visual por cliente, e integração de pagamentos em tempo real. A plataforma precisava escalar sem comprometer a precisão dos cálculos.",
        role: [
            "Desenvolvi motor de cálculo de impostos brasileiros (ICMS, IPI, ST) com 5 cenários tributários e cobertura de testes de 95%",
            "Implementei sistema completo de subcolaboradores com restrições granulares por setor, API tokens e webhooks",
            "Criei integração PIX com QR Code dinâmico e validação em tempo real via WebSocket",
            "Desenvolvi portal B2B com sistema de layouts customizáveis e temas por cliente",
            "Implementei headers para rate limiting e API interna, melhorando tempo de resposta em ~30%"
        ],
        technologies: [
            {
                name: "Next.js + SSR/SSG",
                reason: "Performance crítica para SEO e carregamento inicial em e-commerce"
            },
            {
                name: "Redux Toolkit + React Query",
                reason: "Gerenciamento de estado complexo com cache inteligente para dados de produtos e carrinho"
            },
            {
                name: "WebSocket (Pusher)",
                reason: "Validação de pagamento PIX em tempo real e notificações de status"
            },
            {
                name: "Jest + Cypress",
                reason: "Cobertura de 95% em cálculos fiscais críticos - erros aqui significam prejuízo financeiro"
            }
        ],
        results: [
            "Motor de cálculos fiscais com 95% de cobertura de testes, garantindo precisão em cenários complexos",
            "Sistema de subcolaboradores permite controle granular de acesso por setor e produto",
            "Tempo de resposta melhorado em ~30% através de cache estratégico e rate limiting",
            "Portal customizável permite white-label para diferentes clientes B2B",
            "200+ bugs críticos resolvidos incluindo validações de estoque e cálculos fiscais"
        ]
    },
    {
        id: 5,
        title: "VersoADM",
        description: "Sistema administrativo com módulo de comissão dinâmica.",
        resume: "Plataforma de gestão administrativa com sistema completo de comissão dinâmica, configuração de portais e biblioteca de componentes reutilizáveis.",
        stack: ["Vue.js", "JavaScript", "Vuex", "SCSS"],
        image: "https://i.imgur.com/placeholder.png",
        deploy: "",
        github: "",
        context: "O sistema administrativo precisava de um módulo de comissão flexível que permitisse configurar regras complexas de percentuais por faixas, restrições por colaborador e segmentos de produtos. Além disso, havia código duplicado em múltiplos componentes de seleção que dificultava manutenção.",
        role: [
            "Desenvolvi módulo completo de Comissão Dinâmica com wizard multi-step e sistema de ranges percentuais",
            "Criei biblioteca de componentes reutilizáveis (SelectableListBase) economizando ~500 linhas de código duplicado",
            "Implementei sistema de layout customizável do Portal com tipos de login (Clássico/Moderno)",
            "Executei migração crítica de npm para Yarn impactando 75.000+ linhas com resolução de conflitos",
            "Automatizei processos de build com scripts de validação e prevenção de erros"
        ],
        technologies: [
            {
                name: "Vue.js 2/3",
                reason: "Framework principal do projeto legado, com migração gradual para Vue 3"
            },
            {
                name: "Wizard Pattern",
                reason: "Formulários complexos de comissão divididos em etapas para melhor UX"
            },
            {
                name: "Factory Pattern",
                reason: "Componentes reutilizáveis que se adaptam a diferentes contextos de seleção"
            },
            {
                name: "Bash Scripting",
                reason: "Automação de build e validação para prevenir erros em produção"
            }
        ],
        results: [
            "Sistema completo de comissão dinâmica com ~1.500 linhas de código e 15+ componentes",
            "Economia de ~500 linhas de código duplicado através de componentização",
            "Migração npm→Yarn executada sem downtime, impactando 75.000+ linhas",
            "Padrão de componentes estabelecido que beneficia todo o projeto",
            "Automação de build reduzindo erros humanos em deploys"
        ]
    },
    {
        id: 6,
        title: "Verso Apps",
        description: "Suite de automação comercial e call center.",
        resume: "Conjunto de aplicações para automação de agendas comerciais, call center e SAC, com dashboards analíticos, calculadora de preços e gestão de releases.",
        stack: ["React", "JavaScript", "Redux", "Recharts", "Material UI"],
        image: "https://i.imgur.com/placeholder.png",
        deploy: "",
        github: "",
        context: "Equipes comerciais precisavam de ferramentas para automatizar agendamento de visitas, calcular preços com regras complexas de desconto, e gerenciar atendimentos. O desafio era criar interfaces intuitivas para processos de negócio complexos, com dashboards que fornecessem visibilidade em tempo real.",
        role: [
            "Desenvolvi sistema completo de Automação de Agendas com formulário multi-step, gestão de capacidade de vendedores e dashboard analítico",
            "Criei calculadora de preços com validações, sistema de descontos/promoções e cálculo de percentuais financeiros",
            "Implementei checkout com condições de pagamento dinâmicas e recálculo automático",
            "Construí dashboards com gráficos interativos (Recharts) e métricas em tempo real",
            "Gerenciei 54+ releases (versões 2.88.9 → 2.96.5)"
        ],
        technologies: [
            {
                name: "React + Redux",
                reason: "Estado centralizado para fluxos complexos de calculadora e checkout"
            },
            {
                name: "Recharts",
                reason: "Gráficos de pizza e métricas interativas para dashboards analíticos"
            },
            {
                name: "React Hook Form",
                reason: "Formulários multi-step com validação progressiva"
            },
            {
                name: "Material UI",
                reason: "Componentes consistentes e acessíveis para aplicações internas"
            }
        ],
        results: [
            "Sistema de automação desenvolvido em tempo recorde (100 commits em agosto/2025)",
            "Calculadora de preços com todas as regras de negócio e validações",
            "54+ releases gerenciadas com estabilidade em produção",
            "Dashboards fornecem visibilidade em tempo real para gestão comercial",
            "3º maior contribuidor do projeto com 663 commits"
        ]
    }
]