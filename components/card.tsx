import Link from 'next/link';
import { Heading, Text } from '@/components';

type Props = Readonly<{
  title: string;
  text: string;
  path: string;
}>;

function Icon() {
  return (
    <span
      className="p-3 bg-slate-400 dark:bg-slate-500 rounded-full
                 flex items-center justify-center"
    >
      <span className="p-6 bg-slate-100 rounded-full" />
    </span>
  );
}

function CardAction({ path }: { path: string }) {
  return (
    <Link
      href={path}
      className="mt-3 text-orange-500 text-xl flex items-center gap-x-1 
                 hover:gap-x-3 hover:text-orange-600 transition-all duration-500"
    >
      learn more
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6 mt-1"
        >
          <path
            fillRule="evenodd"
            d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75
               0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 
               0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </Link>
  );
}

export function Card({ title, text, path = '/' }: Props) {
  return (
    <div
      className="p-8 flex flex-col items-start gap-y-8 md:gap-y-10
                 bg-gradient-to-bl from-slate-100 to-slate-400
               dark:from-slate-500 dark:to-slate-800
                 hover:shadow-xl hover:-translate-y-3
                 transition-all duration-500 cursor-pointer"
    >
      <Icon />
      <Heading level="h4">{title}</Heading>
      <Text>{text}</Text>
      <CardAction path={path} />
    </div>
  );
}
