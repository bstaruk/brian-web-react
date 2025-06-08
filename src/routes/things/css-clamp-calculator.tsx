import { createFileRoute } from '@tanstack/react-router';
import Link from 'atoms/Link';
import ThingIntro from 'molecules/ThingIntro';
import ClampCalculatorForm from 'organisms/ClampCalculatorForm';

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
