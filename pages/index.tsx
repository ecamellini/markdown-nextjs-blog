import { GetStaticProps } from "next";
import { mdContentToHTML } from "../lib/mdContent";
import Page from "../components/layout/Page";
import Article from "../components/Article";
import { genRSS } from "../scripts/genRSS";
import { ProfilePic } from "../components/ProfilePic";

type Props = {
  meContent: string;
};

export const getStaticProps: GetStaticProps<Props> = () => {
  return genRSS().then(() => {
    return mdContentToHTML("me").then((meContent) => ({
      props: {
        meContent,
      },
    }));
  });
};

export default function Home(props: Props) {
  const { meContent } = props;
  return (
    <Page title="Rick" activePage="me">
      <ProfilePic />
      <Article>
        <h1 className="mx-auto text-center">Hi, I'm Rick</h1>
        <div dangerouslySetInnerHTML={{ __html: meContent }} />
      </Article>
    </Page>
  );
}
