import { z } from "zod";

export const projectSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  resume: z.string(),
  stack: z.array(z.string()),
  image: z.string(),
  deploy: z.string(),
  github: z.string(),
  // Case study fields
  context: z.string(),
  role: z.array(z.string()),
  technologies: z.array(z.object({
    name: z.string(),
    reason: z.string()
  })),
  results: z.array(z.string())
});

export type projectData = z.infer<typeof projectSchema>;
