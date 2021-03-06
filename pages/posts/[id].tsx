import { GetStaticPaths, GetStaticProps } from "next";
import Article from "../../components/Article";
import PostDate from "../../components/PostDate";
import Page from "../../components/layout/Page";
import { getAllPostIds, getPostData } from "../../lib/blog";
import { PostData } from "../../model/model";

type Props = {
  postData: PostData;
};

export const getStaticProps: GetStaticProps<Props, { id: string }> = (
  context
) => {
  if (!!context.params)
    return getPostData(context.params.id).then((postData) => ({
      props: {
        postData,
      },
    }));
  else {
    return Promise.reject();
  }
};

export const getStaticPaths: GetStaticPaths = () => {
  return getAllPostIds().then((ids) => {
    const paths = ids.map((id) => ({ params: { id } }));
    return {
      paths,
      fallback: false,
    };
  });
};

export default function Post(props: Props) {
  const { postData } = props;
  return (
    <Page title={postData.title} activePage="blog">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-300">
          {postData.title}
        </h1>
        <PostDate dateString={postData.date} />
      </div>
      <Article>
        <div dangerouslySetInnerHTML={{ __html: postData.content }} />
      </Article>
    </Page>
  );
}
