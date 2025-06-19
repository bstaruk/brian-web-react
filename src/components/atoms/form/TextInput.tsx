import React from 'react';

type TextInputProps = React.InputHTMLAttributes<HTMLInputElement>;

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ type = 'text', ...props }, ref) => {
    return (
      <input
        className="p-2 bg-monster-400/75 text-monster-50 border border-monster-400 focus:border-monster-200 rounded-xs font-mono text-mono outline-0"
        {...{ ref, type }}
        {...props}
      />
    );
  },
);

TextInput.displayName = 'TextInput';
export default TextInput;
