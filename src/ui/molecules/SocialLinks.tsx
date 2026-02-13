import { LuGithub, LuLinkedin } from 'react-icons/lu';
import { ButtonLink } from 'atoms';

const links = [
  {
    href: 'https://github.com/bstaruk',
    label: 'GitHub',
    icon: LuGithub,
  },
  {
    href: 'https://www.linkedin.com/in/brian-staruk/',
    label: 'LinkedIn',
    icon: LuLinkedin,
  },
] as const;

export function SocialLinks() {
  return (
    <nav aria-label="Social links" className="flex items-center gap-2">
      {links.map(({ href, label, icon: Icon }) => (
        <ButtonLink
          key={label}
          href={href}
          variant="ghost"
          size="sm"
          className="p-2"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${label} (opens in new tab)`}
        >
          <Icon size={20} aria-hidden="true" />
        </ButtonLink>
      ))}
    </nav>
  );
}
