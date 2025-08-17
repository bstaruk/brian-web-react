import { createFileRoute } from '@tanstack/react-router';
import { ThingIntro, ColorScaleForm } from 'components';

export const Route = createFileRoute('/things/tailwind-color-scale-maker')({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        name: 'description',
        content: 'Generate Tailwind CSS color scales from a single hex color.',
      },
      {
        title: 'Tailwind CSS Color Scale Maker | A Thing by Brian Staruk',
      },
    ],
  }),
});

function RouteComponent() {
  return (
    <div className="flex flex-col gap-8">
      <main className="flex flex-col gap-4">
        <ThingIntro
          title="Tailwind CSS Color Scale Generator"
          content={
            <p>
              This tool generates Tailwind CSS color scales (50, 100, 200, etc.)
              from a single hex color.
            </p>
          }
        />

        <ColorScaleForm />
      </main>
    </div>
  );
}
