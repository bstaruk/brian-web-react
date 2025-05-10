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
    <div>
      <h1>Home Page</h1>
    </div>
  );
}
