import { Heading, Text } from '@/components';

type Props = Readonly<{
  title: string;
  value: number;
}>;

export function Bar({ title, value }: Props) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between">
        <Heading level="h5">{title}</Heading>
        <Text>{value} %</Text>
      </div>
      <span className="w-full py-2 rounded-md bg-orange-500" />
    </div>
  );
}
