import { createFileRoute } from '@tanstack/react-router';
import { RouterLink } from 'atoms/Link';

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
      <section className="flex flex-col gap-4">
        <h1>Things</h1>

        <div className="flex flex-col gap-3">
          <article className="relative flex flex-col gap-1.5">
            <h5>
              <RouterLink
                to="/things/auth-bookmark-maker"
                className="after:absolute after:inset-0 after:size-full"
              >
                Authenticated Bookmark Maker
              </RouterLink>
            </h5>

            <p>
              A simple utility which generates a bookmarkable hyperlink to an
              authenticated page, bypassing the need for manually entering the
              username and password.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
