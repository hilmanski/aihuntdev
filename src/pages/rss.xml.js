import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

export async function GET(context) {
	const tools = await getCollection('tools');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: tools.map((tool) => ({
			title: tool.data.title,
			description: tool.data.description,
			pubDate: tool.data.createdAt,
			link: `/tools/${tool.id}/`,
		})),
	});
}
