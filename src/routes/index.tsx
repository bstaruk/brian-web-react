import { createFileRoute } from '@tanstack/react-router';
import { motion, useReducedMotion } from 'motion/react';
import { SocialLinks } from 'molecules';

export const Route = createFileRoute('/')({
  component: Index,
  head: () => ({
    meta: [
      { title: 'Brian Staruk — Web Developer from Boston' },
      {
        name: 'description',
        content:
          'Brian Staruk is a web developer from Boston, MA specializing in React, TypeScript, and modern frontend architecture.',
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
          Web Developer from Boston
        </p>
      </div>

      <div className="flex max-w-md flex-col gap-4 text-base text-sb-fg">
        <p>
          Frontend engineer at MERGE with a focus on React, TypeScript, and
          Tailwind CSS. Certified Sitecore Developer and Scrum Master.
        </p>
        <p>
          Passionate about building fast, accessible, and well-crafted web
          experiences.
        </p>
      </div>

      <SocialLinks />
    </motion.div>
  );
}
