import type { Metadata } from 'next';
import { Button, Heading, Text } from '@/components';

export default function HomePage() {
  return (
    <section className="mt-12 flex flex-col items-center justify-between md:mt-20 md:flex-row md:gap-x-14">
      <section className="w-full h-[30rem] md:h-[40rem] flex items-center justify-center bg-slate-200">
        Image
      </section>
      <article className="w-full py-6 flex flex-col gap-y-6 md:gap-y-14">
        <header>
          <Heading level="h1">
            Lets Grow Your Business With My Solution Skills
          </Heading>
        </header>
        <main>
          <Heading level="h3">Welcome to everyone</Heading>
          <Text className="mt-1.5">
            Introduce all my name is Madina Amizah a designer who has worked in
            the design world for more than 10 years, ranging from office workers
            to freelance projects from various countries
          </Text>
        </main>
        <footer className="flex items-center gap-x-5 md:gap-x-14">
          <Button type="solid">Contact Me</Button>
          <Button type="outlined">Download My CV</Button>
        </footer>
      </article>
    </section>
  );
}

export const metadata: Metadata = {
  title: 'Said Arafat',
  description: `I'm Said Arafat, a front-end developer with 3 
    years of experience specializing in React, 
    TypeScript, and modern web technologies like Tailwind CSS, 
    Redux-toolkit, React Query and Next.js. 
    Passionate about building responsive, high-performance applications.`,
};
