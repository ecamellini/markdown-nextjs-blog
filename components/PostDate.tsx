import { parseISO, format } from "date-fns";

export default function PostDate({ dateString }: { dateString: string }) {
  const date = parseISO(dateString);
  return (
    <h4 className="font-medium text-gray-500">
      <time dateTime={dateString}>{format(date, "MMMM d, yyyy")}</time>
    </h4>
  );
}
