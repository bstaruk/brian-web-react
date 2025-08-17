import { createFileRoute } from '@tanstack/react-router';
import { ThingIntro } from 'components';

export const Route = createFileRoute('/things/tailwind-css-gradients')({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        name: 'description',
        content:
          'Generate beautiful, customizable gradients from a single hex color.',
      },
      {
        title: 'Tailwind CSS Gradients | A Thing by Brian Staruk',
      },
    ],
  }),
});

function RouteComponent() {
  return (
    <div className="flex flex-col gap-8">
      <main className="flex flex-col gap-4">
        <ThingIntro
          title="Tailwind CSS Gradient Generator"
          content={
            <p>
              This tool generates beautiful, customizable gradients from a
              single hex color using Tailwind CSS classes.
            </p>
          }
        />

        <p>Coming soon...</p>
      </main>
    </div>
  );
}
