import { createFileRoute } from '@tanstack/react-router';
import Link from 'atoms/Link';
import ThingIntro from 'molecules/ThingIntro';
import RsyncCmdForm from 'organisms/RsyncCmdForm';

export const Route = createFileRoute('/things/rsync-cmd')({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        name: 'description',
        content:
          'A tool for calculating values for use with the CSS clamp() function.',
      },
      {
        title: 'Rsync Command Generator | brian.staruk.net',
      },
    ],
  }),
});

function RouteComponent() {
  return (
    <div className="flex flex-col gap-8">
      <main className="flex flex-col gap-4">
        <ThingIntro
          title="Rsync Command Generator"
          content={
            <p>
              This tool generates{' '}
              <Link href="https://linux.die.net/man/1/rsync" target="_blank">
                rsync
              </Link>{' '}
              commands with various options. It is useful for syncing files
              between drives or servers, and backing up media collections.
            </p>
          }
        />

        <RsyncCmdForm />
      </main>
    </div>
  );
}
