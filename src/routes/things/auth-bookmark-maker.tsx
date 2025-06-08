import { createFileRoute } from '@tanstack/react-router';
import AuthBookmarkForm from 'organisms/AuthBookmarkForm';
import Link from 'atoms/Link';
import ThingIntro from 'molecules/ThingIntro';

export const Route = createFileRoute('/things/auth-bookmark-maker')({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        name: 'description',
        content:
          'A tool for creating bookmarks to authenticated pages with pre-applied credentials.',
      },
      {
        title: 'Authenticated Bookmark Maker | brian.staruk.net',
      },
    ],
  }),
});

function RouteComponent() {
  return (
    <div className="flex flex-col gap-8">
      <section className="flex flex-col gap-4">
        <ThingIntro
          title="Authenticated Bookmark Maker"
          content={
            <>
              <p>
                This is a tool that most web developers are probably already
                familiar with: it generates a URL that pre-fills a predefined
                username & password on pages with basic authentication.
              </p>
              <p>
                It's useful for times when we need authentication to prevent
                non-production environments from being indexed by Google, but
                the username & password are openly shared among internal teams.
                Pin one of these URLs to your Slack channel to avoid getting 10
                messages a day asking for the credentials.
              </p>
            </>
          }
        />

        <AuthBookmarkForm />

        <p className="text-sm">
          <strong>NOTE:</strong> Nothing you enter here is persisted in any way,
          or sent anywhere. The form processing logic is performed entirely
          within your browser. There are no analytics, ads or any other kind of
          tracking on this website. All source code is available on{' '}
          <Link
            href="https://github.com/bstaruk/brian-web-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
