import React from 'react';

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
    return (
      <textarea
        className="p-2 bg-monster-400/75 text-monster-50 border border-monster-400 focus:border-monster-200 rounded-xs font-mono text-mono outline-0"
        {...{ ref }}
        {...props}
      />
    );
  },
);

TextArea.displayName = 'TextArea';
export default TextArea;
