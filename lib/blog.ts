import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { PostData, PostsListElementData } from "../model/model";
import { readFile } from "./file";
import { mdToHtml } from "./mdContent";

const postsDirectory = path.join(process.cwd(), "content/posts");

function postIdToFileName(id: string) {
  return `${id}.md`;
}

function postFileNameToId(fileName: string) {
  return fileName.replace(/\.md$/, "");
}

export function getAllPostIds(): Promise<string[]> {
  return Promise.resolve(fs.readdirSync(postsDirectory).map(postFileNameToId));
}

export function getSortedPosts(): Promise<PostsListElementData[]> {
  const fileNames = fs.readdirSync(postsDirectory);

  const data: PostsListElementData[] = fileNames.map((fileName) => {
    const id = postFileNameToId(fileName);

    const fileContents = readFile(path.join(postsDirectory, fileName));

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    return {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
    };
  });

  // Sort posts by date
  return Promise.resolve(data.sort((a, b) => (a.date < b.date ? 1 : -1)));
}

export function getPostData(id: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, postIdToFileName(id));
  const fileContents = readFile(fullPath);

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  return mdToHtml(matterResult.content).then((content) => ({
    id,
    title: matterResult.data.title,
    date: matterResult.data.date,
    content,
  }));
}
