import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/things')({
  component: Things,
  head: () => ({
    meta: [
      {
        name: 'description',
        content: 'Things made by Brian Staruk.',
      },
      {
        title: 'Things | brian.staruk.net',
      },
    ],
  }),
});

function Things() {
  return (
    <div className="flex flex-col gap-8">
      <section className="flex flex-col gap-4">
        <h1>Things</h1>

        <div className="flex flex-col gap-2">
          <p>Coming soon!</p>
        </div>
      </section>
    </div>
  );
}
