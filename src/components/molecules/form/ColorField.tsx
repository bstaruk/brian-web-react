import type { AnyFieldApi } from '@tanstack/react-form';
import clsx from 'clsx';
import { ColorInput, FormFieldMessage, TextInput } from 'components';

type ColorFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  field: AnyFieldApi;
  hideLabel?: boolean;
  label: string;
};

const ColorField: React.FC<ColorFieldProps> = ({
  className,
  field,
  hideLabel,
  label,
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

      <div className="flex items-center gap-2">
        <TextInput
          id={field.name}
          name={field.name}
          value={String(field.state.value || '')}
          onBlur={field.handleBlur}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            field.handleChange(e.target.value)
          }
          placeholder="#000000"
          className="grow shrink"
          {...props}
        />

        <ColorInput
          value={String(field.state.value || '#000000')}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            field.handleChange(e.target.value)
          }
          title="Pick a color"
          className="shrink-0"
        />
      </div>

      <FormFieldMessage {...{ field }} />
    </div>
  );
};

export default ColorField;
