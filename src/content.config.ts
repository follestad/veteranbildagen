import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const gallery = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/gallery' }),
  schema: z.object({
    year: z.number(),
    title: z.string(),
    images: z.array(z.string()),
  }),
});

export const collections = { gallery };
