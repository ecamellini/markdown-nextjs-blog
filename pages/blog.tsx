import { GetStaticProps } from "next";
import Page from "../components/layout/Page";
import { getSortedPosts } from "../lib/blog";
import { PostsListElementData } from "../model/model";
import Link from "next/link";
import PostDate from "../components/PostDate";
import Article from "../components/Article";
import { ProfilePic } from "../components/ProfilePic";

type Props = {
  posts: PostsListElementData[];
};

export const getStaticProps: GetStaticProps<Props> = () => {
  return getSortedPosts().then((posts) => ({
    props: {
      posts,
    },
  }));
};

export default function Blog(props: Props) {
  const { posts } = props;
  return (
    <Page title="Rick's blog" activePage="blog">
      <ProfilePic />
      <Article>
        <h1 className="mx-auto text-center">Rick's Blog</h1>
        <hr />
      </Article>
      {posts.map((post) => {
        const { title, date, id } = post;
        return (
          <div key={id}>
            <h2 className="mt-10 text-2xl font-medium text-gray-900 dark:text-gray-300">
              <Link href={`/posts/${id}`}>
                <a className="text-blue-500 hover:text-blue-400 dark:text-yellow-500 dark:hover:text-yellow-400">
                  {title}
                </a>
              </Link>
            </h2>

            <PostDate dateString={date} />
          </div>
        );
      })}
    </Page>
  );
}
