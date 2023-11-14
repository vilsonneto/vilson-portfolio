import { z } from "zod";

export const projectSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  resume: z.string(),
  stack: z.array(z.string()),
  image: z.string(),
  deploy: z.string(),
  github: z.string()
});


export type projectData = z.infer<typeof projectSchema>;

export const projects:projectData[] = [
    {
        id: 1,
        title: "Devstack",
        description: "Hub de currículos de programadores.",
        resume: "Aplicação que permite ao usuário expor as tecnologias que aprendeu e está aprendendo, como também seus projetos também.",
        stack: ["React", "Context API", "Styled Components"],
        image: "https://i.imgur.com/ruBLRql.png",
        deploy: "https://devhubv.vercel.app/",
        github: "https://github.com/vilsonneto/devhub"
    },
    {
        id: 2,
        title: "SportFind",
        description: "Aplicação para achar eventos esportivos.",
        resume: "Aplicação que permite ao usuário encontrar diversas pessoas que praticam diferentes esportes em uma cidade específica.",
        stack: ["React", "Typescript", "Styled Components"],
        image: "https://i.imgur.com/hFjrwVZ.png",
        deploy: "https://sport-find.vercel.app/",
        github: "https://github.com/vilsonneto/sport-find"
    }
]