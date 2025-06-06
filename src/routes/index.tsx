import { createFileRoute } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import Link from 'atoms/Link';

export const Route = createFileRoute('/')({
  component: Home,
  head: () => ({
    meta: [
      {
        name: 'description',
        content: 'Home page of brian.staruk.net.',
      },
      {
        title: 'Home | brian.staruk.net',
      },
    ],
  }),
});

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const paragraphVariants = {
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
      damping: 14,
    },
  },
};

function Home() {
  return (
    <div className="flex flex-col gap-8">
      <section className="flex flex-col gap-4">
        <h1>Welcome!</h1>

        <motion.div
          className="flex flex-col gap-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={paragraphVariants}>
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
          </motion.p>

          <motion.p variants={paragraphVariants}>
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
          </motion.p>

          <motion.p variants={paragraphVariants}>
            Oh, and I&apos;m a <strong>Certified ScrumMaster (CSM)</strong> and{' '}
            <strong>Certified Sitecore XM Cloud Developer</strong>!
          </motion.p>
        </motion.div>
      </section>

      <hr />

      <section className="flex flex-col gap-4">
        <h2>Why?</h2>

        <motion.div
          className="flex flex-col gap-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={paragraphVariants}>
            In early 2025, I built a markdown-powered dev blog platform for
            myself at{' '}
            <Link
              href="https://leetbin.com/u/brian"
              target="_blank"
              rel="noopener noreferrer"
            >
              leetbin.com
            </Link>
            , so I am repurposing my personal site into a collection of tools
            and experiments as a vehicle for exploring new technologies on my
            free time.
          </motion.p>
        </motion.div>
      </section>
    </div>
  );
}
