import { GetStaticProps } from "next";
import { mdContentToHTML } from "../lib/mdContent";
import Page from "../components/layout/Page";
import Article from "../components/Article";

type Props = {
  meContent: string;
};

export const getStaticProps: GetStaticProps<Props> = () => {
  return mdContentToHTML("me").then((meContent) => ({
    props: {
      meContent,
    },
  }));
};

export default function Home(props: Props) {
  const { meContent } = props;
  return (
    <Page title="Rick" activePage="me">
      <img
        className="w-36 mb-5 rounded-full mx-auto"
        src="/images/profile.jpg"
        alt="Rick"
      />
      <Article>
        <h1 className="mx-auto text-center">Hi, I'm Rick</h1>
        <div dangerouslySetInnerHTML={{ __html: meContent }} />
      </Article>
    </Page>
  );
}
