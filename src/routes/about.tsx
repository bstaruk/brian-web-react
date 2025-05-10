import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
  component: About,
  head: () => ({
    meta: [
      {
        name: 'description',
        content: 'About page of brian.staruk.net.',
      },
      {
        title: 'About | brian.staruk.net',
      },
    ],
  }),
});

function About() {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}
