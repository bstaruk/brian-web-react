import React from 'react';
import clsx from 'clsx';
import { FaCheck } from 'react-icons/fa';

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
  hideLabel?: boolean;
  label: string;
  checkboxSize?: 'sm' | 'md';
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    { checkboxSize = 'md', className, hasError, hideLabel, label, ...props },
    ref,
  ) => {
    const isDisabled = props.disabled || props.readOnly;

    return (
      <label
        className={clsx(
          'flex items-center',
          {
            'cursor-pointer': !isDisabled,
            'cursor-not-allowed': isDisabled,
            'gap-2.5': checkboxSize === 'md',
            'gap-2': checkboxSize === 'sm',
          },
          className,
        )}
      >
        <input
          {...props}
          ref={ref}
          type="checkbox"
          className="peer absolute opacity-0 w-0 h-0"
        />

        <span
          aria-hidden="true"
          className={clsx(
            'flex items-center justify-center border-2 rounded-xs transition-colors peer-focus:ring-0 [&_svg]:opacity-0 peer-checked:[&_svg]:opacity-100',
            {
              'size-6': checkboxSize === 'sm',
              'size-7': checkboxSize === 'md',
              'border-red-800': hasError,
              'bg-monster-600 border-monster-300 peer-focus:border-monster-200 peer-active:border-monster-200':
                !hasError && !isDisabled,
              'bg-stone-200 border-stone-400': !hasError && isDisabled,
            },
          )}
        >
          <FaCheck
            className={clsx('shrink-0 w-auto  fill-marathon-400', {
              'h-3.5': checkboxSize === 'sm',
              'h-4': checkboxSize === 'md',
            })}
          />
        </span>

        <span
          className={clsx('line-clamp-1', {
            'text-sm': checkboxSize === 'sm',
            'sr-only': hideLabel,
          })}
        >
          {label}
        </span>
      </label>
    );
  },
);

Checkbox.displayName = 'Checkbox';
export default Checkbox;
