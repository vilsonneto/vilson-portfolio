import { z } from "zod";

export const projectSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
});

export type projectData = z.infer<typeof projectSchema>;
