import React from 'react';

type TextInputProps = React.InputHTMLAttributes<HTMLInputElement>;

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ type = 'text', ...props }, ref) => {
    return (
      <input
        className="p-1.5 bg-monster-400 rounded-xs shadow-xs text-sm"
        {...{ ref, type }}
        {...props}
      />
    );
  },
);

TextInput.displayName = 'TextInput';
export default TextInput;
