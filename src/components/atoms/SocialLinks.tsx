import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import Link from 'atoms/Link';

const SocialLinks = () => (
  <ul className="flex gap-1 px-2 mt-4">
    <li>
      <Link
        href="https://github.com/bstaruk"
        target="_blank"
        rel="noopener noreferrer"
        variant="monster"
        className="flex px-2"
        title="My GitHub Profile"
      >
        <FaGithub className="shrink-0 h-8 w-auto" />
        <span className="sr-only">GitHub</span>
      </Link>
    </li>

    <li>
      <Link
        href="https://www.linkedin.com/in/brian-staruk/"
        target="_blank"
        rel="noopener noreferrer"
        variant="monster"
        className="flex px-2"
        title="My LinkedIn Profile"
      >
        <FaLinkedin className="shrink-0 h-8 w-auto" />
        <span className="sr-only">LinkedIn</span>
      </Link>
    </li>
  </ul>
);

export default SocialLinks;
