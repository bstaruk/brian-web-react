import { createFileRoute } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import Link from 'atoms/Link';
import ThingCard from 'molecules/ThingCard';

export const Route = createFileRoute('/things/')({
  component: RouteComponent,
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

interface Thing {
  to: string;
  title: string;
  description: React.ReactNode;
}

const things: Thing[] = [
  {
    to: '/things/css-clamp-calculator',
    title: 'CSS Clamp Calculator',
    description: (
      <>
        A tool for calculating values for use with the CSS <code>clamp()</code>{' '}
        function.
      </>
    ),
  },
  {
    to: '/things/auth-bookmark-maker',
    title: 'Authenticated Bookmark Maker',
    description: (
      <>
        A simple utility which generates a bookmarkable hyperlink to an
        authenticated page, bypassing the need for manually entering the
        username and password.
      </>
    ),
  },
];

function RouteComponent() {
  return (
    <div className="flex flex-col gap-8">
      <motion.section
        className="flex flex-col gap-5"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col gap-3">
          <h1>Things</h1>
          <p>
            These are some things I've built, which wouldn't quite fit on{' '}
            <Link
              href="https://leetbin.com/u/brian"
              target="_blank"
              rel="noopener noreferrer"
            >
              my blog
            </Link>
            .
          </p>
        </div>

        {things.map(({ to, title, description }) => (
          <motion.div
            key={to}
            variants={{
              hidden: {
                opacity: 0,
                x: -20,
              },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  type: 'spring',
                  stiffness: 60,
                  damping: 12,
                },
              },
            }}
          >
            <ThingCard {...{ to, title }}>{description}</ThingCard>
          </motion.div>
        ))}
      </motion.section>
    </div>
  );
}
