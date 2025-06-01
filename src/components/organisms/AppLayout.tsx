import { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation } from '@tanstack/react-router';
import { FaBars, FaX } from 'react-icons/fa6';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { RouterLink } from 'atoms/Link';
import Button from 'atoms/Button';
import Logo from 'atoms/Logo';
import SocialLinks from 'atoms/SocialLinks';
import GlobalFooter from 'molecules/GlobalFooter';

const menuItems: { name: string; path: string }[] = [
  { name: 'Home', path: '/' },
  { name: 'Things', path: '/things' },
];

export default function AppLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const pathname = useLocation({
    select: (location) => location.pathname,
  });

  useEffect(() => {
    if (menuOpen) firstLinkRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  return (
    <div className="h-screen flex flex-col gap-5">
      <div className="grow wrapper-page pt-3 sm:pt-5 md:pt-8 px-3 sm:px-5 md:px-8 flex flex-col gap-5">
        <header className="w-full flex items-center justify-between sm:justify-start gap-x-3 gap-y-2">
          <Logo />

          <div className="hidden sm:block grow text-title uppercase text-shadow-xs text-shadow-monster-700">
            brian<span className="text-monster-400">.</span>staruk
            <span className="text-monster-400">.net</span>
          </div>

          {/* Hamburger Button (mobile only) */}
          <Button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden shrink-0 size-9 flex items-center justify-center"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-sidebar"
          >
            {menuOpen ? (
              <FaX className="h-3.5 w-auto" />
            ) : (
              <FaBars className="h-4 w-auto" />
            )}
          </Button>
        </header>

        <main className="grow flex gap-8 relative">
          {/* Overlay when menu is open */}
          {menuOpen && (
            <div
              className="fixed inset-0 bg-monster-950/70 z-30 lg:hidden"
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />
          )}

          {/* Mobile Sidebar (off-canvas) */}
          <aside
            id="mobile-sidebar"
            className={clsx(
              'fixed inset-y-0 right-0 z-40 bg-monster-500 dark:bg-black min-w-[280px] max-w-[90vw] p-3 sm:p-5 md:p-8 border-r border-monster-300 transform transition-transform duration-300 ease-in-out lg:hidden',
              {
                'translate-x-0 opacity-100': menuOpen,
                'translate-x-2/3 opacity-0 pointer-events-none': !menuOpen,
              },
            )}
            role="dialog"
            aria-modal="true"
          >
            <nav className="flex flex-col gap-1 uppercase text-h3">
              <Button
                onClick={() => setMenuOpen(false)}
                className="self-end shrink-0 size-9 flex items-center justify-center"
              >
                <FaX className="h-3.5 w-auto" />
                <span className="sr-only">Close menu</span>
              </Button>

              {menuItems.map((item) => (
                <RouterLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  aria-current={pathname === item.path ? 'page' : undefined}
                  variant={
                    pathname === item.path ? 'marathon-light' : 'marathon'
                  }
                  className="py-2"
                >
                  {item.name}
                </RouterLink>
              ))}
            </nav>

            <SocialLinks className="mt-6" />
          </aside>

          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-50 shrink-0 px-2 py-3 bg-monster-400 rounded-xs shadow-xs">
            <div className="sticky top-2 flex flex-col gap-6 items-stretch">
              <nav className="flex flex-col uppercase text-h4">
                {menuItems.map((item) => (
                  <RouterLink
                    className="px-4 py-2"
                    key={item.name}
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    aria-current={pathname === item.path ? 'page' : undefined}
                    variant={
                      pathname === item.path ? 'marathon-light' : 'marathon'
                    }
                  >
                    {item.name}
                  </RouterLink>
                ))}
              </nav>

              <SocialLinks className="px-4" />
            </div>
          </aside>

          <section className="grow shrink py-2">
            <AnimatePresence mode="wait">
              <OutletWithTransition />
            </AnimatePresence>
          </section>
        </main>
      </div>

      <GlobalFooter />
    </div>
  );
}

function OutletWithTransition() {
  const pathname = useLocation({
    select: (location) => location.pathname,
  });

  return (
    <motion.div
      key={pathname}
      initial={{ x: -10, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -10, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <Outlet />
    </motion.div>
  );
}
