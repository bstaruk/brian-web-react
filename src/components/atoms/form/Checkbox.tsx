import React from 'react';
import clsx from 'clsx';
import { FaCheck } from 'react-icons/fa';

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  description?: string;
  hasError?: boolean;
  hideLabel?: boolean;
  label: string;
  checkboxSize?: 'sm' | 'md';
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      checkboxSize = 'md',
      className,
      description,
      hasError,
      hideLabel,
      label,
      ...props
    },
    ref,
  ) => {
    const isDisabled = props.disabled || props.readOnly;

    return (
      <label
        className={clsx(
          'flex',
          {
            'cursor-pointer': !isDisabled,
            'cursor-not-allowed': isDisabled,
            'items-start': !!description,
            'items-center': !description,
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
            'flex items-center justify-center border rounded-xs transition-colors peer-focus:ring-0 [&_svg]:opacity-0 peer-checked:[&_svg]:opacity-100',
            {
              'mt-0.5': !!description,
              'size-5': checkboxSize === 'sm',
              'size-6': checkboxSize === 'md',
              'border-red-800': hasError,
              'bg-monster-400/75 border-monster-400 peer-focus:border-monster-200 peer-active:border-monster-200':
                !hasError && !isDisabled,
              'bg-stone-200 border-stone-400': !hasError && isDisabled,
            },
          )}
        >
          <FaCheck
            className={clsx('shrink-0 w-auto  fill-marathon-400', {
              'h-3.25': checkboxSize === 'sm',
              'h-3.75': checkboxSize === 'md',
            })}
          />
        </span>

        <span
          className={clsx({
            'flex flex-col': !!description,
            'line-clamp-1': !description,
            'text-sm': checkboxSize === 'sm',
            'sr-only': hideLabel,
          })}
        >
          <span className="uppercase font-medium">{label}</span>

          {description && (
            <span className="text-monster-200">{description}</span>
          )}
        </span>
      </label>
    );
  },
);

Checkbox.displayName = 'Checkbox';
export default Checkbox;
