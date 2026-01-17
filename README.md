# About

Name: AIHunt.dev
Description: Find the best developer AI tools for your next project.
Think of Product Hunt but for AI tools for developer.


## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve tools from `src/content/tools/`. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

## Content Structure

Tools are stored in `src/content/tools/` as Markdown/MDX files with the following frontmatter:

```yaml
---
title: "Tool Name"
description: "Brief description of the tool"
createdAt: 2025-01-17
logo: ""                      # Logo URL (default: "") you can leave this blank
website: ""                   # Tool website URL (default: "")
category:
  - "Category 1"
  - "Category 2"
---
```

| Field | Type | Required | Description |
| :---- | :--- | :------- | :---------- |
| `title` | string | Yes | Name of the AI tool |
| `description` | string | Yes | Brief description of the tool |
| `createdAt` | date | Yes | Date added (YYYY-MM-DD) |
| `logo` | string | No | Logo URL (default: "") |
| `website` | string | No | Tool website URL (default: "") |
| `category` | string[] | Yes | Array of category tags |

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
