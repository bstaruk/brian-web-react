import { Link } from '@tanstack/react-router';
import clsx from 'clsx';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => (
  <Link
    to="/"
    className={clsx(
      'relative size-12 rounded-full border-5 border-monster-300 shadow-xs hover:border-monster-200 focus:border-monster-200 active:border-monster-200 outline-0',
      className,
    )}
  >
    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-h1 font-bold">
      B
    </span>
  </Link>
);

export default Logo;
