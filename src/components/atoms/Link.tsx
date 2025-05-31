import * as React from 'react';
import { createLink, type LinkComponent } from '@tanstack/react-router';
import clsx from 'clsx';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: string;
  variant?: 'marathon' | 'marathon-light';
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, variant = 'marathon', ...rest }, ref) => {
    return (
      <a
        {...rest}
        {...{ ref }}
        className={clsx('font-medium underline hover:no-underline', {
          'text-marathon-400 hover:text-marathon-100': variant === 'marathon',
          'text-marathon-200 hover:text-marathon-100':
            variant === 'marathon-light',
        })}
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
      activeProps={{ 'data-active': true }}
      preload={'intent'}
      {...props}
    />
  );
};

export default Link;
