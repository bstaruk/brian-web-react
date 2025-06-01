import clsx from 'clsx';
import { Link } from '@tanstack/react-router';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => (
  <Link
    to="/"
    className={clsx(
      'size-11 rounded-full border-4 border-monster-300 flex items-center justify-center shadow-xs hover:border-monster-200 focus:border-monster-200 active:border-monster-200 outline-0',
      className,
    )}
  >
    <div className="text-h2 font-bold translate-x-0.25">B</div>
  </Link>
);

export default Logo;
