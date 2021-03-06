import { ReactNode } from "react";
import Head from "next/head";
import NavBar from "../NavBar";
import { ActivePage } from "../../model/model";

type Props = {
  title: string;
  activePage?: ActivePage;
  children?: ReactNode;
};

export default function Page(props: Props) {
  const { title, children, activePage } = props;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <NavBar activePage={activePage} />
      <div className="px-4 py-8 lg:py-32 lg:px-0 max-w-screen-sm mx-auto">
        {children}
      </div>
    </>
  );
}
