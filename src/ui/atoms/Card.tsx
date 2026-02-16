import { type HTMLAttributes, type ReactNode } from 'react';
import { cn } from 'utils';

interface CardProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Card({ children, className, ...rest }: CardProps) {
  return (
    <article
      className={cn(
        'relative flex flex-col rounded-lg border border-sb-divider/30',
        'text-left text-sb-fg',
        'motion-safe:transition-colors motion-safe:duration-150',
        className,
      )}
      {...rest}
    >
      {children}
    </article>
  );
}

export function CardFooter({ children, className, ...rest }: CardFooterProps) {
  return (
    <div
      className={cn(
        'border-t border-sb-divider/20 bg-sb-fg/[0.03] px-4 py-2.5',
        'rounded-b-lg',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
