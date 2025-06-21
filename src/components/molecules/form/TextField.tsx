import type { AnyFieldApi } from '@tanstack/react-form';
import clsx from 'clsx';
import FieldMessage from 'atoms/form/FieldMessage';
import TextInput from 'atoms/form/TextInput';

type TextFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  field: AnyFieldApi;
  label: string;
  valueAsNumber?: boolean;
};

const TextField: React.FC<TextFieldProps> = ({
  className,
  field,
  label,
  valueAsNumber,
  ...props
}) => {
  return (
    <div className={clsx('flex flex-col gap-0.5', className)}>
      <label className="text-sm font-medium" htmlFor={field.name}>
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
