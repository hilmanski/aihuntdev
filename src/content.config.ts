import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const tools = defineCollection({
	loader: glob({ base: './src/content/tools', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			createdAt: z.coerce.date(),
			publishedAt: z.coerce.date(),
			logo: z.string().default(''),
			website: z.string().default(''),
			category: z.array(z.string()),
		}),
});

export const collections = { tools };
