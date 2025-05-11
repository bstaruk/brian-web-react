import * as React from 'react';
import { createLink, type LinkComponent } from '@tanstack/react-router';

interface ScoreboardLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: string;
}

const ScoreboardLink = React.forwardRef<HTMLAnchorElement, ScoreboardLinkProps>(
  ({ children, ...rest }, ref) => {
    return (
      <a
        {...rest}
        {...{ ref }}
        className="group flex gap-1.5 leading-none font-bold text-h5"
      >
        {children.split('').map((char, i) => (
          <span
            key={i}
            className="relative size-7.5 flex items-center justify-center bg-monster-300/50 inset-shadow-sm shadow-monster-900 group-data-[active=true]:bg-monster-300/75 text-shadow-xs text-shadow-monster-700"
          >
            {char}
          </span>
        ))}
      </a>
    );
  },
);

const CreatedLinkComponent = createLink(ScoreboardLink);

export const CustomLink: LinkComponent<typeof ScoreboardLink> = (props) => {
  return (
    <CreatedLinkComponent
      activeProps={{ 'data-active': true }}
      preload={'intent'}
      {...props}
    />
  );
};

export default CustomLink;
