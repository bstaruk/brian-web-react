import { createFileRoute } from '@tanstack/react-router';
import AuthBookmarkForm from '../components/organisms/AuthBookmarkForm';

export const Route = createFileRoute('/things')({
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

        <div className="flex flex-col gap-2">
          <AuthBookmarkForm />
        </div>
      </section>
    </div>
  );
}
