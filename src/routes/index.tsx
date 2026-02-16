import { createFileRoute } from '@tanstack/react-router';
import { motion, useReducedMotion } from 'motion/react';
import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa6';
import { LuNotebookPen, LuRocket } from 'react-icons/lu';
import { LinkCard } from 'molecules';

export const Route = createFileRoute('/')({
  component: Index,
  head: () => ({
    meta: [
      { title: 'Brian Staruk — Web Developer from Boston' },
      {
        name: 'description',
        content:
          'Brian Staruk is a full-stack web developer from Boston with 20 years of experience building fast, accessible web experiences.',
      },
    ],
  }),
});

function Index() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="flex flex-col items-center gap-8 text-center"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : { duration: 0.5, ease: 'easeOut' }
      }
    >
      <div className="flex flex-col items-center gap-3">
        <h1 className="font-display text-sb-fg-title">Brian Staruk</h1>
        <p className="text-h3 font-display text-sb-fg-subtle">
          Full-Stack Web Developer from Boston
        </p>
      </div>

      <p className="max-w-[52ch] text-base text-sb-fg">
        Software engineer and development team lead at MERGE with over 20 years
        of professional experience building for the web.
      </p>

      <nav
        aria-label="Links"
        className="grid w-full max-w-2xl grid-cols-2 gap-4"
      >
        <LinkCard
          href="https://github.com/bstaruk"
          icon={FaGithubAlt}
          heading="GitHub"
          description="Open source projects and contributions"
          linkText="github.com/bstaruk"
        />
        <LinkCard
          href="https://www.linkedin.com/in/brian-staruk/"
          icon={FaLinkedinIn}
          heading="LinkedIn"
          description="Professional profile and network"
          linkText="linkedin.com/in/brian-staruk"
        />
        <LinkCard
          href="https://nidobin.com/u/brian"
          icon={LuNotebookPen}
          heading="Blog"
          description="Writing about web development"
          linkText="nidobin.com"
        />
        <LinkCard
          href="https://starbase.dev"
          icon={LuRocket}
          heading="Starbase"
          description="Web DX boilerplate for React"
          linkText="starbase.dev"
        />
      </nav>
    </motion.div>
  );
}
