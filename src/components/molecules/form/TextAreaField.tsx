import type { AnyFieldApi } from '@tanstack/react-form';
import FieldMessage from 'atoms/form/FieldMessage';
import TextArea from 'atoms/form/TextArea';

type TextAreaFieldProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  field: AnyFieldApi;
  label: string;
  valueAsNumber?: boolean;
};

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  field,
  label,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-0.5">
      <label className="text-sm font-medium" htmlFor={field.name}>
        {label}:
      </label>

      <TextArea
        id={field.name}
        name={field.name}
        value={`${field.state.value}`}
        onBlur={field.handleBlur}
        {...props}
      />

      <FieldMessage {...{ field }} />
    </div>
  );
};

export default TextAreaField;
