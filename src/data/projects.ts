import { projectData } from "@/schemas/project.schema";

export const projects:projectData[] = [
    {
        id: 1,
        title: "Devstack",
        description: "Hub de currículos de programadores.",
        resume: "Aplicação que permite ao usuário expor as tecnologias que aprendeu e está aprendendo, como também seus projetos também.",
        stack: ["React", "Context API", "Styled Components"],
        image: "https://i.imgur.com/ruBLRql.png",
        deploy: "https://devhubv.vercel.app/",
        github: "https://github.com/vilsonneto/devhub",
        context: "Havia a necessidade de criar uma plataforma para organizar, visualizar e gerenciar informações técnicas de forma clara, escalável e fácil de manter, evitando interfaces confusas e acoplamento excessivo entre dados e UI.",
        role: [
            "Estruturei a interface e a arquitetura do front-end",
            "Organizei fluxos de navegação e apresentação de dados",
            "Transformei requisitos funcionais em componentes reutilizáveis",
            "Garanti previsibilidade de estados e comportamento da UI"
        ],
        technologies: [
            {
                name: "React",
                reason: "Base para composição de componentes e controle de estado"
            },
            {
                name: "TypeScript",
                reason: "Segurança de tipos e clareza no contrato entre dados e interface"
            },
            {
                name: "Styled Components",
                reason: "Isolamento visual e manutenção simples"
            }
        ],
        results: [
            "Interface mais previsível e fácil de evoluir",
            "Organização clara da informação para o usuário",
            "Base sólida para crescimento sem refatorações agressivas",
            "Código front-end mais legível e sustentável no longo prazo"
        ]
    },
    {
        id: 2,
        title: "SportFind",
        description: "Aplicação para achar eventos esportivos.",
        resume: "Aplicação que permite ao usuário encontrar diversas pessoas que praticam diferentes esportes em uma cidade específica.",
        stack: ["React", "Typescript", "Styled Components"],
        image: "https://i.imgur.com/hFjrwVZ.png",
        deploy: "https://sport-find-tau.vercel.app/",
        github: "https://github.com/vilsonneto/sport-find",
        context: "O desafio era criar uma aplicação que facilitasse a conexão entre pessoas interessadas em esportes, lidando com filtros, estados de busca e experiência do usuário sem tornar a interface complexa ou lenta.",
        role: [
            "Desenvolvi a interface e os fluxos principais da aplicação",
            "Estruturei estados de busca, carregamento e resultados vazios",
            "Garanti uma experiência clara mesmo fora do happy path",
            "Trabalhei a responsividade e usabilidade em diferentes dispositivos"
        ],
        technologies: [
            {
                name: "React",
                reason: "Controle de estado e renderização dinâmica"
            },
            {
                name: "TypeScript",
                reason: "Redução de erros e maior previsibilidade"
            },
            {
                name: "API REST",
                reason: "Integração eficiente entre front-end e backend"
            }
        ],
        results: [
            "Experiência de busca mais clara e intuitiva",
            "Melhor controle de estados da interface (loading, vazio, erro)",
            "Aplicação responsiva e preparada para novos filtros e fluxos",
            "Interface alinhada ao objetivo do produto, sem sobrecarga visual"
        ]
    }
]