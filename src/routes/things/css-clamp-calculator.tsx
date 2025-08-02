import { createFileRoute } from '@tanstack/react-router';
import { Link, ThingIntro, ClampCalculatorForm } from 'components';

export const Route = createFileRoute('/things/css-clamp-calculator')({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        name: 'description',
        content:
          'CSS clamp() calculator tool. Generate responsive CSS values that scale linearly between breakpoints. Perfect for fluid typography and responsive design.',
      },
      {
        title: 'CSS Clamp Calculator | A Thing by Brian Staruk',
      },
    ],
  }),
});

function RouteComponent() {
  return (
    <div className="flex flex-col gap-8">
      <main className="flex flex-col gap-4">
        <ThingIntro
          title="CSS Clamp Calculator"
          content={
            <p>
              This calculator generates a{' '}
              <Link
                href="https://developer.mozilla.org/en-US/docs/Web/CSS/clamp"
                target="_blank"
              >
                CSS clamp()
              </Link>{' '}
              value that scales linearly (in rem) between two breakpoints (in
              px). The minimum value is used for viewports below the lower
              breakpoint, and vice versa for the maximum.
            </p>
          }
        />

        <ClampCalculatorForm />
      </main>
    </div>
  );
}
