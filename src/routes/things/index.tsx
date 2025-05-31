import { createFileRoute } from '@tanstack/react-router';
import ThingCard from 'molecules/ThingCard';

export const Route = createFileRoute('/things/')({
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
      <section className="flex flex-col gap-5">
        <h1>Things</h1>

        <ThingCard
          to="/things/css-clamp-calculator"
          title="CSS Clamp Calculator"
        >
          A tool for calculating values for use with the CSS{' '}
          <code>clamp()</code> function.
        </ThingCard>

        <ThingCard
          to="/things/auth-bookmark-maker"
          title="Authenticated Bookmark Maker"
        >
          A simple utility which generates a bookmarkable hyperlink to an
          authenticated page, bypassing the need for manually entering the
          username and password.
        </ThingCard>
      </section>
    </div>
  );
}
