import remark from "remark";
import html from "remark-html";
import externalLinks from "remark-external-links";
import path from "path";
import { MdContent } from "../model/model";
import { readFile } from "./file";

export function mdToHtml(md: string): Promise<string> {
  return remark()
    .use(externalLinks)
    .use(html)
    .process(md)
    .then((content) => content.toString());
}
function mdFileToHTML(filePath: string): Promise<string> {
  const fileContent = readFile(path.join(process.cwd(), filePath));

  // Use remark to convert markdown into HTML string
  return mdToHtml(fileContent);
}

export function mdContentToHTML(content: MdContent): Promise<string> {
  switch (content) {
    case "me":
      return mdFileToHTML("content/me.md");
    case "education":
      return mdFileToHTML("content/education.md");
  }
}
