import { useEffect, useRef, useState } from 'react';
import { Link, Outlet } from '@tanstack/react-router';
import { FaGithub, FaBars, FaX } from 'react-icons/fa6';

const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
];

export default function AppLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (menuOpen) firstLinkRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  return (
    <div className="h-screen wrapper-page p-3 sm:p-5 md:p-8 lg:p-10 flex flex-col gap-5">
      <header className="text-title uppercase flex items-center flex-wrap gap-x-3 gap-y-2">
        {/* Hamburger Button (mobile only) */}
        <button
          onClick={() => setMenuOpen(true)}
          className="lg:hidden bg-monster-700 rounded-sm shrink-0 p-2 focus:outline-none focus-visible:ring cursor-pointer"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-sidebar"
        >
          <FaBars className="h-4 w-auto" />
        </button>

        <div>
          brian<span className="text-monster-400">.</span>staruk
          <span className="text-monster-400">.net</span>
        </div>
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
          className={`fixed inset-y-0 left-0 z-40 bg-monster-500 dark:bg-black min-w-[300px] max-w-[80vw] border-r border-monster-300 transform transition-transform duration-300 ease-in-out
            ${menuOpen ? 'translate-x-0' : '-translate-x-full'} lg:hidden`}
          role="dialog"
          aria-modal="true"
        >
          <nav className="flex flex-col gap-2 p-4 uppercase">
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="self-end mb-4 inline-flex items-center justify-center p-2 focus:outline-none focus-visible:ring cursor-pointer"
            >
              <FaX className="h-4 w-auto" />
            </button>

            {menuItems.map((item, i) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                ref={i === 0 ? firstLinkRef : undefined}
                className="group grid grid-cols-8 gap-1 leading-none font-bold text-h5"
              >
                {item.name.split('').map((char, j) => (
                  <span
                    key={j}
                    className="relative aspect-square size-full bg-monster-300/50 inset-shadow-sm shadow-monster-900 flex items-center justify-center group-[&.active]:bg-monster-300/75"
                  >
                    {char}
                  </span>
                ))}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Desktop Sidebar */}
        <aside className="hidden lg:flex w-50 shrink-0 flex-col items-stretch py-4">
          <nav className="grow flex flex-col gap-2 border-r border-monster-300 pr-8 uppercase">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="group grid grid-cols-5 gap-1 leading-none font-bold text-h5"
              >
                {item.name.split('').map((char, i) => (
                  <span
                    key={i}
                    className="relative aspect-square size-full bg-monster-300/50 inset-shadow-sm shadow-monster-900 flex items-center justify-center group-[&.active]:bg-monster-300/75"
                  >
                    {char}
                  </span>
                ))}
              </Link>
            ))}
          </nav>
        </aside>

        <section className="grow shrink overflow-y-auto py-4">
          <Outlet />
        </section>
      </main>

      <footer className="border-t border-monster-400 pt-4 uppercase">
        <p className="text-sm tracking-wider">
          <a
            href="https://github.com/bstaruk/brian-web-react"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-medium"
          >
            <FaGithub className="h-5 w-auto" />
            <span>View Source</span>
          </a>
        </p>
      </footer>
    </div>
  );
}
