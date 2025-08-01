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
          'Free rsync command generator tool. Create rsync commands with various options for syncing files between drives, servers, and backing up media collections. Perfect for system administrators and developers.',
      },
      {
        title: 'Rsync Command Generator - File Sync Tool | Brian Staruk',
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
