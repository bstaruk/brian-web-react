import type { AnyFieldApi } from '@tanstack/react-form';
import clsx from 'clsx';
import FieldMessage from 'atoms/form/FieldMessage';
import TextInput from 'atoms/form/TextInput';

type TextFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  field: AnyFieldApi;
  hideLabel?: boolean;
  label: string;
  valueAsNumber?: boolean;
};

const TextField: React.FC<TextFieldProps> = ({
  className,
  field,
  hideLabel,
  label,
  valueAsNumber,
  ...props
}) => {
  return (
    <div className={clsx('flex flex-col gap-0.5', className)}>
      <label
        className={clsx('text-sm font-medium', { 'sr-only': hideLabel })}
        htmlFor={field.name}
      >
        {label}:
      </label>

      <TextInput
        id={field.name}
        name={field.name}
        value={`${field.state.value}`}
        onBlur={field.handleBlur}
        onChange={(e) =>
          field.handleChange(
            valueAsNumber ? e.target.valueAsNumber : e.target.value,
          )
        }
        {...props}
      />

      <FieldMessage {...{ field }} />
    </div>
  );
};

export default TextField;
