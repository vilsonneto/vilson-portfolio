import { z } from "zod";

export const toolingSchema = z.object({
  id: z.number(),
  title: z.string(),
  type: z.array(z.string()),
});


export type toolingData = z.infer<typeof toolingSchema>;

export const tooling:toolingData[] = [
    {
        id: 1,
        title: "HTML",
        type: ["Front-end"]
    },
    {
        id: 2,
        title: "CSS",
        type: ["Front-end"]
    },
    {
        id: 3,
        title: "JavaScript",
        type: ["Front-end"]
    },
    {
        id: 4,
        title: "React",
        type: ["Front-end"]
    },
    {
        id: 5,
        title: "TypeScript",
        type: ["Front-end", "Back-end"]
    },
    {
        id: 6,
        title: "Sass",
        type: ["Front-end"]
    },
    {
        id: 7,
        title: "Styled Components",
        type: ["Front-end"]
    },
    {
        id: 8,
        title: "Responsive Design",
        type: ["Front-end"]
    },
    {
        id: 9,
        title: "Next.js",
        type: ["Front-end"]
    },
    {
        id: 10,
        title: "Linux",
        type: ["none"]
    },
    {
        id: 11,
        title: "Git",
        type: ["none"]
    },
    {
        id: 12,
        title: "GitHub",
        type: ["none"]
    },
    {
        id: 13,
        title: "GitLab",
        type: ["none"]
    },
    {
        id: 14,
        title: "Docker",
        type: ["Devops"]
    },
    {
        id: 15,
        title: "Jest",
        type: ["Front-end", "Back-end"]
    },
    {
        id: 16,
        title: "Cypress",
        type: ["Front-end"]
    },
    {
        id: 17,
        title: "Node.js",
        type: ["Back-end"]
    },
    {
        id: 18,
        title: "Python",
        type: ["Back-end"]
    },
    {
        id: 19,
        title: "Python",
        type: ["Back-end"]
    },
    {
        id: 20,
        title: "Flask",
        type: ["Back-end"]
    },
    {
        id: 21,
        title: "Mongo DB",
        type: ["Back-end"]
    },
    {
        id: 22,
        title: "MySQL",
        type: ["Back-end"]
    },
    {
        id: 23,
        title: "SQL",
        type: ["Back-end"]
    },


]