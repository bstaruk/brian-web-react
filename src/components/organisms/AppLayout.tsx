import { useEffect, useRef, useState } from 'react';
import { Outlet } from '@tanstack/react-router';
import { FaGithub, FaBars, FaX } from 'react-icons/fa6';
import ScoreboardDot from '../atoms/ScoreboardDot';
import ScoreboardNumber from '../atoms/ScoreboardNumber';
import ScoreboardLink from '../molecules/ScoreboardLink';

const menuItems: { name: string; path: string }[] = [
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
    <div className="h-screen wrapper-page px-3 sm:px-5 md:px-8 flex flex-col gap-5">
      <header className="flex items-center flex-wrap gap-x-3 gap-y-2 pt-5">
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

        <div className="text-title uppercase text-shadow-xs text-shadow-monster-700">
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

            {menuItems.map((item) => (
              <ScoreboardLink
                key={item.name}
                to={item.path}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </ScoreboardLink>
            ))}
          </nav>
        </aside>

        {/* Desktop Sidebar */}
        <aside className="hidden lg:block shrink-0 py-2 border-r border-monster-300 pr-8">
          <div className="sticky top-2 flex flex-col gap-6 items-stretch">
            <nav className="flex flex-col items-start gap-2 uppercase">
              {menuItems.map((item) => (
                <ScoreboardLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </ScoreboardLink>
              ))}
            </nav>

            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <ScoreboardDot size="lg" variant="green-on" />
                <ScoreboardDot size="lg" variant="green-on" />
                <ScoreboardDot size="lg" variant="green" />
              </div>

              <div className="flex gap-2">
                <ScoreboardDot size="lg" variant="red-on" />
                <ScoreboardDot size="lg" variant="red" />
              </div>

              <div>
                <ScoreboardNumber value={25} />
              </div>
            </div>
          </div>
        </aside>

        <section className="grow shrink py-2">
          <Outlet />
        </section>
      </main>

      <footer className="border-t border-monster-400 py-4 uppercase">
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
