import type { AnyFieldApi } from '@tanstack/react-form';
import clsx from 'clsx';
import { Checkbox, FormFieldMessage } from 'components';

type CheckboxFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  description?: string;
  field: AnyFieldApi;
  hideLabel?: boolean;
  label: string;
};

const CheckboxField: React.FC<CheckboxFieldProps> = ({
  className,
  field,
  hideLabel,
  label,
  ...props
}) => {
  return (
    <div className={clsx('flex flex-col gap-0.5', className)}>
      <div className="flex items-center gap-2">
        <Checkbox
          id={field.name}
          name={field.name}
          checked={!!field.state.value}
          onBlur={field.handleBlur}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            field.handleChange(e.target.checked)
          }
          {...{ hideLabel, label }}
          {...props}
        />
      </div>

      <FormFieldMessage {...{ field }} />
    </div>
  );
};

export default CheckboxField;
