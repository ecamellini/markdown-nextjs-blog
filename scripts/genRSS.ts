import { parseISO, formatISO } from "date-fns";
import fs from "fs";
import { getSortedPosts, getPostData } from "../lib/blog";
import { PostsListElementData } from "../model/model";
import path from "path";

// https://github.com/frankdilo/personal-blog-template/blob/main/scripts/genRSS.js

const siteUrl = "https://ecamel.me";

const formatDate = (date: string) => formatISO(parseISO(date));

const blogPostsRssXml = async (blogPosts: PostsListElementData[]) => {
  let latestPostDate = "";
  let rssItemsXml = "";

  for (let index = 0; index < blogPosts.length; index++) {
    const post = blogPosts[index];
    const postDate = Date.parse(post.date);
    if (!latestPostDate || postDate > Date.parse(latestPostDate)) {
      latestPostDate = post.date;
    }

    const url = `${siteUrl}/blog/${post.id}`;

    const content = `<![CDATA[${(await getPostData(post.id)).content}]]>`;

    rssItemsXml += `
      <item>
        <title>${post.title}</title>
        <link>${url}</link>

        <pubDate>${formatDate(post.date)}</pubDate>
        <description>
        ${content}
        </description>
    </item>`;
  }

  return {
    rssItemsXml,
    latestPostDate,
  };
};

const getRssXml = async (blogPosts: PostsListElementData[]) => {
  const { rssItemsXml, latestPostDate } = await blogPostsRssXml(blogPosts);
  return `<?xml version="1.0" ?>
  <rss version="2.0">
    <channel>
        <title>Eric Camellini</title>
        <link>${siteUrl}</link>
        <description>Eric Camellini - software engineer, project/product manager, climber, and more. Based in Milan, Italy.</description>
        <language>en</language>
        <lastBuildDate>${formatDate(latestPostDate)}</lastBuildDate>
        ${rssItemsXml}
    </channel>
  </rss>`;
};

export const genRSS = async () => {
  const posts = await getSortedPosts();

  const xml = await getRssXml(posts.slice(0, 10));

  fs.writeFileSync(path.join(process.cwd(), "public/rss.xml"), xml);
};
