import {
  createRootRoute,
  HeadContent,
  Link,
  Outlet,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

const menuItems = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About',
    path: '/about',
  },
];

// It's the layout component
export const Route = createRootRoute({
  component: () => (
    <>
      <HeadContent />

      <div className="h-screen wrapper-page py-5 md:py-8 lg:py-10 flex flex-col gap-5">
        <header className="text-title uppercase">
          brian<span className="text-monster-400 px-0.5">.</span>staruk
          <span className="text-monster-400 pl-0.5">.net</span>
        </header>

        <main className="grow flex gap-8">
          <aside className="min-w-40 shrink-0 flex flex-col items-stretch py-4">
            <nav className="grow flex flex-col gap-2 border-r border-monster-300 pr-8 uppercase">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="[&.active]:font-bold"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </aside>

          <section className="grow shrink overflow-y-auto py-4">
            <Outlet />
          </section>
        </main>

        <footer className="border-t border-monster-400 pt-4">
          <p>hi mom</p>
        </footer>
      </div>

      <TanStackRouterDevtools />
    </>
  ),
});
