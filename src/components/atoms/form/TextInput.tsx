import React from 'react';
import clsx from 'clsx';

type TextInputProps = React.InputHTMLAttributes<HTMLInputElement>;

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ className, type = 'text', ...props }, ref) => {
    return (
      <input
        className={clsx(
          'p-2 bg-monster-400/75 text-monster-50 border border-monster-400 focus:border-monster-200 rounded-xs font-mono text-mono outline-0',
          className,
        )}
        {...{ ref, type }}
        {...props}
      />
    );
  },
);

TextInput.displayName = 'TextInput';
export default TextInput;
