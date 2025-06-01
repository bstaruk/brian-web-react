import type { IconType } from 'react-icons';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import clsx from 'clsx';
import Link from 'atoms/Link';

interface SocialLinksProps {
  className?: string;
}

interface SocialLink {
  href: string;
  label: string;
  title: string;
  icon: IconType;
}

const socialLinks: SocialLink[] = [
  {
    href: 'https://github.com/bstaruk',
    label: 'GitHub',
    title: 'My GitHub Profile',
    icon: FaGithub,
  },
  {
    href: 'https://www.linkedin.com/in/brian-staruk/',
    label: 'LinkedIn',
    title: 'My LinkedIn Profile',
    icon: FaLinkedin,
  },
];

const SocialLinks: React.FC<SocialLinksProps> = ({ className }) => (
  <ul className={clsx('flex gap-4', className)}>
    {socialLinks.map(({ href, label, title, icon: Icon }) => (
      <li key={label}>
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          variant="monster"
          className="flex"
          title={title}
        >
          <Icon className="shrink-0 h-9 w-auto" />
          <span className="sr-only">{label}</span>
        </Link>
      </li>
    ))}
  </ul>
);

export default SocialLinks;
