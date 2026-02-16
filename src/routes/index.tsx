import { createFileRoute } from '@tanstack/react-router';
import { HomePage } from 'templates';

export const Route = createFileRoute('/')({
  component: HomePage,
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
