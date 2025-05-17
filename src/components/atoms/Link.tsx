import * as React from 'react';
import { createLink, type LinkComponent } from '@tanstack/react-router';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: string;
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, ...rest }, ref) => {
    return (
      <a
        {...rest}
        {...{ ref }}
        className="text-marathon-400 font-medium underline hover:no-underline"
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
