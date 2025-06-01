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
  'cursor-pointer font-medium uppercase py-2 px-3 bg-monster-700 hover:bg-monster-800 focus:bg-monster-800 text-monster-50 [svg&]fill-monster-50 hover:underline focus:underline rounded-xs font-sans text-base outline-0';

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
