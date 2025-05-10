import {
  createRootRoute,
  HeadContent,
  Link,
  Outlet,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

// It's the layout component
export const Route = createRootRoute({
  component: () => (
    <>
      <HeadContent />

      <main className="flex h-screen py-10 gap-8 wrapper-page">
        <aside className="min-w-40 shrink-0 flex flex-col items-stretch py-4">
          <nav className="grow flex flex-col gap-2 border-r border-stone-300 pr-8 uppercase">
            <Link to="/" className="[&.active]:font-bold">
              Home
            </Link>{' '}
            <Link to="/about" className="[&.active]:font-bold">
              About
            </Link>
          </nav>
        </aside>

        <section className="grow shrink overflow-y-auto py-4">
          <Outlet />
        </section>
      </main>

      <TanStackRouterDevtools />
    </>
  ),
});
