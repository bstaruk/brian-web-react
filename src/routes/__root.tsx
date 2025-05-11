import { createRootRoute, HeadContent } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import AppLayout from '../AppLayout';

export const Route = createRootRoute({
  component: () => (
    <>
      <HeadContent />
      <AppLayout />
      <TanStackRouterDevtools />
    </>
  ),
});
