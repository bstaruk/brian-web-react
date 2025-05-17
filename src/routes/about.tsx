import { createFileRoute } from '@tanstack/react-router';
import Link from '../components/atoms/Link';

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
    <div className="flex flex-col gap-5">
      <h1>About Page</h1>
      <p>Welcome to (what will eventually be) my website!</p>
      <p>
        I recently moved my blog over to{' '}
        <Link
          href="https://leetbin.com/u/brian"
          target="_blank"
          rel="noopener noreferrer"
        >
          leetbin.com
        </Link>{' '}
        and most of my attention is focused on that project, but I&apos;ll be
        working on this domain when I feel like being more creative and as time
        permits.
      </p>
    </div>
  );
}
