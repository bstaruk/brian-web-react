import type { AnyFieldApi } from '@tanstack/react-form';
import clsx from 'clsx';
import FieldMessage from 'atoms/form/FieldMessage';
import Select, { type SelectOption } from 'atoms/form/Select';

type SelectFieldProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  field: AnyFieldApi;
  hideLabel?: boolean;
  label: string;
  options: SelectOption[];
  placeholder?: string;
};

const SelectField: React.FC<SelectFieldProps> = ({
  className,
  field,
  hideLabel,
  label,
  options,
  placeholder,
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

      <Select
        id={field.name}
        name={field.name}
        value={String(field.state.value || '')}
        onBlur={field.handleBlur}
        onChange={(e) => field.handleChange(e.target.value)}
        {...{ options, placeholder }}
        {...props}
      />

      <FieldMessage {...{ field }} />
    </div>
  );
};

export default SelectField;
