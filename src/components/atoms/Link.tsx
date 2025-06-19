import * as React from 'react';
import { createLink, type LinkComponent } from '@tanstack/react-router';
import clsx from 'clsx';

interface BaseButtonProps {
  variant?: 'marathon' | 'marathon-light' | 'white' | 'monster';
  weight?: 'none' | 'normal' | 'medium' | 'bold';
}

export type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  BaseButtonProps;
export type LinkButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  BaseButtonProps;

const linkClassNames = (
  variant: BaseButtonProps['variant'],
  weight: BaseButtonProps['weight'],
  className?: string,
) => {
  return clsx(
    className,
    'hover:underline focus:underline outline-0',
    // weights
    {
      'font-normal': weight === 'normal',
      'font-medium': weight === 'medium',
      'font-bold': weight === 'bold',
    },
    // variants
    {
      'text-marathon-400 hover:text-marathon-100 focus:text-marathon-100 [svg&]fill-marathon-400 hover:[svg&]fill-marathon-100 focus:[svg&]fill-marathon-100':
        variant === 'marathon',
      'text-marathon-200 hover:text-marathon-100 focus:text-marathon-100 [svg&]fill-marathon-200 hover:[svg&]fill-marathon-100 focus:[svg&]fill-marathon-100':
        variant === 'marathon-light',
      'text-stone-100 [svg&]fill-stone-100': variant === 'white',
      'text-monster-100 hover:text-monster-50 focus:text-monster-50 [svg&]fill-monster-100 hover:[svg&]fill-monster-50 focus:[svg&]fill-monster-50':
        variant === 'monster',
    },
  );
};

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    { children, className, variant = 'marathon', weight = 'medium', ...rest },
    ref,
  ) => {
    return (
      <a
        {...rest}
        {...{ ref }}
        className={linkClassNames(variant, weight, className)}
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

export const LinkButton = React.forwardRef<HTMLButtonElement, LinkButtonProps>(
  (
    {
      children,
      className,
      type = 'button',
      variant = 'marathon',
      weight = 'medium',
      ...rest
    },
    ref,
  ) => {
    return (
      <button
        {...rest}
        {...{ ref, type }}
        className={linkClassNames(variant, weight, className)}
      >
        {children}
      </button>
    );
  },
);

export default Link;
