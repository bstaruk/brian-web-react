import { createFileRoute } from '@tanstack/react-router';
import AuthBookmarkForm from '../../components/organisms/AuthBookmarkForm';

export const Route = createFileRoute('/things/auth-bookmark-maker')({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        name: 'description',
        content: 'A simple tool for creating bookmarks to authenticated pages.',
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
        <h1>Authenticated Bookmark Maker</h1>

        <div className="flex flex-col gap-2">
          <AuthBookmarkForm />
        </div>
      </section>
    </div>
  );
}
