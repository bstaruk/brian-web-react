import * as React from 'react';
import { createLink, type LinkComponent } from '@tanstack/react-router';
import clsx from 'clsx';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: string;
  variant?: 'marathon' | 'marathon-light';
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, className, variant = 'marathon', ...rest }, ref) => {
    return (
      <a
        {...rest}
        {...{ ref }}
        className={clsx(
          className,
          'font-medium hover:underline focus:underline outline-0',
          {
            'text-marathon-400 hover:text-marathon-100 focus:text-marathon-100':
              variant === 'marathon',
            'text-marathon-200 hover:text-marathon-100 focus:text-marathon-100':
              variant === 'marathon-light',
          },
        )}
      >
        {children}
      </a>
    );
  },
);

const CreatedLinkComponent = createLink(Link);

export const RouterLink: LinkComponent<typeof Link> = (props) => {
  return (
    <CreatedLinkComponent
      // activeProps={{ 'data-active': true }}
      preload={'intent'}
      {...props}
    />
  );
};

export default Link;
