import { type HTMLAttributes, type ReactNode } from 'react';
import { cn } from 'utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Card({ children, className, ...rest }: CardProps) {
  return (
    <div
      className={cn(
        'relative flex h-full flex-col rounded-lg border border-sb-divider-subtle',
        'text-left text-sb-fg',
        'motion-safe:transition-colors motion-safe:duration-150',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

export function CardFooter({ children, className, ...rest }: CardFooterProps) {
  return (
    <div
      className={cn(
        'border-t border-sb-divider-faint bg-sb-surface-tint px-4 py-2.5',
        'rounded-b-lg',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
