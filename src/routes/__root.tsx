import { createRootRoute, HeadContent } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import AppLayout from 'organisms/AppLayout';

export const Route = createRootRoute({
  component: () => (
    <>
      <HeadContent />
      <AppLayout />
      <TanStackRouterDevtools />
    </>
  ),
});
