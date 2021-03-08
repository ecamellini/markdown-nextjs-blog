import Link from "next/link";

type Props = {
  page: string;
  label: string;
  active: boolean;
};

export default function NavBarItem(props: Props) {
  const { page, label, active } = props;
  return (
    <Link href={page}>
      <a
        className={`
          mx-2
          font-medium
          ${
            active &&
            `
            text-indigo-600
            dark:text-yellow-500
            border-b-2
            border-solid
            border-indigo-600
            dark:border-yellow-500
            `
          }
          ${!active && "text-gray-900 dark:text-gray-200"}
        `}
      >
        {label}
      </a>
    </Link>
  );
}
