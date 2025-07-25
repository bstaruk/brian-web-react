import React from 'react';
import clsx from 'clsx';

type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement>;

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        type="checkbox"
        className={clsx(
          'w-4 h-4 bg-monster-400/75 border border-monster-400 focus:border-monster-200 rounded-xs text-monster-200 focus:ring-monster-200 focus:ring-2 focus:ring-offset-0 outline-0',
          className,
        )}
        {...{ ref }}
        {...props}
      />
    );
  },
);

Checkbox.displayName = 'Checkbox';
export default Checkbox;
