import { z } from "zod";

export const toolingSchema = z.object({
  id: z.number(),
  title: z.string(),
  type: z.array(z.string()),
});


export type toolingData = z.infer<typeof toolingSchema>;

export const tooling:toolingData[] = [
    // Frontend Core
    {
        id: 1,
        title: "React",
        type: ["Front-end"]
    },
    {
        id: 2,
        title: "Next.js",
        type: ["Front-end"]
    },
    {
        id: 3,
        title: "Vue.js",
        type: ["Front-end"]
    },
    {
        id: 4,
        title: "TypeScript",
        type: ["Front-end", "Back-end"]
    },
    {
        id: 5,
        title: "JavaScript",
        type: ["Front-end"]
    },
    // Estado & Dados
    {
        id: 6,
        title: "Redux Toolkit",
        type: ["Front-end"]
    },
    {
        id: 7,
        title: "React Query",
        type: ["Front-end"]
    },
    {
        id: 8,
        title: "React Hook Form",
        type: ["Front-end"]
    },
    {
        id: 9,
        title: "Zod",
        type: ["Front-end"]
    },
    // UI & Styling
    {
        id: 10,
        title: "Material UI",
        type: ["Front-end"]
    },
    {
        id: 11,
        title: "SCSS",
        type: ["Front-end"]
    },
    {
        id: 12,
        title: "Styled Components",
        type: ["Front-end"]
    },
    {
        id: 13,
        title: "Tailwind CSS",
        type: ["Front-end"]
    },
    // Comunicação & Real-time
    {
        id: 14,
        title: "WebSocket",
        type: ["Front-end"]
    },
    {
        id: 15,
        title: "Pusher.js",
        type: ["Front-end"]
    },
    {
        id: 16,
        title: "REST APIs",
        type: ["Front-end", "Back-end"]
    },
    {
        id: 17,
        title: "Axios",
        type: ["Front-end"]
    },
    // Testes & Qualidade
    {
        id: 18,
        title: "Jest",
        type: ["Front-end", "Back-end"]
    },
    {
        id: 19,
        title: "Cypress",
        type: ["Front-end"]
    },
    // DevOps & Ferramentas
    {
        id: 20,
        title: "Docker",
        type: ["Back-end"]
    },
    {
        id: 21,
        title: "CI/CD",
        type: ["Back-end"]
    },
    {
        id: 22,
        title: "Git Flow",
        type: ["Back-end"]
    },
    // Visualização
    {
        id: 23,
        title: "Recharts",
        type: ["Front-end"]
    },
    // Back-end
    {
        id: 24,
        title: "Node.js",
        type: ["Back-end"]
    },
    {
        id: 25,
        title: "Python",
        type: ["Back-end"]
    },
    {
        id: 26,
        title: "SQL",
        type: ["Back-end"]
    },
]