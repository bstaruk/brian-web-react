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
    <div className="flex flex-col gap-8">
      <section className="flex flex-col gap-4">
        <h1>About Me</h1>

        <div className="flex flex-col gap-2">
          <p>
            👋 I&apos;m Brian, a web developer from{' '}
            <abbr title="Boston, MA, USA">Boston</abbr>. I&apos;ve been building
            for the net since 1999 -- professionally since 2005. For the past 6
            years, I&apos;ve been working with an amazing team of creative
            marketers at{' '}
            <Link
              href="https://mergeworld.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              MERGE
            </Link>{' '}
            to craft elegant, accessible user experiences for healthcare
            industry leaders including Blue Cross, Uconn Health and BVI Medical.
          </p>
          <p>
            These days, I am building almost exclusively with React, TypeScript
            and Tailwind on the front-end. I used to roll my own Webpack configs
            (
            <Link
              href="https://starbase.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              starbase.dev
            </Link>
            ) for everything, but now I use Vite for SPAs (like this one) and
            Next.js for everything else. On the back-end, I&apos;m mostly using
            Node.js, TypeScript, Fastify or Express, and Postgres.
          </p>
          <p>
            Oh, and I&apos;m a <strong>Certified ScrumMaster (CSM)</strong> and{' '}
            <strong>Certified Sitecore XM Cloud Developer</strong>!
          </p>
        </div>
      </section>

      <hr />

      <section className="flex flex-col gap-4">
        <h1>About This Project</h1>

        <div className="flex flex-col gap-2">
          <p>
            I recently moved my blog over to{' '}
            <Link
              href="https://leetbin.com/u/brian"
              target="_blank"
              rel="noopener noreferrer"
            >
              leetbin.com
            </Link>{' '}
            and most of my attention is focused on that project, but I&apos;ll
            be working on this domain when I feel like being more creative and
            as time permits.
          </p>

          <p>
            This project will be a collection of mini-apps. I have a bad habit
            of buying domains with plans of grandeur, only to abandon them in
            the <abbr title="Minimally Viable Product">MVP</abbr> stage like{' '}
            <Link
              href="https://cssclamp.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              cssclamp.dev
            </Link>
            . The idea is to start building them here instead with a unified UI
            to keep cost and effort to a minimum... with a totally open source!
          </p>
        </div>
      </section>
    </div>
  );
}
