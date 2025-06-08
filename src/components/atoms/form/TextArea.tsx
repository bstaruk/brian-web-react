import React from 'react';

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
    return (
      <textarea
        className="p-2 bg-monster-400 text-monster-50 border border-monster-400 focus:border-monster-200 rounded-xs font-sans text-base outline-0"
        {...{ ref }}
        {...props}
      />
    );
  },
);

TextArea.displayName = 'TextArea';
export default TextArea;
