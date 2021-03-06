import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Article(props: Props) {
  const { children } = props;
  return <article className="prose dark:prose-dark">{children}</article>;
}
