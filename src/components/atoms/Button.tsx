import * as React from 'react';
import { createLink, type LinkComponent } from '@tanstack/react-router';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

interface ButtonLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: string;
}

const baseButtonClasses =
  'cursor-pointer font-medium uppercase text-shadow-xs p-2 bg-monster-400 text-monster-50 border border-monster-400 focus:border-monster-200 hover:underline rounded-xs shadow-xs text-sm outline-0';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, type = 'button', ...rest }, ref) => {
    return (
      <button
        {...rest}
        {...{ ref, type }}
        className={clsx(baseButtonClasses, className)}
      >
        {children}
      </button>
    );
  },
);

const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <a {...rest} {...{ ref }} className={clsx(baseButtonClasses, className)}>
        {children}
      </a>
    );
  },
);

const CreatedLinkComponent = createLink(ButtonLink);

export const RouterButtonLink: LinkComponent<typeof ButtonLink> = (props) => {
  return (
    <CreatedLinkComponent
      // activeProps={{ 'data-active': true }}
      preload={'intent'}
      {...props}
    />
  );
};

export default Button;
