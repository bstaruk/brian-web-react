import React from 'react';
import clsx from 'clsx';

type ColorInputProps = React.InputHTMLAttributes<HTMLInputElement>;

const ColorInput = React.forwardRef<HTMLInputElement, ColorInputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={clsx(
          'h-10 w-16 p-1 bg-monster-400/75 border border-monster-400 focus:border-monster-200 rounded-xs outline-0 cursor-pointer',
          className,
        )}
        type="color"
        {...{ ref }}
        {...props}
      />
    );
  },
);

ColorInput.displayName = 'ColorInput';
export default ColorInput;
