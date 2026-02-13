import { DarkModeToggle } from 'molecules';

export function SiteHeader() {
  return (
    <header className="flex items-center justify-end py-3">
      <DarkModeToggle />
    </header>
  );
}
