export type MdContent = "me";

export type PostsListElementData = {
  id: string;
  title: string;
  date: string;
};

export type PostData = {
  id: string;
  title: string;
  date: string;
  content: string;
};

export type ActivePage = "me" | "blog";
