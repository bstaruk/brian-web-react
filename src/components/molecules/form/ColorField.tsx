import type { AnyFieldApi } from '@tanstack/react-form';
import clsx from 'clsx';
import { ColorInput, FormFieldMessage } from 'components';

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
        className="text-sm font-medium flex flex-col gap-0.5"
        htmlFor={field.name}
      >
        <span className={clsx({ 'sr-only': hideLabel })}>{label}:</span>

        <span className="flex items-center gap-2 cursor-pointer">
          <ColorInput
            id={field.name}
            name={field.name}
            value={String(field.state.value || '#000000')}
            onBlur={field.handleBlur}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              field.handleChange(e.target.value)
            }
            {...props}
          />
          <span className="font-mono text-sm text-monster-200 hover:text-monster-100 transition-colors">
            {String(field.state.value || '#000000')}
          </span>
        </span>
      </label>

      <FormFieldMessage {...{ field }} />
    </div>
  );
};

export default ColorField;
