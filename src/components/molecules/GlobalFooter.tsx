import { FaGithub } from 'react-icons/fa6';
import clsx from 'clsx';
import Link from 'atoms/Link';

interface GlobalFooterProps {
  className?: string;
}

const GlobalFooter: React.FC<GlobalFooterProps> = ({ className }) => (
  <footer className={clsx('bg-monster-600 py-4', className)}>
    <div className="wrapper-page px-3 sm:px-5 md:px-8 flex flex-col xs:flex-row xs:items-center gap-x-4 gap-y-3 text-sm">
      <p className="xs:grow text-monster-200">
        Built in Boston. Let's go Red Sox!
      </p>

      <p>
        <Link
          href="https://github.com/bstaruk/brian-web-react"
          target="_blank"
          rel="noopener noreferrer"
          variant="monster"
        >
          <span className="flex items-center gap-2">
            <span>View Source</span>
            <FaGithub className="h-5 w-auto shrink-0" />
          </span>
        </Link>
      </p>
    </div>
  </footer>
);

export default GlobalFooter;
