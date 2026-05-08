import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",

  schema: z.object({
    title: z.string(),
    description: z.string(),
    shortDescription: z.string(),
    publishDate: z.string(),
    featured: z.boolean(),
    status: z.string(),
    category: z.string(),
    technologies: z.array(z.string()),
    tags: z.array(z.string()),
    cover: z.string(),
    gallery: z.array(z.string()).optional(),
    github: z.string().optional(),
    gitlab: z.string().optional(),
    documentation: z.string().optional(),
    metrics: z.object({
      accuracy: z.number().optional(),
      latency: z.number().optional(),
      datasets: z.number().optional()
    }).optional()
  })
});

export const collections = {
  projects: projects
};