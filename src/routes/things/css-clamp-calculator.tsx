import { createFileRoute } from '@tanstack/react-router';
import AuthBookmarkForm from 'organisms/AuthBookmarkForm';

export const Route = createFileRoute('/things/css-clamp-calculator')({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        name: 'description',
        content:
          'A tool for calculating values for use with the CSS clamp() function.',
      },
      {
        title: 'CSS Clamp Calculator | brian.staruk.net',
      },
    ],
  }),
});

function RouteComponent() {
  return (
    <div className="flex flex-col gap-8">
      <section className="flex flex-col gap-4">
        <h1>CSS Clamp Calculator</h1>

        <div className="flex flex-col gap-3">
          <p>Coming soon!</p>
        </div>

        <hr />

        <AuthBookmarkForm />
      </section>
    </div>
  );
}
