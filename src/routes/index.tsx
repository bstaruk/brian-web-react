import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Home,
  head: () => ({
    meta: [
      {
        name: 'description',
        content: 'Home page of brian.staruk.net.',
      },
      {
        title: 'Home | brian.staruk.net',
      },
    ],
  }),
});

function Home() {
  return (
    <div className="flex flex-col gap-5">
      <h1>Welcome!</h1>
      <p>
        I'm Brian Staruk, a software engineer from Boston, MA who specializes in
        building web applications using React, TypeScript, and Node.js.
      </p>
    </div>
  );
}
