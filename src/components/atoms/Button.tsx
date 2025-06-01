import * as React from 'react';
import { createLink, type LinkComponent } from '@tanstack/react-router';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

interface ButtonLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

const baseButtonClasses =
  'cursor-pointer font-medium uppercase text-shadow-xs p-2 bg-monster-600 text-monster-50 hover:underline rounded-xs shadow-xs text-sm outline-0 hover:bg-monster-700 focus:bg-monster-700';

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
