# Markdown Next.js Blog

Static blog powered by Markdown files, ready to be deployed on [Vercel](https://vercel.com/) - [see how it looks](https://markdown-nextjs-blog.vercel.app/).
Based on [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/).

## Features

- Comes by default with homepage, blog, and navigation
- Homepage text comes from the `content/me.md` Markdown file
- Quickly add a blog post by adding a Markdown file in `content/posts/`
- Seamless dark mode based on the user's operating system setting
- Automatic RSS feed generation

## Setup, deploy, and blog post preview

[Vercel](https://vercel.com/) is the easiest way to deploy a Next.js app:

1. Clone this repo and edit it as needed
2. Push it on your GH account
3. Add the Vercel integration to your repo, following [this guide](https://vercel.com/guides/deploying-nextjs-with-vercel)

Once you have Vercel configured, it will deploy your website on each commit on the `main` branch. It will also create a dedicated preview deployment for each pull request, meaning that you can use pull requests to add a new blog post and see how it looks.

---

Initially developed by [@e_caml](https://twitter.com/e_caml) to build his [personal website](https://ecamel.me).
