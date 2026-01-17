import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((context, next) => {
	const { pathname } = context.url;

	// Check if pathname has uppercase letters
	if (pathname !== pathname.toLowerCase()) {
		// Redirect to lowercase version
		const lowercaseUrl = new URL(context.url);
		lowercaseUrl.pathname = pathname.toLowerCase();
		return context.redirect(lowercaseUrl.toString(), 301);
	}

	return next();
});
