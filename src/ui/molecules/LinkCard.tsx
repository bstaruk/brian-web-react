import { type ComponentType } from 'react';
import { LuArrowUpRight } from 'react-icons/lu';
import { cn } from 'utils';
import { Card, CardFooter } from 'atoms';

interface LinkCardProps {
  href: string;
  icon: ComponentType<{ size?: number }>;
  heading: string;
  description: string;
  linkText: string;
  className?: string;
}

export function LinkCard({
  href,
  icon: Icon,
  heading,
  description,
  linkText,
  className,
}: LinkCardProps) {
  return (
    <Card
      className={cn(
        'hover:bg-sb-surface-hover hover:border-sb-focus-ring',
        'has-[:focus-visible]:bg-sb-surface-hover has-[:focus-visible]:border-sb-focus-ring',
        className,
      )}
    >
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-center gap-2">
          <Icon size={24} aria-hidden="true" />
          <h3 className="line-clamp-1 text-h4 font-display text-sb-fg-title">
            {heading}
          </h3>
        </div>
        <p className="text-sm text-sb-fg-subtle">{description}</p>
      </div>
      <CardFooter>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${heading} — ${linkText} (opens in new tab)`}
          className="inline-flex items-center gap-1 text-sm text-sb-anchor outline-none after:absolute after:inset-0"
        >
          {linkText}
          <LuArrowUpRight size={14} aria-hidden="true" />
        </a>
      </CardFooter>
    </Card>
  );
}
