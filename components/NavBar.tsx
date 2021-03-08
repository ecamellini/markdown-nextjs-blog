import { ActivePage } from "../model/model";
import NavBarItem from "./NavBarItem";

type Props = {
  activePage?: ActivePage;
};

export default function NavBar(props: Props) {
  const { activePage } = props;
  return (
    <div className="max-w-full px-4 md:px-8 py-4 flex">
      <NavBarItem page="/" label="Me" active={activePage === "me"} />
      <NavBarItem page="/blog" label="Blog" active={activePage === "blog"} />
      <div className="flex ml-auto" />
      {activePage === "blog" && (
        <NavBarItem page="/rss.xml" label="/rss" active={false} />
      )}
    </div>
  );
}
