import type { Metadata } from 'next';
import { Bar, Button, Card, Heading, Text } from '@/components';

export default function HomePage() {
  return (
    <section className="mt-12 md:mt-20">
      <section
        className="flex flex-col items-center justify-between
                   md:flex-row md:gap-x-14"
      >
        <section
          className="w-full h-[30rem] md:h-[40rem] flex items-center justify-center
                   bg-slate-200"
        >
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
              Introduce all my name is Madina Amizah a designer who has worked
              in the design world for more than 10 years, ranging from office
              workers to freelance projects from various countries
            </Text>
          </main>
          <footer className="flex items-center gap-x-5 md:gap-x-14">
            <Button type="solid">Contact Me</Button>
            <Button type="outlined">Download My CV</Button>
          </footer>
        </article>
      </section>
      <section className="py-10 mt-12 md:mt-20">
        <header className="text-center flex flex-col gap-y-4">
          <Heading level="h3">Why should to choose me</Heading>
          <Heading level="h2">This 3 Reason To Why Choose Me</Heading>
          <Text>
            Vestibulum eu quam nec neque pellentesque efficitur id eget nisl.
            Proin porta est convallis lacus blandit pretium sed non
          </Text>
        </header>
        <main className="py-10">
          <Cards />
        </main>
      </section>
      <section
        className="py-10 mt-12 md:mt-20 flex flex-col items-center
                   md:flex-row-reverse gap-12 md:gap-16"
      >
        <section
          className="w-full h-[30rem] md:h-[40rem] flex items-center justify-center
                   bg-slate-200"
        >
          Image
        </section>
        <article className="w-full flex flex-col gap-6">
          <Heading level="h2">Lets More To Know Me</Heading>
          <div className="mt-4 flex flex-col gap-y-4">
            <Text>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Text>
            <Text>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Text>
          </div>
          <footer>
            <Heading level="h3">This about me:</Heading>
            <Bars />
          </footer>
        </article>
      </section>
      <section className="py-10 mt-12 md:mt-20">
        <header className="text-center flex flex-col gap-y-4">
          <Heading level="h3">Services of my skills</Heading>
          <Heading level="h2">My Services For Help Your Business</Heading>
          <Text>
            In a laoreet purus. Integer turpis quam, laoreet id orci nec,
            ultrices lacinia nunc. Aliquam erat volutpat. Curabitur fringilla in
            purus eget egestas. Etiam quis.
          </Text>
        </header>
        <main className="py-10">
          <SkillsCards />
        </main>
      </section>
    </section>
  );
}

function SkillsCards() {
  const data = [
    {
      id: 1,
      title: 'UI/UX Design',
      text: `Create a beautiful and usefull ui display 
             for ease of use of the application for your best customer users`,
      path: '',
    },
    {
      id: 2,
      title: 'Web Programming',
      text: `Build a quality website with the best technology
             with optimization on search engines dan social media`,
      path: '',
    },
    {
      id: 3,
      title: 'Video Editor',
      text: `Make every moment into a professional video
             for any theme and style that customers want`,
      path: '',
    },
  ];

  const renderedCards = data.map((card) => {
    return (
      <Card
        key={card.id}
        title={card.title}
        text={card.text}
        path={card.path}
      />
    );
  });

  return (
    <div className="flex flex-col items-center justify-center gap-10 md:flex-row">
      {renderedCards}
    </div>
  );
}

function Cards() {
  const data = [
    {
      id: 1,
      title: 'Good Communication',
      text: `Easier to work with with smooth and active, 
             also comfortable for delivering a good message for client`,
      path: '',
    },
    {
      id: 2,
      title: 'Best Quality Work',
      text: `With more than 10 years of experience presenting quality 
             that has been honed and guarantees the quality`,
      path: '',
    },
    {
      id: 3,
      title: 'Faster Completely',
      text: `Assurance that work is completed
             faster to meet client deadlines and allowances for revisions`,
      path: '',
    },
  ];

  const renderedCards = data.map((card) => {
    return (
      <Card
        key={card.id}
        title={card.title}
        text={card.text}
        path={card.path}
      />
    );
  });

  return (
    <div className="flex flex-col items-center justify-center gap-10 md:flex-row">
      {renderedCards}
    </div>
  );
}

function Bars() {
  const data = [
    {
      id: 1,
      title: 'web programming',
      value: 90,
    },
    {
      id: 2,
      title: 'web programming',
      value: 90,
    },
    {
      id: 3,
      title: 'web programming',
      value: 90,
    },
  ];

  const renderedBars = data.map((card) => {
    return <Bar key={card.id} title={card.title} value={card.value} />;
  });

  return (
    <div className="mt-6 flex flex-col gap-y-6 md:gap-10">{renderedBars}</div>
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
