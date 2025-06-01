import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import clsx from 'clsx';
import Link from 'atoms/Link';

interface SocialLinksProps {
  className?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ className }) => (
  <ul className={clsx('flex gap-4', className)}>
    <li>
      <Link
        href="https://github.com/bstaruk"
        target="_blank"
        rel="noopener noreferrer"
        variant="monster"
        className="flex"
        title="My GitHub Profile"
      >
        <FaGithub className="shrink-0 h-9 w-auto" />
        <span className="sr-only">GitHub</span>
      </Link>
    </li>

    <li>
      <Link
        href="https://www.linkedin.com/in/brian-staruk/"
        target="_blank"
        rel="noopener noreferrer"
        variant="monster"
        className="flex"
        title="My LinkedIn Profile"
      >
        <FaLinkedin className="shrink-0 h-9 w-auto" />
        <span className="sr-only">LinkedIn</span>
      </Link>
    </li>
  </ul>
);

export default SocialLinks;
